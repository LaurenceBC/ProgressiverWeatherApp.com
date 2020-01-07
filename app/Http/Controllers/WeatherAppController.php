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
| The weather app controller retrieves weather from the API and returns it either
| as a json response or to the weather app view.
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
                                            ->get(['homepage','favourite','longitude','latitude']);

            if ($usersHomePageWeather != null) {

                $tmp = array();
                foreach ($usersHomePageWeather as $item)
                {
                    array_push($tmp, ['userWeatherData' => $item,
                                     'weatherData' =>  $this->fetchWeatherDataByCoordinates($item->longitude, $item->latitude)
                                    ]);
                }
                return response()->json($tmp,200);
            }
            return null;
    }


    //Get request
    public function fetchWeather(Request $request)
    {
        //validate request


        $searchTerm = $request->input('locationName');

        $currentWeatherData = null;

        try {
            $currentWeatherData = WeatherAPI::getCurrentByCity($searchTerm);
        } catch (Exception $e) {

            return response()->json([
                'error' => 'location not found'
            ], 404);
        }

        $forecastedWeatherData = WeatherAPI::getForecastByCity($searchTerm);

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
