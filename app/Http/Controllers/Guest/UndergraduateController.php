<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class UndergraduateController extends Controller
{
    public function index()
    {
        return Inertia::render("Guest/Undergraduate/Index");
    }
}
