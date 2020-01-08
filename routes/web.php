<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth::routes();


// Authentication Routes...
//Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login')->name('login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
//Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register')->name('register');

// Password Reset Routes...
//Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
//Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// Email Verification Routes...
//Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
//Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify'); // v6.x
/* Route::get('email/verify/{id}', 'Auth\VerificationController@verify')->name('verification.verify'); // v5.x */
//Route::get('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');

//Route::get('/{any}', 'WeatherController@index')->where('any', '.*')->name('home');
// Route::get('/home', 'WeatherController@index')->name('home');

Route::get('login/redirect/{driver}', 'Auth\LoginController@redirectToProvider')
    ->name('login.provider')
    ->where('driver', implode('|', (array) config('auth.socialite.drivers')));

Route::get('login/{driver}/callback', 'Auth\LoginController@handleProviderCallback')
    ->name('login.callback')
    ->where('driver', implode('|', (array) config('auth.socialite.drivers')));

    Route::get('/get/csrftoken', function () {
        return response()->json([csrf_token()]);
    });




//get logged in users homepage weather
Route::get('/user/weather/home', 'WeatherAppController@getUsersHomePageWeatherData')->name('user.weather.home');

//addremoveweather home
Route::post('user/weather/home/add', 'UsersWeatherManagerController@addRemoveHome')->name('user.weather.home.add');


Route::post('/weather', 'WeatherAppController@fetchWeather')->name('weather.fetch');


Route::get('/', 'WeatherAppController@index');

//Must come last
Route::get('/{any}', 'WeatherAppController@index')->where('any', '.*')->name('home');
