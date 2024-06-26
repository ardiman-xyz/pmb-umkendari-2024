<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FacilityController extends Controller
{
    public function index()
    {
        return Inertia::render("Profiles/Facility/Index");
    }
}
