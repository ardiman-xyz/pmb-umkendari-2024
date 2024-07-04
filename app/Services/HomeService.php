<?php

namespace App\Services;

use App\Repositories\SliderRepository;

class HomeService
{
    public function __construct(
        protected SliderRepository $sliderRepository,
    ){}

    public function getDataHome()
    {
        $sliders = $this->sliderRepository->getAll();

        return [
            "sliders" => $sliders,
        ];
    }
}
