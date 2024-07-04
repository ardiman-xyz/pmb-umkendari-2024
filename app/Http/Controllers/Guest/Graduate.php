<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Inertia\Inertia;

class Graduate extends Controller
{
    public function __construct(
        protected HomeService $homeService
    ){}


    public function index()
    {
        $data = $this->homeService->getFacultyGraduate();

        return Inertia::render("Guest/Graduate/Index", [
            "data" => $data
        ]);
    }
}
