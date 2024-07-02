<?php

namespace App\Services;

use App\Dto\Information\InformationDto;
use App\Entities\Information as InformationEntity;
use App\Helpers\StorageServiceHelper;
use App\Models\Information;
use App\Repositories\InformationRepository;
use Exception;

class InformationService
{
    public function __construct(
        protected InformationRepository $informationRepository,
        protected StorageServiceHelper $storageService
    ){}

    public function getData()
    {
        return $this->informationRepository->findData();
    }

    /**
     * @throws Exception
     */
    public function save(InformationDto $dto)
    {

        $information = $dto->id ? $this->informationRepository->findById($dto->id) : new Information();

        if (!$information) {
            throw new Exception("Information not found");
        }

        if ($dto->roadmap !== null) {

            if ($information->roadmap) {
                $this->storageService->deleteFile($information->roadmap);
            }
            $fileData = $this->storageService->uploadFile($dto->roadmap);
            $information->roadmap = $fileData['path'];
        }

        if($information instanceof InformationEntity) {
            $information = new Information();
            return $this->informationRepository->save($information);
        }

        if($information instanceof Information) {
            return $information->save();
        }

    }
}
