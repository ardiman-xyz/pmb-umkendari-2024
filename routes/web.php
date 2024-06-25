<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SliderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::prefix('slider')->group(function () {
        Route::get('/', [SliderController::class, "index"])->name("slider.index");
        Route::get('create', [SliderController::class, "create"])->name("slider.create");
        Route::post('/', [SliderController::class, "store"])->name("slider.store");
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get("/register", function() {
     abort(404);
});
require __DIR__.'/guest.php';
