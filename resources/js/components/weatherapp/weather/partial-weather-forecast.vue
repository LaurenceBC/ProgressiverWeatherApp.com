<template>
    <v-container style="max-width: 1000px;">
        <v-row>
            <v-col cols=12 md class="pl-1 pr-1 text-center pb-0 pt-0" v-for="(item, index) in forecastData" v-bind:key="index">
                <slide-y-up-transition appear :delay="200">
                <v-row align="center" class="text-center mr-1 ml-1 mt-1 mb-1 pb-0 pt-0">


                    <!-- Short day name. -->
                    <v-col xs=12/5 md=12 class="pb-2">
                        <p class="mb-0 headline font-weight-black">{{item.day_short}}</p>
                    </v-col>
                    <!-- Weather description. -->
                    <v-col xs=12/5 md=12 class="pb-0">
                        <v-icon>{{item.icon.name}}</v-icon>
                        <p class="mb-1">{{item.weather_description}}</p>
                    </v-col>
                    <!-- temperature -->
                    <v-col xs=12/5 md=12 class="pb-0">
                        <v-icon small>mdi-thermometer</v-icon>
                        <p class="">{{item.temp}}c</p>
                    </v-col>
                    <!-- Temperature. -->
                    <v-col xs=12/5 md=12 class="pb-0">
                        <v-icon small>mdi-weather-windy</v-icon>
                        <p class="">{{item.wind.speed}}mph</p>
                    </v-col>
                    <!-- Humidity. -->
                    <v-col xs=12/5 md=12 class="pb-0">
                        <v-icon small>mdi-water-percent</v-icon>
                        <p class="">{{item.humidity}}%</p>
                    </v-col>
                </v-row>

                </slide-y-up-transition>
                   <v-divider></v-divider>
            </v-col>

        </v-row>

      <!-- </slide-x-left-transition> -->

  </v-container>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  mounted() {
    console.log("Forecast component mounted.");
  },
  props: {
    forecastedWeatherData: { type: Array }
  },
  computed: {
      forecastData() {
          return this.forecastedWeatherData;
      }
  },
};
</script>

<style>

.forecast-row {
background: rgb(116,175,241);
background: linear-gradient(137deg, rgba(116,175,241,0.6979166666666667) 0%, rgba(98,149,255,0.9500175070028011) 67%, rgba(185,207,255,0.9500175070028011) 99%);
color: white;
border: 1px solid grey;
border-radius: 5px;
-webkit-box-shadow: 1px 2px 5px 2px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 2px 5px 2px rgba(0,0,0,0.75);
box-shadow: 1px 2px 5px 2px rgba(0,0,0,0.75);

}

</style>
