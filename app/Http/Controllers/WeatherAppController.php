<?php

namespace ProgressiveWeatherApp\Http\Controllers;


use Exception;
use ProgressiveWeatherApp\Traits\WeatherAPI;
use Illuminate\Http\Request;
use Auth;
use ProgressiveWeatherApp\UsersWeather;


/*
|--------------------------------------------------------------------------
| Weather app controller
|--------------------------------------------------------------------------
|
|
|
*/

class WeatherAppController extends Controller
{

    public function index()
    {
        return view('weather-app');
    }



    //Gets users homepage weather or returns null
    public function getUsersHomePageWeatherData(Request $request)
    {

        $usersHomePageWeather = UsersWeather::where(['users_id' => Auth::user()->id, 'homepage' => 1])
            ->get(['homepage', 'favourite', 'longitude', 'latitude']);

        if ($usersHomePageWeather != null) {

            $tmp = array();
            foreach ($usersHomePageWeather as $item) {
                array_push($tmp, [
                    'userWeatherData' => $item,
                    'weatherData' =>  $this->fetchWeatherDataByCoordinates($item->longitude, $item->latitude)
                ]);
            }
            return response()->json($tmp, 200);
        }
        return null;
    }


    //Gets weather by geo coords
    public function getWeatherByGeo(Request $request)
    {

            //Validate request.


            $geoCoords = ['longitude' => $request->input('longitude'), 'latitude' => $request->input('latitude')];


            //Fetch data by coords (includes current and forecast).
            $weatherData = $this->fetchWeatherDataByCoordinates($geoCoords['longitude'], $geoCoords['latitude']);

            //Try and fetch user data for weather
            $usersWeatherData = Auth::check() ? $this->getUserDataForWeather(
                $weatherData['coordinates']->lon,
                $weatherData['coordinates']->lat
            ) :  null;


            //Return json response.
            return response()->json(['weatherData' => $weatherData,
                                     'usersWeatherData' => $usersWeatherData]);




    }


    //Get weather by location name.
    public function getWeatherByLocationName(Request $request)
    {
        //Validate request.
        $request->validate([
            'locationName' => 'required|max:255',
        ]);


        $locationName = $request->input('locationName');

        $currentWeatherData = null;

        try {
            $currentWeatherData = WeatherAPI::getCurrentByCity($locationName);
        } catch (Exception $e) {



            return response()->json([
                'error' => 'location not foundddd'
            ], 404);
        }

        $forecastedWeatherData = WeatherAPI::getForecastByCity($locationName);

        //If a user is logged on try and fetch their weather data
        $usersData = Auth::check() ? $this->getUserDataForWeather(
            $currentWeatherData['coordinates']->lon,
            $currentWeatherData['coordinates']->lat
        ) :  null;

        return response()->json(
            [
                'userWeatherData' => $usersData,
                'weatherData' => [
                    'current' => $currentWeatherData,
                    'forecasted' => $forecastedWeatherData
                ]
            ],
            200
        );
    }



    /**
     * Fetchs weather by gps coords from API libary
     */
    protected function fetchWeatherDataByCoordinates(string $longitude, string $latitude)
    {

        $currentWeatherData = null;
        $forecastedWeatherData = null;

        try {
            $currentWeatherData = WeatherAPI::getCurrentByCoordinates($longitude, $latitude);
        } catch (Exception $e) {

            return response()->json([
                'error' => 'location not found'
            ], 404);
        }

        $forecastedWeatherData = WeatherAPI::getForecastByCoordinates($longitude, $latitude);

        return
            [
                'current' => $currentWeatherData,
                'forecasted' => $forecastedWeatherData
            ];
    }




    /**
     * Looks up users weather data by long/lat
     */
    protected function getUserDataForWeather($longitude, $latitude)
    {
        //lookup usersweather with params and return it.

        $userWeather = UsersWeather::where([
            ['users_id', Auth::user()->id],
            ['longitude', $longitude],
            ['latitude', $latitude]
        ])->get(['homepage'])->first();

        if ($userWeather == null) {
            return null;
        } else {
            return $userWeather->toArray();
        }
    }
}
