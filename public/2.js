(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/weather.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/weatherapp/weather/weather.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Import weather components partials
var weathercurrent = function weathercurrent() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./partial-weather-current.vue */ "./resources/js/components/weatherapp/weather/partial-weather-current.vue"));
};

var weatherforecasted = function weatherforecasted() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./partial-weather-forecast.vue */ "./resources/js/components/weatherapp/weather/partial-weather-forecast.vue"));
};

var googlemap = function googlemap() {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./partial-googlemap.vue */ "./resources/js/components/weatherapp/weather/partial-googlemap.vue"));
};

var weathererror = function weathererror() {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./error.vue */ "./resources/js/components/weatherapp/weather/error.vue"));
}; // import weathererror from "./error.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    //Check to see what prop to use.
    if (this.myLocation) {
      console.log("mylocation");
      this.getClientDeviceLocation();
    } else if (this.locationName) {
      this.searchWeather(this.locationName);
    } else if (this.weatherData) {
      this.processWeatherData(this.weatherData);
    } else if (this.geoCoords) {
      this.getWeatherByGeoCoords(this.geoCoords);
    } else {
      //Last resort if no prop passed.
      this.searchWeather("taunton");
    }
  },
  components: {
    weathercurrent: weathercurrent,
    weatherforecasted: weatherforecasted,
    googlemap: googlemap,
    weathererror: weathererror
  },
  created: function created() {},
  props: {
    //Component is being used to get weather of device location.
    myLocation: false,
    locationName: null,
    //array
    geoCoords: null,
    //object
    weatherData: null,
    // onUsersHomePage: false, Boolean
    userLoggedIn: false
  },
  data: function data() {
    return {
      localWeatherData: null,
      userLoggedInStatus: this.$store.state.loggedInStatus || false,
      onHomePage: false,
      fetchWetherRoute: "/weather",
      error: false,
      //Used for weather partials.
      currentWeatherData: null,
      forecastedWeatherData: null
    };
  },
  watch: {
    //Watch location name prop change.
    locationName: function locationName(newValue) {
      this.searchWeather(newValue);
    }
  },
  methods: {
    processWeatherData: function processWeatherData(data) {
      //Used to clear any passed errors.
      this.error = null; //Check if weather has userweather data with it
      // and if the weather being fetched is on their home page.

      if (data.userWeatherData) {
        this.onHomePage = data.userWeatherData.homepage;
      }

      this.currentWeatherData = data.weatherData.current;
      this.forecastedWeatherData = data.weatherData.forecasted;
    },
    getWeatherByGeoCoords: function getWeatherByGeoCoords(geoCoords) {
      var _this = this;

      axios.post("/weather/geo", {
        latitude: geoCoords[0],
        longitude: geoCoords[1]
      }).then(function (res) {
        _this.processWeatherData(res.data);
      })["catch"](function (err) {
        console.error(err);
      });
    },
    //Fetchs weather from the backend API by location name.
    searchWeather: function searchWeather(locationName) {
      var _this2 = this;

      axios.post(this.fetchWetherRoute, {
        locationName: locationName
      }).then(function (res) {
        _this2.processWeatherData(res.data);
      })["catch"](function (err) {
        _this2.error = true;
      });
    },
    //Geo functions
    getClientDeviceLocation: function getClientDeviceLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.onLocationSuccess, this.onLocationError);
      } else {
        alert("Error. Well that didnt go well");
      }
    },
    onLocationSuccess: function onLocationSuccess(event) {
      var Lat = event.coords.latitude;
      var Lon = event.coords.longitude;
      var geoCoords = [Lat, Lon];
      this.getWeatherByGeoCoords(geoCoords);
    },
    onLocationError: function onLocationError(event) {
      alert("Error " + event.code + ". " + event.message);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/weather.vue?vue&type=template&id=05af8f82&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/weatherapp/weather/weather.vue?vue&type=template&id=05af8f82& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.error
        ? _c(
            "div",
            [
              _c("weathercurrent", {
                attrs: {
                  currentWeatherData: _vm.currentWeatherData,
                  onUsersHome: _vm.onHomePage,
                  userLoggedIn: _vm.userLoggedInStatus
                }
              }),
              _vm._v(" "),
              _c(
                "v-tabs",
                { attrs: { centered: "" } },
                [
                  _c("v-tab", [_vm._v("5 Day forecast")]),
                  _vm._v(" "),
                  _c("v-tab", [_vm._v("Map")]),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    [
                      _c("weatherforecasted", {
                        attrs: {
                          forecastedWeatherData: _vm.forecastedWeatherData
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    [
                      _c("googlemap", {
                        attrs: { geoCoords: _vm.currentWeatherData.coordinates }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.error ? _c("weathererror") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/weatherapp/weather/weather.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/weatherapp/weather/weather.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_vue_vue_type_template_id_05af8f82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.vue?vue&type=template&id=05af8f82& */ "./resources/js/components/weatherapp/weather/weather.vue?vue&type=template&id=05af8f82&");
/* harmony import */ var _weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.vue?vue&type=script&lang=js& */ "./resources/js/components/weatherapp/weather/weather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weather_vue_vue_type_template_id_05af8f82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weather_vue_vue_type_template_id_05af8f82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_4__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_4__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_4__["VTabs"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/weatherapp/weather/weather.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/weatherapp/weather/weather.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/weatherapp/weather/weather.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weather.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/weather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/weatherapp/weather/weather.vue?vue&type=template&id=05af8f82&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/weatherapp/weather/weather.vue?vue&type=template&id=05af8f82& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_template_id_05af8f82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weather.vue?vue&type=template&id=05af8f82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/weather.vue?vue&type=template&id=05af8f82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_template_id_05af8f82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_template_id_05af8f82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);