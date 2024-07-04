<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaView;

class RegistrationFlow extends Controller
{

    public function __construct(
        protected HomeService $homeService
    ){}


    public function Index(): InertiaView
    {
        $information = $this->homeService->getInformation();

        return Inertia::render("Guest/Flow/Index", [
            "information" => $information
        ]);
    }
}
