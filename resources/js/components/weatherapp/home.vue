
<template>
  <div>

    <template v-if="!isLoggedIn">
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
