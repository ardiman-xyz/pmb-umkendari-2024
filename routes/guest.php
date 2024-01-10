<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Guest\HomeController::class, "index"]);
