<template>
  <div>
    <v-container style="max-width: 400px; padding: 0; padding-bottom: 10px; ">
      <!-- Header. -->
      <v-row>
        <v-col sm="5" class="text-center">
          <!-- Weather icon -->
          <zoom-center-transition appear :duration="300">
            <v-icon :key="weatherData.id" size="85">{{weatherData.icon.name}}</v-icon>
          </zoom-center-transition>

          <!-- Weather description. -->
          <slide-y-up-transition appear :duration="300">
            <p
              :key="weatherData.id"
              class="title mb-0 text-capitalize"
            >{{weatherData.weather_description}}</p>
          </slide-y-up-transition>

          <!-- Add/Remove weather on homepage switch. -->
          <slide-y-up-transition appear :duration="300">
            <v-switch
              :key="weatherData.id"
              :input-value="onHomePage"
              :label="onHomePage ? 'Remove from homepage' : 'Add to homepage'"
              :loading="switchAddRemoveHomePageLoading"
              :readonly="switchAddRemoveHomePageLoading"
              :success="switchAddRemoveHomePageSuccess"
              @change="addRemoveHomePage"
              :error-messages="switchErrorMessage"
            ></v-switch>
          </slide-y-up-transition>
        </v-col>

        <v-col sm="7">
          <v-row>
            <v-col>
              <slide-x-right-transition appear :duration="300">
                <p :key="weatherData.id" class="display-2 mb-0">{{weatherData.temp}}℃</p>
              </slide-x-right-transition>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <!-- Location name. -->
              <zoom-center-transition appear :duration="300">
                <p
                  :key="weatherData.id"
                  class="display-1 text-left mb-1"
                >{{weatherData.location_name}}</p>
              </zoom-center-transition>
              <!-- Date. -->
              <slide-y-up-transition appear :duration="300">
                <p :key="weatherData.id" class="title text-left mb-0">{{weatherData.date}}</p>
              </slide-y-up-transition>
              <!-- Time. -->
              <slide-y-up-transition appear :duration="300">
                <p :key="weatherData.id" class="title text-left mb-0">{{weatherData.time}}</p>
              </slide-y-up-transition>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Weather descripion. -->
    <v-container>
      <slide-y-up-transition appear>
        <v-row :key="weatherData.id">
          <v-col sm="2">
            <p class="text-center mb-2">
              <v-icon color="#22d46f">mdi-water-percent</v-icon>
            </p>
            <p class="text-center title mb-2">Humidity</p>
            <p class="text-center mb-2">{{weatherData.humidity}}%</p>
          </v-col>

            <!-- Pressure. -->
          <v-col sm="2">
            <p class="text-center mb-2">
              <v-icon color="blue">mdi-water-pump</v-icon>
            </p>
            <p class="text-center title mb-2">Pressure</p>
            <p class="text-center mb-2">{{weatherData.pressure}}</p>
          </v-col>
        <!-- Visibility. -->
          <v-col sm="2">
            <p class="text-center mb-2">
              <v-icon color="cryan">mdi-eye-outline</v-icon>
            </p>
            <p class="text-center title mb-2">Visibility</p>
            <p class="text-center mb-2">{{weatherData.visibility}}</p>
          </v-col>
            <!-- Wind speed. -->
          <v-col sm="2">
            <p class="text-center mb-2">
              <v-icon color="#b4badb">mdi-weather-windy</v-icon>
            </p>
            <p class="text-center title mb-2">Wind speed</p>
            <p class="text-center mb-2">{{weatherData.wind.speed}}mph</p>
          </v-col>
            <!-- Temp min.-->
          <v-col sm="2">
            <p class="text-center mb-2">
              <v-icon color="#bdc8ff">mdi-thermometer</v-icon>
            </p>
            <p class="text-center title mb-2">Temp min</p>
            <p class="text-center mb-2">{{weatherData.temp_min}}℃</p>
          </v-col>
            <!-- Temp max. -->
          <v-col sm="2">
            <p class="text-center mb-2">
              <v-icon color="red">mdi-thermometer-lines</v-icon>
            </p>
            <p class="text-center title mb-2">Temp max</p>
            <p class="text-center mb-2">{{weatherData.temp_max}}℃</p>
          </v-col>
        </v-row>
      </slide-y-up-transition>

      <!-- Weather data. -->
    </v-container>
  </div>
</template>

<script>
import { ZoomCenterTransition } from "vue2-transitions";
import { SlideXRightTransition } from "vue2-transitions";
import { SlideYUpTransition } from "vue2-transitions";

export default {
  mounted() {
    console.log("Component mounted.");
  },

  props: {
    currentWeatherData: { type: Object },
    onUsersHome: { type: Boolean },
    userLoggedIn: { type: Boolean }
  },

  data() {
    return {
      onHomePage: this.onUsersHome || false,
      switchAddRemoveHomePageLoading: false,
      switchAddRemoveHomePageSuccess: false,
      switchErrorMessage: null
    };
  },
  computed: {
    weatherData: function() {
      return this.currentWeatherData;
    }
    // onHomePage() {
    //   return this.onHomePage || false;
    // }
  },
  methods: {
    addRemoveHomePage(switchValue) {
      this.onHomePage = switchValue;

      //If the user is logged in then process the request to add
      if (this.userLoggedIn) {
        this.switchAddRemoveHomePageLoading = true;


        axios
          .post("user/weather/home/add", {
            longitude: this.weatherData.coordinates.lon,
            latitude: this.weatherData.coordinates.lat,
            homepage: switchValue
          })
          .then(res => {
            console.log(res);

            if ((res.status = 200)) {
              this.switchAddRemoveHomePageSuccess = true;
            }
          })
          .catch(err => {
            console.error(err);
          });

        this.switchAddRemoveHomePageLoading = false;
      }
      //Otherwise display error on switch
      else {
        //Set error message
        this.switchErrorMessage = "You need to login to use this feature.";
        this.onHomePage = false;
      }
    }
  }
};
</script>

<style>
</style>
