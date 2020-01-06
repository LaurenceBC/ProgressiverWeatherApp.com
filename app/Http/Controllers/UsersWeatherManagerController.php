<?php

namespace ProgressiveWeatherApp\Http\Controllers;

use Illuminate\Http\Request;

use ProgressiveWeatherApp\UsersWeather;

use Auth;

class UsersWeatherManagerController extends Controller
{


    //Add middleware constructor non guest



    public function addRemoveHome(Request $request)
    {
        //validate

        //merge on user/long/lat   -homepage true

        //$request->input('homepage')

        //get all userswether and look for homepage:true ,



        $d = UsersWeather::updateOrCreate(['users_id' => Auth::User()->id,
                                           'longitude' => $request->input('longitude'),
                                           'latitude' => $request->input('latitude')],
                                    ['homepage' => $request->input('homepage')]);



return $d;

        //if good return else return error


    }






}
