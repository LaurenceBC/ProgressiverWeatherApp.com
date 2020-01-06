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
    no-data-text="Not found"
    solo
    dense
    hide-details
    @keyup.enter="searchWeather"
    :search-input.sync="autocompleteInput"
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
    //   //Emit to weatherapp search term.
    //   this.$bus.emit('weatherappSearch', this.autocompleteInput);

    this.$router.push(this.autocompleteInput);

    }
  }
};
</script>

