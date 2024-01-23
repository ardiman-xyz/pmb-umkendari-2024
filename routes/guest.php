<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Guest\HomeController::class, "index"])->name("home");
Route::get('sarjana', [\App\Http\Controllers\Guest\UndergraduateController::class, "index"])->name("undergraduate.index");
