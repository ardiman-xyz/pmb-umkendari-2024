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
            throw new Exception('Gagal menyimpan slider: ' . $e->getMessage());
        }
    }
}
