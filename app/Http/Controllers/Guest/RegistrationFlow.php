<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response as InertiaView;

class RegistrationFlow extends Controller
{
    public function Index(): InertiaView
    {
        return Inertia::render("Guest/Flow/Index");
    }
}
