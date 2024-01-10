<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response as InertiaView;


class HomeController extends Controller
{
    public function Index(): InertiaView
    {
        return Inertia::render("Guest/Home");
    }
}
