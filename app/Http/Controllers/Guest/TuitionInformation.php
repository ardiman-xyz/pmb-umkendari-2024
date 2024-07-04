<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Inertia\Inertia;
use Inertia\Response as InertiaView;


class TuitionInformation extends Controller
{
    public function __construct(
        protected HomeService $homeService
    ){}


    public function Index(): InertiaView
    {

        $data = $this->homeService->getFacultyUndergraduate();

        return Inertia::render("Guest/Tuition/Index", [
            "data" => $data
        ]);
    }

}
