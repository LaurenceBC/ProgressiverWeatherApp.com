<template>
  <div>
    <weathercurrent
      :currentWeatherData="localWeatherData.current"
      :onUsersHome="onHomePage"
      :userLoggedIn="userLoggedInStatus"
    ></weathercurrent>

    <weatherforecasted :forecastedWeatherData="localWeatherData.forecasted"></weatherforecasted>
  </div>
</template>

<script>
//Import weather components partials
import weathercurrent from "./partial-weather-current.vue";
import weatherforecasted from "./partial-weather-forecast.vue";

export default {
  mounted() {
    console.log("Weather component mounted.");
  },
  components: {
    weathercurrent,
    weatherforecasted
  },

  created() {
    //if no location name passed a prop or weatherData is null then load default location.
    if (this.locationName) {
      this.searchWeather(this.locationName);
    } else if (!this.weatherData === null) {
        this.processWeatherData(weatherData)
     // this.localWeatherData = weatherData
    } else {
        this.searchWeather("taunton");
    }
  },
  props: {
    locationName: null,
    weatherData: null,
    // onUsersHomePage: false,
    userLoggedIn: false
  },

  data() {
    return {
      localWeatherData: null,
      userLoggedInStatus: this.$store.state.loggedInStatus || false,
      onHomePage: false,
      fetchWetherRoute: "/weather"
    };
  },
  watch: {
    //Watch location name change for
    locationName(newValue) {
      this.searchWeather(newValue);
    }
  },

  methods: {
    //Processes the weather fetched by methods below.
    processWeatherData(data) {
      //Check if weather has userweather data with it
      if (data.userWeatherData) {
        this.onHomePage = data.userWeatherData.homepage;
      }
      this.localWeatherData = data.weatherData;
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
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>
