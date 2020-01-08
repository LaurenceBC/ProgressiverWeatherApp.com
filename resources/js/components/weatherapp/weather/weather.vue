<template>
  <div>
    <div v-if="!error">
    <!-- Current weather partial. -->
    <weathercurrent
      :currentWeatherData="currentWeatherData"
      :onUsersHome="onHomePage"
      :userLoggedIn="userLoggedInStatus"
    ></weathercurrent>

    <!-- Forecasted weather partial. -->
    <weatherforecasted :forecastedWeatherData="forecastedWeatherData"></weatherforecasted>
    </div>
    <weathererror v-if="error"></weathererror>
  </div>
</template>

<script>
//Import weather components partials
const weathercurrent  = () => import('./partial-weather-current.vue');
//import weathercurrent from "./partial-weather-current.vue";
//import weatherforecasted from "./partial-weather-forecast.vue";
const weatherforecasted   = () => import('./partial-weather-forecast.vue');
import weathererror from "./error.vue";

export default {
  mounted() {
    console.log("Weather component mounted.");

     if (this.locationName) {
      this.searchWeather(this.locationName);
    } else if (this.weatherData) {
        this.processWeatherData(this.weatherData)
    } else {
        this.searchWeather("taunton");
    }
  },
  components: {
    weathercurrent,
    weatherforecasted,
    weathererror,
  },

  created() {
  },
  props: {
    locationName: null,
    gpsCoords: null,
    weatherData: null,
    // onUsersHomePage: false,
    userLoggedIn: false
  },

  data() {
    return {
      localWeatherData: null,
      userLoggedInStatus: this.$store.state.loggedInStatus || false,
      onHomePage: false,
      fetchWetherRoute: "/weather",
      error: false,

      //Used for weather partials.
      currentWeatherData: null,
      forecastedWeatherData: null,
    };
  },
  watch: {
    //Watch location name prop change.
    locationName(newValue) {
      this.searchWeather(newValue);
    }
  },

  methods: {

    processWeatherData(data) {


      this.error = null;
      //Check if weather has userweather data with it
      if (data.userWeatherData) {
        this.onHomePage = data.userWeatherData.homepage;
      }
      this.currentWeatherData = data.weatherData.current;
      this.forecastedWeatherData = data.weatherData.forecasted;
    },

    //Fetchs weather from the backend API by location name.
    searchWeather(locationName) {
      axios
        .post(this.fetchWetherRoute, {
          locationName: locationName
        })
        .then(res => {
          this.processWeatherData(res.data);
        })
        .catch(err => {

         this.error = true;

        });
    }
  }
};
</script>
