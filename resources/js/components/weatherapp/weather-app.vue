<template>
  <div>
    <slide-x-left-transition appear :delay="200" :duration="200">
      <router-view v-cloak></router-view>
    </slide-x-left-transition>
    <v-snackbar bottom left :timeout="5000" v-model="snackBarVisible">{{snackBarMessage}}</v-snackbar>
  </div>
</template>

<script>
import { SlideXLeftTransition } from "vue2-transitions";

export default {
  mounted() {
    console.log("Main weather app component mounted.");
    //store authUser is passed by laravel blade.
    this.$store.commit("setAuthUser", this.userauth);
    //Check if user is logged in and set $store state to true.
    if (this.$store.state.authUser) {
      this.$store.commit("setLoggedInStatus", true);
    }
  },
  created() {
      //Listen for snackbar emit.
    this.$bus.on("showSnackBarMessage", this.showSnackBarMessage);
  },

  props: {
    userauth: null
  },

  data() {
    return {
      snackBarMessage: "",
      snackBarVisible: false
    };
  },
  methods: {
    showSnackBarMessage(message) {
//Set the snackbar visible to false
this.snackBarVisible = false;

    //Set the snackbar message and
      this.snackBarMessage = message;
      this.snackBarVisible = true;
    }
  }
};
</script>

<style>
</style>
