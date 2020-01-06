<template>
  <div>
    <slide-x-left-transition appear :delay="200" :duration="200">
      <router-view v-cloak></router-view>
    </slide-x-left-transition>
  </div>
</template>

<script>
import { SlideXLeftTransition } from "vue2-transitions";

export default {
  mounted() {
    console.log("Main weather app component mounted.");
    this.$store.commit("setAuthUser", this.userauth);

    //Check if user is logged in and set $store state to true.
    if (this.$store.state.authUser) {
      console.log("logged in");
      this.$store.commit("setLoggedInStatus", true);
    }
  },

  props: {
    userauth: null
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
