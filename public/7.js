(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-bus */ "./node_modules/vue-bus/dist/vue-bus.esm.js");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log("Component mounted.");
  },
  props: {
    currentWeatherData: {
      type: Object
    },
    onUsersHome: {
      type: Boolean
    },
    userLoggedIn: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      onHomePage: this.onUsersHome || false,
      switchAddRemoveHomePageLoading: false,
      switchAddRemoveHomePageSuccess: false,
      switchErrorMessage: null
    };
  },
  computed: {
    weatherData: function weatherData() {
      return this.currentWeatherData;
    } // onHomePage() {
    //   return this.onHomePage || false;
    // }

  },
  methods: {
    addRemoveHomePage: function addRemoveHomePage(switchValue) {
      var _this = this;

      this.onHomePage = switchValue; //If the user is logged in then process the request to add

      if (this.userLoggedIn) {
        this.switchAddRemoveHomePageLoading = true;
        axios.post("user/weather/home/add", {
          longitude: this.weatherData.coordinates.lon,
          latitude: this.weatherData.coordinates.lat,
          homepage: switchValue
        }).then(function (res) {
          console.log(res);

          if (res.status = 200) {
            _this.switchAddRemoveHomePageSuccess = true;
          } //Emit usersWeather if removed to remove from homepage


          if (!switchValue) {
            _this.$bus.emit('removeWeatherFromUsersHomepage', "test");
          } //Show snackbar message


          _this.$bus.emit('showSnackBarMessage', switchValue ? "Added to homepage" : "Removed from homepage");
        })["catch"](function (err) {
          console.error(err);
        });
        this.switchAddRemoveHomePageLoading = false;
      } //Otherwise display error on switch
      else {
          //Set error message
          this.switchErrorMessage = "You need to login to use this feature.";
          this.onHomePage = false;
        }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/** Ripples */\n/** Elements */\n.theme--light.v-input--switch .v-input--switch__thumb {\n  color: #FFFFFF;\n}\n.theme--light.v-input--switch .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #fafafa !important;\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.12) !important;\n}\n\n.theme--dark.v-input--switch .v-input--switch__thumb {\n  color: #bdbdbd;\n}\n.theme--dark.v-input--switch .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #424242 !important;\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.1) !important;\n}\n\n.v-input--switch__track, .v-input--switch__thumb {\n  background-color: currentColor;\n  pointer-events: none;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n.v-input--switch__track {\n  border-radius: 8px;\n  width: 36px;\n  height: 14px;\n  left: 2px;\n  position: absolute;\n  opacity: 0.6;\n  right: 2px;\n  top: calc(50% - 7px);\n}\n.v-input--switch__thumb {\n  border-radius: 50%;\n  top: calc(50% - 10px);\n  height: 20px;\n  position: relative;\n  width: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-input--switch .v-input--selection-controls__input {\n  width: 38px;\n}\n.v-input--switch .v-input--selection-controls__ripple {\n  top: calc(50% - 24px);\n}\n.v-input--switch.v-input--dense .v-input--switch__thumb {\n  width: 18px;\n  height: 18px;\n}\n.v-input--switch.v-input--dense .v-input--switch__track {\n  height: 12px;\n  width: 32px;\n}\n.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track {\n  height: 22px;\n  width: 44px;\n  top: calc(50% - 12px);\n  left: -3px;\n}\n.v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  top: calc(50% - 22px);\n}\n.v-input--switch.v-input--is-dirty.v-input--is-disabled {\n  opacity: 0.6;\n}\n.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple {\n  left: -14px;\n}\n.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  left: -12px;\n}\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(20px, 0);\n          transform: translate(20px, 0);\n}\n.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple {\n  right: -14px;\n}\n.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  right: -12px;\n}\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(-20px, 0);\n          transform: translate(-20px, 0);\n}\n.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.v-input--switch--inset .v-input--switch__track,\n.v-input--switch--inset .v-input--selection-controls__input {\n  width: 48px;\n}\n.v-input--switch--inset .v-input--switch__track {\n  border-radius: 14px;\n  height: 28px;\n  left: -4px;\n  opacity: 0.32;\n  top: calc(50% - 14px);\n}\n.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb {\n  -webkit-transform: translate(0, 0) !important;\n          transform: translate(0, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb {\n  -webkit-transform: translate(-6px, 0) !important;\n          transform: translate(-6px, 0) !important;\n}\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(20px, 0) !important;\n          transform: translate(20px, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  -webkit-transform: translate(-26px, 0) !important;\n          transform: translate(-26px, 0) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=template&id=d32e703c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=template&id=d32e703c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-container",
        {
          staticStyle: {
            "max-width": "400px",
            padding: "0",
            "padding-bottom": "10px"
          }
        },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "text-center", attrs: { sm: "5" } },
                [
                  _c(
                    "zoom-center-transition",
                    { attrs: { appear: "", duration: 300 } },
                    [
                      _c(
                        "v-icon",
                        { key: _vm.weatherData.id, attrs: { size: "85" } },
                        [_vm._v(_vm._s(_vm.weatherData.icon.name))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "slide-y-up-transition",
                    { attrs: { appear: "", duration: 300 } },
                    [
                      _c(
                        "p",
                        {
                          key: _vm.weatherData.id,
                          staticClass: "title mb-0 text-capitalize"
                        },
                        [_vm._v(_vm._s(_vm.weatherData.weather_description))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "slide-y-up-transition",
                    { attrs: { appear: "", duration: 300 } },
                    [
                      _c("v-switch", {
                        key: _vm.weatherData.id,
                        attrs: {
                          "input-value": _vm.onHomePage,
                          label: _vm.onHomePage
                            ? "Remove from homepage"
                            : "Add to homepage",
                          loading: _vm.switchAddRemoveHomePageLoading,
                          readonly: _vm.switchAddRemoveHomePageLoading,
                          success: _vm.switchAddRemoveHomePageSuccess,
                          "error-messages": _vm.switchErrorMessage
                        },
                        on: { change: _vm.addRemoveHomePage }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { sm: "7" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "slide-x-right-transition",
                            { attrs: { appear: "", duration: 300 } },
                            [
                              _c(
                                "p",
                                {
                                  key: _vm.weatherData.id,
                                  staticClass: "display-2 mb-0"
                                },
                                [_vm._v(_vm._s(_vm.weatherData.temp) + "℃")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        [
                          _c(
                            "zoom-center-transition",
                            { attrs: { appear: "", duration: 300 } },
                            [
                              _c(
                                "p",
                                {
                                  key: _vm.weatherData.id,
                                  staticClass: "display-1 text-left mb-1"
                                },
                                [_vm._v(_vm._s(_vm.weatherData.location_name))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "slide-y-up-transition",
                            { attrs: { appear: "", duration: 300 } },
                            [
                              _c(
                                "p",
                                {
                                  key: _vm.weatherData.id,
                                  staticClass: "title text-left mb-0"
                                },
                                [_vm._v(_vm._s(_vm.weatherData.date))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "slide-y-up-transition",
                            { attrs: { appear: "", duration: 300 } },
                            [
                              _c(
                                "p",
                                {
                                  key: _vm.weatherData.id,
                                  staticClass: "title text-left mb-0"
                                },
                                [_vm._v(_vm._s(_vm.weatherData.time))]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "slide-y-up-transition",
            { attrs: { appear: "" } },
            [
              _c(
                "v-row",
                { key: _vm.weatherData.id },
                [
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c(
                      "p",
                      { staticClass: "text-center mb-2" },
                      [
                        _c("v-icon", { attrs: { color: "#22d46f" } }, [
                          _vm._v("mdi-water-percent")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center title mb-2" }, [
                      _vm._v("Humidity")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center mb-2" }, [
                      _vm._v(_vm._s(_vm.weatherData.humidity) + "%")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c(
                      "p",
                      { staticClass: "text-center mb-2" },
                      [
                        _c("v-icon", { attrs: { color: "blue" } }, [
                          _vm._v("mdi-water-pump")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center title mb-2" }, [
                      _vm._v("Pressure")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center mb-2" }, [
                      _vm._v(_vm._s(_vm.weatherData.pressure))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c(
                      "p",
                      { staticClass: "text-center mb-2" },
                      [
                        _c("v-icon", { attrs: { color: "cryan" } }, [
                          _vm._v("mdi-eye-outline")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center title mb-2" }, [
                      _vm._v("Visibility")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center mb-2" }, [
                      _vm._v(_vm._s(_vm.weatherData.visibility))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c(
                      "p",
                      { staticClass: "text-center mb-2" },
                      [
                        _c("v-icon", { attrs: { color: "#b4badb" } }, [
                          _vm._v("mdi-weather-windy")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center title mb-2" }, [
                      _vm._v("Wind speed")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center mb-2" }, [
                      _vm._v(_vm._s(_vm.weatherData.wind.speed) + "mph")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c(
                      "p",
                      { staticClass: "text-center mb-2" },
                      [
                        _c("v-icon", { attrs: { color: "#bdc8ff" } }, [
                          _vm._v("mdi-thermometer")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center title mb-2" }, [
                      _vm._v("Temp min")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center mb-2" }, [
                      _vm._v(_vm._s(_vm.weatherData.temp_min) + "℃")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c(
                      "p",
                      { staticClass: "text-center mb-2" },
                      [
                        _c("v-icon", { attrs: { color: "red" } }, [
                          _vm._v("mdi-thermometer-lines")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center title mb-2" }, [
                      _vm._v("Temp max")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-center mb-2" }, [
                      _vm._v(_vm._s(_vm.weatherData.temp_max) + "℃")
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/styles/components/_selection-controls.sass */ "./node_modules/vuetify/src/styles/components/_selection-controls.sass");
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VSwitch/VSwitch.sass */ "./node_modules/vuetify/src/components/VSwitch/VSwitch.sass");
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/selectable */ "./node_modules/vuetify/lib/mixins/selectable/index.js");
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VProgressCircular/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },

    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.disabled),
        role: 'switch'
      };
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },

    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }

  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },

    genSwitch() {
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', { ...this.attrs,
        ...this.attrs$
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },

    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__["VFabTransition"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__["default"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },

    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },

    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },

    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].right && !this.isActive) this.onChange();
    }

  }
}));
//# sourceMappingURL=VSwitch.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSwitch/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSwitch/index.js ***!
  \**************************************************************/
/*! exports provided: VSwitch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSwitch", function() { return _VSwitch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSwitch__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSwitch/VSwitch.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSwitch/VSwitch.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--8-2!../../../../sass-loader/dist/cjs.js??ref--8-3!./VSwitch.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/weatherapp/weather/partial-weather-current.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/weatherapp/weather/partial-weather-current.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partial_weather_current_vue_vue_type_template_id_d32e703c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partial-weather-current.vue?vue&type=template&id=d32e703c& */ "./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=template&id=d32e703c&");
/* harmony import */ var _partial_weather_current_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partial-weather-current.vue?vue&type=script&lang=js& */ "./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _partial_weather_current_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _partial_weather_current_vue_vue_type_template_id_d32e703c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _partial_weather_current_vue_vue_type_template_id_d32e703c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_6__["VSwitch"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/weatherapp/weather/partial-weather-current.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partial_weather_current_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./partial-weather-current.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partial_weather_current_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=template&id=d32e703c&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=template&id=d32e703c& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partial_weather_current_vue_vue_type_template_id_d32e703c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./partial-weather-current.vue?vue&type=template&id=d32e703c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/weatherapp/weather/partial-weather-current.vue?vue&type=template&id=d32e703c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partial_weather_current_vue_vue_type_template_id_d32e703c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_partial_weather_current_vue_vue_type_template_id_d32e703c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);