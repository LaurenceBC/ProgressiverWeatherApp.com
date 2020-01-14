/**
 *
 */

import "babel-polyfill";
import 'whatwg-fetch';

import Vue from "vue";
import VueRouter from "vue-router";


import VueBus from 'vue-bus';

Vue.use(VueBus);

import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        authUser: null,
        loggedInStatus: false
    },
    mutations: {
        setAuthUser(state, authUser) {
            state.authUser = authUser;
        },
        setLoggedInStatus(state, loggedInStatus) {
            state.loggedInStatus = loggedInStatus;
        }
    },
    getters: {
        authUser: state => state.authUser,
        loggedInStatus: state => state.loggedInStatus
    }
});

//VueRouter
Vue.use(VueRouter);
import routes from "./routes";
const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior() {
        window.scrollTo(0,0);
      },

});


//HELP
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.loggedIn)) {

        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.getters.loggedInStatus) {
            console.log("matched userlogg");
            next("/home");
        } else {
            next();
        }
    } else {
        next();
    }
});

// import VueBus from "vue-bus";

// Vue.use(VueBus);

import "material-design-icons-iconfont/dist/material-design-icons.css";

//Needed for axios??
require("./bootstrap");

window.Vue = require("vue");

//import route from './ziggy'
import ziggyRoute from "ziggy";
import { Ziggy } from "./ziggy";

Vue.mixin({
    methods: {
        ziggyRoute: (name, params, absolute) =>
            ziggyRoute(name, params, absolute, Ziggy)
    }
});

import Vuetify from "vuetify";

import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, {
    iconfont: "mdi"
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "weather-app",
    require("./components/weatherapp/weather-app.vue").default
);

Vue.component(
    "app-bar",
    require("./components/weatherapp/app-bar.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({

//     // el: '#app',

//     vuetify: new Vuetify({}),
//     router,

//     // render: h => h(App)

// }).$mount('#app');

const app = new Vue({
    router,

    vuetify: new Vuetify({}),
    store
    //render: h => h(App) //add this new line
}).$mount("#app");
