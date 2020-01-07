
<template>
  <div>

    <template v-if="!isLoggedIn">
        <p class="title font-weight-bold text-center">ProgressiveWeatherApp.com a progressive web app for the weather.</p>

       <p class="subtitle-1 text-center"> Type a location name in the search bar above</p>

       <v-btn class="text-center">Search my location</v-btn>
      <weather></weather>
    </template>

    <template v-if="isLoggedIn">
      <p class="title text-center">Hi NAME#</p>



      <weather v-for="(item, index) in homepageWeatherData" :key="index" :weatherData="item"></weather>


    </template>
  </div>
</template>


<script>
const weather = () => import("./weather/weather.vue");

export default {
  mounted() {
    console.log("Home mounted");
  },
  created() {
    //try and fetch homepage weather
    if (this.isLoggedIn) {
        console.log('getting')
      this.getUsersHomePageWeather();
    }
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


      lookupDeviceLocation() {



      },
    getUsersHomePageWeather() {

        console.log('gettinghome')
      axios
        .get("/user/weather/home")
        .then(res => {
          console.log(res);
          this.homepageWeatherData = res.data;
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
