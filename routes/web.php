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
            Route::post('/', [\App\Http\Controllers\DepartmentController::class, "store"])->name("department.store");
            Route::put('{id}', [\App\Http\Controllers\DepartmentController::class, "update"])->name("department.update");
            Route::delete('{id}', [\App\Http\Controllers\DepartmentController::class, "destroy"])->name("department.destroy");
        });

        Route::prefix('faculty')->group(function () {
            Route::get('/', [\App\Http\Controllers\FacultyController::class, "index"])->name("faculty.index");
            Route::post('/', [\App\Http\Controllers\FacultyController::class, "store"])->name("faculty.store");
            Route::get('{id}', [\App\Http\Controllers\FacultyController::class, "show"])->name("faculty.show");
            Route::put('{id}/update-profile', [\App\Http\Controllers\FacultyController::class, "updateProfile"])->name("faculty.update-profile");
            Route::post('{id}/cover', [\App\Http\Controllers\FacultyController::class, "updateCover"])->name("faculty.update-cover");
            Route::delete('{id}', [\App\Http\Controllers\FacultyController::class, "destroy"])->name("faculty.destroy");
        });

        Route::prefix('information')->group(function () {
            Route::get('/', [\App\Http\Controllers\InformationController::class, "index"])->name("info.index");
            Route::post('/', [\App\Http\Controllers\InformationController::class, "store"])->name("info.roadmap.store");
        });
    });

    Route::prefix("settings")->group(function () {
       Route::get("/", function () {
           return Inertia::render("Settings/Index");
       })->name("settings.index");

        Route::prefix("account")->group(function () {
            Route::put("password", [\App\Http\Controllers\Settings\AccountSetting::class, "updatePassword"])->name("setting.password.update");
            Route::put("{userId}/email", [\App\Http\Controllers\Settings\AccountSetting::class, "updateEmail"])->name("user.email.update");
            Route::post("{userId}/avatar", [\App\Http\Controllers\Settings\AccountSetting::class, "updateAvatar"])->name("user.avatar.update");
        });

    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/logout', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy'])->name('logout');

require __DIR__.'/auth.php';

require __DIR__.'/guest.php';
