<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Inertia\Inertia;

class UndergraduateController extends Controller
{

    public function __construct(
        protected HomeService $homeService
    ){}

    public function index()
    {
        $data = $this->homeService->getFacultyUndergraduate();

        return Inertia::render("Guest/Undergraduate/Index", [
            "data" => $data
        ]);
    }
}
