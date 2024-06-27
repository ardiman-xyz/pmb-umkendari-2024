<?php

namespace App\Services;

use App\Dto\Facility\FacilityStore;
use App\Entities\Facility;
use App\Helpers\StorageServiceHelper;
use App\Repositories\FacilityRepository;
use Exception;
use Illuminate\Support\Facades\DB;

class FacilityService
{
    public function __construct(
        protected FacilityRepository $facilityRepository,
        protected StorageServiceHelper $storageService
    ){}

    public function getAll()
    {
        return $this->facilityRepository->getAll();
    }

    public function save(FacilityStore $dto)
    {
        try {
            DB::beginTransaction();

            $fileData = $this->storageService->uploadFile($dto->image);

            $data = new Facility();
            $data->name = $dto->name;
            $data->imagePath = $fileData['path'];

            $res = $this->facilityRepository->save($data);

            DB::commit();
            return $res;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menyimpan data: ' . $e->getMessage());
        }
    }

    public function update(string $id, string $name)
    {
        $facility = $this->facilityRepository->findById($id);
        if(!$facility) throw new Exception("Fasilitas tidak ditemukan");

        $facility->name = $name;
        $facility->save();

        return $facility;
    }

    public function delete(string $id): bool
    {
        try {
            DB::beginTransaction();

            $facility = $this->facilityRepository->findById($id);

            if (!$facility) {
                throw new Exception('Fasilitas tidak ditemukan');
            }

            $this->storageService->deleteFile($facility->image_path);
            $facility->delete();

            DB::commit();
            return true;

        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception('Gagal menghapus data: ' . $e->getMessage());
        }
    }
}
