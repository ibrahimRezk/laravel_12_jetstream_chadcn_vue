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


/// update files composables/useAppearnce.js and useInitials.js

    // convert :href="route('profile.edit')"  to   :href="route('profile.show')"

    // update page    pages/profile/show to the current one here
    // update formSection.vue and actionSection.vue components to this: 
        // first div         <div class="md:grid  ">
        // second div        <div class="mt-5 md:col-span-2">
        // and in these two pages convert gray to zinc 

        // also convert gray to zinc in these comonents  modal  dialogModal textinput secondaybutton


        // check changes in sidebar.vue and sidebarInset components to add background image effect