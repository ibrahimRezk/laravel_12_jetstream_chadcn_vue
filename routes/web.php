<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});





/// add these to tailwind.config.js


	// 	 "./resources/**/*.blade.php",
    // "./resources/**/*.js", /// this one is very important 
    // "./resources/**/*.vue",
    // "./resources/**/*.ts",
    // "./components/**/*.{js,vue,ts}", // Add this if components are in a separate folder
    // "./src/**/*.{js,vue,ts}",




    // check         <!-- <AvatarImage v-if="showAvatar" :src="user.avatar!" :alt="user.name" /> -->


    // fix composables files 

    // convert :href="route('profile.edit')"  to   :href="route('profile.show')"