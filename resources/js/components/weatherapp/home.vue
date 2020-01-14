<template>
  <div>
    <template v-if="!isLoggedIn">
      <p class="title font-weight-bold text-center">ProgressiveWeatherApp.com</p>

      <p class="subtitle-1 text-center">A progressive web app for the weather.</p>

      <p
        class="subtitle-2 text-center"
      >Type a location name in the search bar above, or click the locate me button below.</p>
      <div class="text-center">
        <v-btn @click="showDeviceLocationWeather">
          <v-icon left>mdi-crosshairs-gps</v-icon>Locate me
        </v-btn>
      </div>
    </template>

    <template v-if="isLoggedIn">
      <p class="title text-center">Hi, here's your homepage weather.</p>



      <div v-if="!homepageWeatherData.length">
         <p class="title-2 text-center"> You dont have any weather on your home page. </p>

</div>

      <weather v-for="(item, index) in homepageWeatherData" :key="index" :weatherData="item"></weather>
    </template>
  </div>
</template>


<script>
import VueBus from 'vue-bus';
const weather = () => import("./weather/weather.vue");

export default {
  mounted() {
    console.log("Home component mounted");

    //If the user is logged in then try and fetch their homepage weather.
    if (this.isLoggedIn) {
      this.getUsersHomePageWeather();
    }
  },

  components: {
    weather
  },
  created() {

      //Listen for homepage remval
      this.$bus.on('removeWeatherFromUsersHomepage', this.removeWeatherFromUsersHomePage)

  },

  data() {
    return {
      isLoggedIn: this.$store.state.loggedInStatus,
      homepageWeatherData: null

      //User data
    };
  },
  methods: {

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
    },


      //Get and show device location.
    showDeviceLocationWeather() {

        this.$router.push({ name: 'weather.mylocation', params: {myLocation: true }});
    },

    removeWeatherFromUsersHomePage(userWeatherData) {

        console.log(userWeatherData);

    },





  }
};
</script>

