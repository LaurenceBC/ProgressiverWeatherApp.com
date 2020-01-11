<?php

namespace ProgressiveWeatherApp\Traits;


use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\GuzzleException;

trait WeatherAPI
{


    private static $apiKey = '14b07ab4a980f1c5f484fb7bdbd25257';

    private static $weatherData = null;


    /**
     * Packages the api reponse being used into a standard.
     */
    public static function packageCurrentWeather($weatherData)
    {
        $dateTime = new \DateTime();

        //dd($weatherData->id);

        return [
            'id' => $weatherData->id,
            'location_name' => $weatherData->name,
            'country' => $weatherData->sys->country,
            'coordinates' => $weatherData->coord,
            'weather_summary' => $weatherData->weather[0]->main,
            'weather_description' => $weatherData->weather[0]->description,
            'temp' => $weatherData->main->temp,
            'pressure' => $weatherData->main->pressure,
            'humidity' => $weatherData->main->humidity,
            'temp_min' => $weatherData->main->temp_min,
            'temp_max' => $weatherData->main->temp_max,
            'wind' => [
                'speed' => $weatherData->wind->speed,
                'direction' => $weatherData->wind->deg ?? null
            ],
            'visibility' => $weatherData->visibility,
            'sys_time' => $weatherData->dt,
            'date' => $dateTime->setTimestamp($weatherData->dt)->format('jS F'),
            'day' => $dateTime->setTimestamp($weatherData->dt)->format('l'),
            'time' => $dateTime->setTimestamp($weatherData->dt)->format('g:ia'),
            'day_short' => $dateTime->setTimestamp($weatherData->dt)->format('D'),
            'sunrise' => $weatherData->sys->sunrise,
            'sunset' => $weatherData->sys->sunset,
            'icon' => self::$mdiIcons[$weatherData->weather[0]->icon] ?? null
        ];
    }

    private static $mdiIcons = [
        '01d' => ['name' => 'mdi-weather-sunny', 'color' => 'yellow'], //clear day
        '01n' => ['name' => 'mdi-weather-night', 'color' => 'grey'], //Clear night
        '02d' => ['name' => 'mdi-weather-partly-cloudy', 'color' => 'grey'], //few clouds - day
        '02n' => ['name' => 'mdi-weather-night-partly-cloudy', 'color' => 'grey'], //few clouds - night
        '03d' => ['name' => 'mdi-weather-cloudy', 'color' => 'grey'],  //scattered clouds - day
        '03n' => ['name' => 'mdi-weather-cloudy', 'color' => 'grey'], //scattered clouds - night
        '04d' => ['name' => 'mdi-weather-cloudy', 'color' => 'grey'], //broken clouds - day
        '04n' => ['name' => 'mdi-weather-cloudy', 'color' => 'grey'], //broken clouds - night
        '09d' => ['name' => 'mdi-weather-pouring', 'color' => 'blue'], //shower rain - day
        '09n' => ['name' => 'mdi-weather-pouring', 'color' => 'blue'], //shower rain - night
        '10d' => ['name' => 'mdi-weather-rainy', 'color' => 'blue'], //rain
        '10n' => ['name' => 'mdi-weather-rainy', 'color' => 'blue'], //rain
        '11d' => ['name' => 'mdi-weather-lightning-rainy', 'color' => 'grey'], //thunderstorm
        '11n' => ['name' => 'mdi-weather-lightning-rainy', 'color' => 'grey'], //thunderstorm
        '13d' => ['name' => 'mdi-weather-snowy', 'color' => 'grey'], //snow
        '13n' => ['name' => 'mdi-weather-snowy', 'color' => 'grey'], //snow
        '50d' => ['name' => 'mdi-weather-fog', 'color' => 'grey'], //mist
        '50n' => ['name' => 'mdi-weather-fog', 'color' => 'grey'], //mist
    ];

    private static function getWeatherData($SearchType, $Queries)
    {

        $APIQuery['query'] = $Queries;
        $client = new GuzzleClient();
        $res = $client->request('GET', 'http://api.openweathermap.org/data/2.5/' .
            $SearchType . '?', $APIQuery);

        $APIResponse = \GuzzleHttp\json_decode($res->getBody()->getContents());

        //package response
        // dd($APIResponse);
        return $APIResponse;
    }



    public static function getCurrentByCity($City)
    {


        if (strpos($City, ',') === false) {
            $City = $City . ',GB';
        }
        $Response = self::getWeatherData('weather', array(
            'appid' => self::$apiKey,
            'q' => $City, 'units' => 'metric'
        ));



        return self::packageCurrentWeather($Response);
    }

    public static function getForecastByCity($City)
    {
        if (strpos($City, ',') === false) {
            $City = $City . ',GB';
        }
        $Response = self::getWeatherData(
            'forecast',
            array('appid' => self::$apiKey, 'q' => $City, 'units' => 'metric')
        );
        $Response = self::packageForcast($Response);
        return self::filter5DayForecast($Response);
    }


    public static function getCurrentByCoordinates($lon, $lat)
    {
        $Response = self::getWeatherData(
            'weather',
        array('appid' => self::$apiKey, 'lat' => $lat, 'lon' => $lon, 'units' => 'metric'));

        return self::packageCurrentWeather($Response);
    }

    public static function getForecastByCoordinates($lon, $lat)
    {

        $Response = self::getWeatherData(
            'forecast',
            array('appid' => self::$apiKey, 'lat' => $lat, 'lon' => $lon, 'units' => 'metric')

        );
        $Response = self::packageForcast($Response);
        return self::filter5DayForecast($Response);
    }

    public static function packageForcast($ForecastData)
    {

        $tmp = array();
        $dateTime = new \DateTime();

        //dd($ForecastData);

        foreach ($ForecastData->list as $item) {


            array_push($tmp, [


                'sys_time' => $item->dt,
                'date' => $dateTime->setTimestamp($item->dt)->format('jS F'),
                'day' => $dateTime->setTimestamp($item->dt)->format('l'),
                'day_short' => $dateTime->setTimestamp($item->dt)->format('D'),
                'time' => $dateTime->setTimestamp($item->dt)->format('g:ia'),
                'weather_description' => $item->weather[0]->description,
                'temp' => $item->main->temp,
                'temp_min' => $item->main->temp_min,
                'temp_max' => $item->main->temp_max,
                'pressure' => $item->main->pressure,
                'humidity' => $item->main->humidity,
                'wind' => [
                    'speed' => $item->wind->speed,
                    'direction' => $item->wind->deg
                ],
                'icon' => self::$mdiIcons[$item->weather[0]->icon] ?? null

            ]);
        }
        return $tmp;
    }

    //Returns 5 days off forecasted data at 24hour periods from time of first
    //
    public static function filter5DayForecast($ForecastData)
    {

        $returnedData = [];
        //Foreach item

        $previousDate = new \DateTime();
        $previousDate->format('d');


        foreach ($ForecastData as $forcastDay) {

            //dd($forcastDay['time']);
            $date = new \DateTime();
            $date->setTimestamp($forcastDay['sys_time']);

            if ($date->format('d') != $previousDate->format('d')) {
                array_push($returnedData, $forcastDay);
                $previousDate = $date;
            }
        }
        return $returnedData;
    }
}
