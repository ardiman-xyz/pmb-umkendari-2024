<?php

namespace App\Services;

use App\Dto\Slider\Store;
use App\Entities\Slider;
use App\Helpers\StorageServiceHelper;
use App\Repositories\SliderRepository;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class SliderService
{
    public function __construct(
        protected SliderRepository $sliderRepository,
        protected StorageServiceHelper $storageService
    ){}

    public function getAll()
    {
        return $this->sliderRepository->getAll();
    }

    public function save(Store $dto)
    {
        try {
            DB::beginTransaction();

            $fileData = $this->storageService->uploadFile($dto->file);

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
        try {
            DB::beginTransaction();

            $slider = $this->sliderRepository->findById($id);

            if (!$slider) {
                throw new Exception('Slider tidak ditemukan');
            }

            $this->storageService->deleteFile($slider->image_path);
            $slider->delete();

            DB::commit();
            return true;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menghapus slider: ' . $e->getMessage());
        }
    }
}
