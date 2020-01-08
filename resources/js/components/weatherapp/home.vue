
<template>
  <div>
    <template v-if="!isLoggedIn">
      <p
        class="title font-weight-bold text-center"
      >ProgressiveWeatherApp.com a progressive web app for the weather.</p>

      <p class="subtitle-1 text-center">Type a location name in the search bar above</p>
      <!-- <v-btn class="text-center">Search my location</v-btn> -->

    </template>

    <template v-if="isLoggedIn">
      <p class="title text-center">Hi NAME#, here's your homepage weather.</p>

      <weather v-for="(item, index) in homepageWeatherData" :key="index" :weatherData="item"></weather>
    </template>
  </div>
</template>


<script>
const weather = () => import("./weather/weather.vue");

export default {
  mounted() {
    console.log("Home component mounted");

    //If the user is logged in then try and fetch their homepage weather.
    if (this.isLoggedIn) {
      this.getUsersHomePageWeather();
    }
  },
  created() {
    //try and fetch homepage weather
    // if (this.isLoggedIn) {
    //   console.log("getting");
    //   this.getUsersHomePageWeather();
    // }
  },
  components: {
    weather
  },

  data() {
    return {
      isLoggedIn: this.$store.state.loggedInStatus,
      homepageWeatherData: null
    };
  },
  methods: {
    lookupDeviceLocation() {},
    //Get logged in users homepage weather.
    getUsersHomePageWeather() {
      axios
        .get("/user/weather/home")
        .then(response => {
          this.homepageWeatherData = response.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

