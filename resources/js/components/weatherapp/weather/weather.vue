<template>
  <div>
    <div v-if="!error">
      <!-- Current weather partial. -->
      <weathercurrent
        :currentWeatherData="currentWeatherData"
        :onUsersHome="onHomePage"
        :userLoggedIn="userLoggedInStatus"
      ></weathercurrent>

      <v-tabs centered>
        <v-tab>5 Day forecast</v-tab>

        <v-tab>Map</v-tab>

        <v-tab-item>
          <!-- Forecasted weather partial. -->
          <weatherforecasted :forecastedWeatherData="forecastedWeatherData"></weatherforecasted>
        </v-tab-item>

        <v-tab-item>
          <googlemap :geoCoords="currentWeatherData.coordinates"></googlemap>
        </v-tab-item>
      </v-tabs>
    </div>
    <weathererror v-if="error"></weathererror>
  </div>
</template>

<script>
//Import weather components partials
const weathercurrent = () => import("./partial-weather-current.vue");
const weatherforecasted = () => import("./partial-weather-forecast.vue");
const googlemap = () => import("./partial-googlemap.vue");
const weathererror = () => import("./error.vue");
// import weathererror from "./error.vue";

export default {
  mounted() {
    //Check to see what prop to use.
    if (this.myLocation) {
      console.log("mylocation");
      this.getClientDeviceLocation();
    } else if (this.locationName) {
      this.searchWeather(this.locationName);
    } else if (this.weatherData) {
      this.processWeatherData(this.weatherData);
    } else if (this.geoCoords) {
      this.getWeatherByGeoCoords(this.geoCoords);
    } else {
      //Last resort if no prop passed.
      this.searchWeather("taunton");
    }
  },
  components: {
    weathercurrent,
    weatherforecasted,
    googlemap,
    weathererror
  },

  created() {},
  props: {
    //Component is being used to get weather of device location.
    myLocation: false,

    locationName: null,
    //array
    geoCoords: null,
    //object
    weatherData: null,
    // onUsersHomePage: false, Boolean
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
      forecastedWeatherData: null
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
      //Used to clear any passed errors.
      this.error = null;
      //Check if weather has userweather data with it
      // and if the weather being fetched is on their home page.
      if (data.userWeatherData) {
        this.onHomePage = data.userWeatherData.homepage;
      }
      this.currentWeatherData = data.weatherData.current;
      this.forecastedWeatherData = data.weatherData.forecasted;
    },

    getWeatherByGeoCoords(geoCoords) {
      axios
        .post("/weather/geo", {
          latitude: geoCoords[0],
          longitude: geoCoords[1]
        })
        .then(res => {
          this.processWeatherData(res.data);
        })
        .catch(err => {
          console.error(err);
        });
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
    },

    //Geo functions
    getClientDeviceLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.onLocationSuccess,
          this.onLocationError
        );
      } else {
        alert("Error. Well that didnt go well");
      }
    },
    onLocationSuccess(event) {
      var Lat = event.coords.latitude;
      var Lon = event.coords.longitude;

      var geoCoords = [Lat, Lon];

      this.getWeatherByGeoCoords(geoCoords);
    },
    onLocationError(event) {
      alert("Error " + event.code + ". " + event.message);
    }
  }
};
</script>
