<?php

namespace App\Services;

use App\Repositories\AchievementRepository;
use App\Repositories\FacilityRepository;
use App\Repositories\FacultyRepository;
use App\Repositories\InformationRepository;
use App\Repositories\SliderRepository;

class HomeService
{
    public function __construct(
        protected SliderRepository $sliderRepository,
        protected FacilityRepository $facilityRepository,
        protected AchievementRepository $achievementRepository,
        protected InformationRepository $informationRepository,
        protected FacultyRepository $facultyRepository
    ){}

    public function getDataHome(): array
    {
        $sliders = $this->sliderRepository->getAll();
        $facilities = $this->facilityRepository->getAll();
        $achievements = $this->achievementRepository->getAll();
        $information = $this->informationRepository->findData();

        return [
            "sliders" => $sliders,
            "facilities" => $facilities,
            "achievements" => $achievements,
            "information" => $information
        ];
    }

    public function getFacultyUndergraduate()
    {
        return $this->facultyRepository->getFacultiesWithDepartmentsAndTuitionFees();
    }

    public function getFacultyGraduate()
    {
        return $this->facultyRepository->getDepartmentByGraduate();
    }
}
