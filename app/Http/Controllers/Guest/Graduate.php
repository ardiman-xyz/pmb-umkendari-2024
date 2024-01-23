<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class Graduate extends Controller
{
    public function index()
    {
        return Inertia::render("Guest/Graduate/Index");
    }
}
