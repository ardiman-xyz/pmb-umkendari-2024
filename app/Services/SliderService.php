<?php

namespace App\Services;

use App\Dto\Slider\Store;
use App\Entities\Slider;
use App\Repositories\SliderRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class SliderService
{
    public function __construct(
        protected SliderRepository $sliderRepository
    ){}

    public function getAll()
    {
        return $this->sliderRepository->getAll();
    }

    public function save(Store $dto)
    {
        $storageAccessKey = env('STORAGE_ACCESS_KEY');
        $storageSecretKey = env('STORAGE_SECRET_KEY');

        try {
            DB::beginTransaction();

            $response = Http::withHeaders([
                'X-Access-Key' => $storageAccessKey,
                'X-Secret-Key' => $storageSecretKey,
            ])->attach(
                'file',
                file_get_contents($dto->file),
                $dto->file->getClientOriginalName(),
                ['Content-Type' => $dto->file->getMimeType()]
            )->post('https://files.umkendari.ac.id/api/media');

            if (!$response->successful()) {
                throw new Exception('Gagal mengunggah file: ' . $response->body());
            }

            $responseData = $response->json();

            if (!isset($responseData['data']) || !is_array($responseData['data'])) {
                throw new Exception('Response tidak valid dari storage service');
            }

            $fileData = $responseData['data'];

            if (!isset($fileData['path']) || !isset($fileData['name'])) {
                throw new Exception('Data file tidak lengkap dari storage service');
            }

            $data = new Slider();
            $data->imagePath = $fileData['path'];
            $data->externalLink = null;
            $data->link = null;

            $res = $this->sliderRepository->save($data);

            DB::commit();
            return $res;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menyimpan slider: ' . $e->getMessage());
        }
    }

    public function delete(string $id): bool
    {
        $storageAccessKey = env('STORAGE_ACCESS_KEY');
        $storageSecretKey = env('STORAGE_SECRET_KEY');

        try {
            DB::beginTransaction();

                $slider = $this->sliderRepository->findById($id);

                if (!$slider) {
                    throw new Exception('Slider tidak ditemukan');
                }

                $response = Http::withHeaders([
                    'X-Access-Key' => $storageAccessKey,
                    'X-Secret-Key' => $storageSecretKey,
                ])->post('https://files.umkendari.ac.id/api/media/delete', [
                    'file_path' => $slider->image_path
                ]);

                if (!$response->successful()) {
                    throw new Exception('Gagal menghapus file: ' . $response->status() . ' - ' . $response->body());
                }

                $responseData = $response->json();

                if (!isset($responseData['status']) || $responseData['status'] !== true) {
                    throw new Exception('Gagal menghapus file dari storage service : ' .  $responseData);
                }
                $slider->delete();

                DB::commit();
                return true;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menghapus slider: ' . $e->getMessage());
        }
    }
}
