<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Services\HomeService;
use Inertia\Inertia;
use Inertia\Response as InertiaView;


class HomeController extends Controller
{
    public function __construct(
        protected HomeService $homeService
    ){}

    public function Index(): InertiaView
    {
        $data = $this->homeService->getDataHome();

        return Inertia::render("Guest/Home", [
            "data" => $data,
            "appUrl" => config('app.url')
        ]);
    }
}
