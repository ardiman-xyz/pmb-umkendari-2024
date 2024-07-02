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

//        if($information instanceof InformationEntity) {

            if ($dto->roadmap !== null) {
                if (is_string($dto->roadmap) && filter_var($dto->roadmap, FILTER_VALIDATE_URL)) {
                    $information->roadmap = $dto->roadmap;
                } else {
                    if ($information->roadmap) {
                        $this->storageService->deleteFile($information->roadmap);
                    }
                    $fileData = $this->storageService->uploadFile($dto->roadmap);
                    $information->roadmap = $fileData['path'];
                }
            }

            if ($dto->entryPathsRequirements !== null) {
                if (is_string($dto->entryPathsRequirements) && filter_var($dto->entryPathsRequirements, FILTER_VALIDATE_URL)) {
                    $information->entry_paths_requirements = $dto->entryPathsRequirements;
                } else {
                    if ($information->entry_paths_requirements) {
                        $this->storageService->deleteFile($information->entry_paths_requirements);
                    }
                    $fileData = $this->storageService->uploadFile($dto->entryPathsRequirements);
                    $information->entry_paths_requirements = $fileData['path'];
                }
            }

            if ($dto->admissionBrochure !== null) {
                if (is_string($dto->admissionBrochure) && filter_var($dto->admissionBrochure, FILTER_VALIDATE_URL)) {
                    $information->admission_brochure = $dto->admissionBrochure;
                } else {
                    if ($information->admission_brochure) {
                        $this->storageService->deleteFile($information->admission_brochure);
                    }
                    $fileData = $this->storageService->uploadFile($dto->admissionBrochure);
                    $information->admission_brochure = $fileData['path'];
                }
            }

            return $information->save();
//        }

//        if($information instanceof Information) {
//            $fileData = $this->storageService->uploadFile($dto->roadmap);
//            $information->roadmap = $fileData['path'];
//            return $information->save();
//        }

    }
}
