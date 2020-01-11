<template>
  <v-autocomplete
    class="ml-3 mr-3"
    outlined
    placeholder="Type a location name here"
    clearable
    cache-items
    hide-no-data
    prepend-inner-icon="search"
    background-color="white"
    solo
    dense
    hide-details
    @keyup.enter="searchWeather"
    @click:prepend-inner="searchWeather"
    :search-input.sync="autocompleteInput"
    ref="autocompleteinput"

  >
    <!-- <template v-slot:append>
                        <v-btn small icon>
                        <v-icon>mdi-crosshairs-gps</v-icon>
                        </v-btn>
    </template>-->
  </v-autocomplete>
</template>


<script>
import VueBus from 'vue-bus';

export default {
  mounted() {
    console.log("Weather app top bar component mounted.");
  },
  data() {
    return {
      autocompleteInput: ""
    };
  },

  methods: {
    searchWeather() {
   // this.$router.push(this.autocompleteInput);
    this.$router.push({ name: 'weather', params: {locationName: this.autocompleteInput }});
    this.$refs.autocompleteinput.blur();

    }
  }
};
</script>

