<template>
  <v-app-bar color="#3282b8" class="pb-4" app hide-on-scroll scroll-threshold="10">
    <!-- Home icon. -->
    <v-btn icon small class="pl-1" @click="homeButtonClick">
      <v-icon size="40">mdi-home-circle</v-icon>
    </v-btn>

    <!-- App bar title. -->
    <v-toolbar-title class="hidden-sm-and-down">Progressive Weather App</v-toolbar-title>

    <!-- Weather search bar. -->
    <app-bar-search></app-bar-search>

    <!-- Logged in user menu. -->
    <v-menu v-if="isUserLoggedIn" transition="slide-y-transition" bottom nudge-bottom="50" nudge-left="15">
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" right color="green">
          <img :src="authUserData.avatar || null" alt="Avatar" />
        </v-avatar>
      </template>
      <v-list>
        <v-list-item @click="userMenuLogoutButtonClick">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>

        <form id="logout-form" action="sdf" method="POST" style="display: none;">@csrf</form>
      </v-list>
    </v-menu>

    <!-- Guest menu. -->
    <div v-else-if="isUserLoggedIn === false">
      <v-menu transition="slide-y-transition" bottom nudge-bottom="50" nudge-left="15">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab dark small color="white">
            <v-icon color="primary">mdi-account-plus</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="guestMenuLoginButtonClick">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item @click="guestMenuRegisterButtonClick">
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
//import VueBus from 'vue-bus';

import AppBarSearch from "./app-bar-search.vue";

export default {
  mounted() {
    console.log("Weather-app bar component mounted.");
  },
  components: {
    AppBarSearch
  },
  props: {},
  data() {return {};},
  computed: {
    isUserLoggedIn: function() {
        return this.$store.getters.loggedInStatus;
    },
    authUserData: function() {
        return this.$store.getters.authUser;
    }
  },
  methods: {
    homeButtonClick() {
      this.$router.push({ name: "home" }).catch(err => {});
    },
    //Guest menu methods
    guestMenuLoginButtonClick() {
      //Push login to router
      this.$router.push({ name: "login" }).catch(err => {});
    },
    guestMenuRegisterButtonClick() {
      this.$router.push({ name: "register" }).catch(err => {});
    },

    //Logged in user methods

    userMenuLogoutButtonClick() {
      axios
        .post("/logout")
        .then(response => {
          this.$store.commit("setLoggedInStatus", false);
          this.$store.commit("setAuthUser", null);
          axios.defaults.headers.common["X-CSRF-TOKEN"] =
            response.data.csrf_token;
            //Refresh page
          this.$router.go();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

