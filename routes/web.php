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
        Route::delete('{id}', [SliderController::class, "destroy"])->name("slider.destroy");
    });

    Route::prefix('profile')->group(function () {
        Route::prefix('facilities')->group(function () {
            Route::get('/', [\App\Http\Controllers\FacilityController::class, "index"])->name("facility.index");
            Route::get('create', [\App\Http\Controllers\FacilityController::class, "create"])->name("facility.create");
            Route::post('/', [\App\Http\Controllers\FacilityController::class, "store"])->name("facility.store");
            Route::put('{id}', [\App\Http\Controllers\FacilityController::class, "update"])->name("facility.update");
            Route::delete('{id}', [\App\Http\Controllers\FacilityController::class, "destroy"])->name("facility.destroy");
        });
        Route::prefix('achievements')->group(function () {
            Route::get('/', [\App\Http\Controllers\AchievementController::class, "index"])->name("achievement.index");
            Route::get('create', [\App\Http\Controllers\AchievementController::class, "create"])->name("achievement.create");
            Route::post('/', [\App\Http\Controllers\AchievementController::class, "store"])->name("achievement.store");
            Route::put('{id}', [\App\Http\Controllers\AchievementController::class, "update"])->name("achievement.update");
            Route::delete('{id}', [\App\Http\Controllers\AchievementController::class, "destroy"])->name("achievement.destroy");
        });
    });

    Route::prefix('admission')->group(function () {
        Route::prefix('department')->group(function () {
            Route::get('/', [\App\Http\Controllers\DepartmentController::class, "index"])->name("department.index");
        });

        Route::prefix('faculty')->group(function () {
            Route::get('/', [\App\Http\Controllers\FacultyController::class, "index"])->name("faculty.index");
            Route::post('/', [\App\Http\Controllers\FacultyController::class, "store"])->name("faculty.store");
        });
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

require __DIR__.'/guest.php';
