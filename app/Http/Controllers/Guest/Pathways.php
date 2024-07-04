<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Inertia\Inertia;
use Inertia\Response as InertiaView;


class Pathways extends Controller
{

    public function __construct(
        protected HomeService $homeService
    ){}

    public function Index(): InertiaView
    {
        $information = $this->homeService->getInformation();

        return Inertia::render("Guest/Pathways/Index", [
            "information" => $information
        ]);
    }

}
