<?php

namespace ProgressiveWeatherApp;

use Illuminate\Database\Eloquent\Model;

class UsersWeather extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'users_id', 'longitude', 'latitude', 'homepage', 'favourite'
    ];

    protected $casts = [
        'homepage' => 'boolean',
    ];
}
