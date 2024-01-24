<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response as InertiaView;


class TuitionInformation extends Controller
{
    public function Index(): InertiaView
    {
        return Inertia::render("Guest/Tuition/Index");
    }

}
