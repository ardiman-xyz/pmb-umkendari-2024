<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Guest\HomeController::class, "index"])->name("home");
Route::get('sarjana', [\App\Http\Controllers\Guest\UndergraduateController::class, "index"])->name("undergraduate.index");
Route::get('pascasarjana', [\App\Http\Controllers\Guest\Graduate::class, "index"])->name("graduate.index");
Route::get('biaya-pendidikan', [\App\Http\Controllers\Guest\TuitionInformation::class, "index"])->name("tuition.index");
Route::get('persyaratan', [\App\Http\Controllers\Guest\Pathways::class, "index"])->name("pathways.index");
Route::get('alur-pendaftaran', [\App\Http\Controllers\Guest\RegistrationFlow::class, "index"])->name("flow.index");
