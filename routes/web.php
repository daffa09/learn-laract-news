<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [NewsController::class, 'index'])->name('news.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::post('/news', [NewsController::class, 'store'])->name('news.store');
    Route::get('/news', [NewsController::class, 'show'])->name('news.show');
    Route::get('/news/edit', [NewsController::class, 'edit'])->name('news.edit');
    Route::post('/news/update', [NewsController::class, 'update'])->name('news.update');
    Route::delete('/news', [NewsController::class, 'destroy'])->name('news.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
