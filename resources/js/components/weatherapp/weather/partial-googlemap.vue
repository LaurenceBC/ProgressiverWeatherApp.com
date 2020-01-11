<template>
  <v-container>
    <GmapMap
      :center="{lat:geoCoords['lat'], lng:geoCoords['lon']}"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
    ></GmapMap>
  </v-container>
</template>

<script>
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCKAvewZ_U-z7fLacbrv_8jDu7Sq_mNYwA"
    //   libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

export default {
  mounted() {},
  props: {
    geoCoords: null
  },
  computed: {}
};
</script>

