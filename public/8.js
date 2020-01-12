(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log("Register box component mounted.");
  },
  props: {},
  data: function data() {
    return {
      registerRoute: this.ziggyRoute("register"),
      errors: "",
      errorAlertVisible: false,
      registerFormValid: false,
      formInputDisabled: false,
      registerLoading: false,
      showPasswordText: false,
      showConfirmPasswordText: false,
      //Form data
      nameInputValue: "",
      emailInputValue: "",
      passwordInputValue: "",
      confirmPasswordInputValue: ""
    };
  },
  computed: {
    validationErrors: function validationErrors() {
      var errors = Object.values(this.errors);
      errors = errors.flat();
      return errors;
    }
  },
  methods: {
    passwordVisible: function passwordVisible() {
      this.showPasswordText = !this.showPasswordText;
    },
    confirmPasswordVisible: function confirmPasswordVisible() {
      this.showConfirmPasswordText = !this.showConfirmPasswordText;
    },
    registerButtonClick: function registerButtonClick() {
      if (this.registerFormValid) {
        this.formSubmit();
      }
    },
    loginButtonClick: function loginButtonClick() {
      this.$router.push({
        name: "login"
      })["catch"](function (err) {});
    },
    //Submits the form to laravel backend, none json
    formSubmit: function formSubmit() {
      var _this = this;

      var self = this;
      axios.post(this.registerRoute, {
        name: this.nameInputValue,
        email: this.emailInputValue,
        password: this.passwordInputValue,
        password_confirmation: this.confirmPasswordInputValue
      }).then(function (response) {
        if (response.status = 200) {
          _this.$store.commit("setAuthUser", response.data.authUser);

          _this.$store.commit("setLoggedInStatus", true); //Set axios csrf token


          axios.defaults.headers.common["X-CSRF-TOKEN"] = response.data.csrf_token; //Push route

          _this.$router.push(response.data.redirect)["catch"](function (err) {});
        }
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        _this.errorAlertVisible = true;
        _this.passwordInputValue = "";
        _this.confirmPasswordInputValue = "";
        _this.registerLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/register.vue?vue&type=template&id=e8907422&v-cloak=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/register.vue?vue&type=template&id=e8907422&v-cloak=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        { staticClass: "pb-0", attrs: { "max-width": "900px" } },
        [_vm._v("Register")]
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c(
                    "v-form",
                    {
                      ref: "registerForm",
                      model: {
                        value: _vm.registerFormValid,
                        callback: function($$v) {
                          _vm.registerFormValid = $$v
                        },
                        expression: "registerFormValid"
                      }
                    },
                    [
                      _c("v-text-field", {
                        attrs: {
                          clearable: "",
                          outlined: "",
                          label: "Name",
                          required: "",
                          "prepend-inner-icon": "mdi-rename-box",
                          "validate-on-blur": "",
                          success: _vm.registerFormValid,
                          disabled: _vm.formInputDisabled,
                          rules: [
                            function(v) {
                              return (
                                v.length <= 255 ||
                                "Name must be less than 255 characters"
                              )
                            },
                            function(v) {
                              return (
                                /^[a-z0-9A-Z\-]*$/.test(v) ||
                                "Name should only contain alphanumeric"
                              )
                            },

                            function(v) {
                              return !!v || "A name is required"
                            }
                          ]
                        },
                        model: {
                          value: _vm.nameInputValue,
                          callback: function($$v) {
                            _vm.nameInputValue = $$v
                          },
                          expression: "nameInputValue"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          "prepend-inner-icon": "mdi-account-box-outline",
                          clearable: "",
                          outlined: "",
                          label: "Email",
                          required: "",
                          "validate-on-blur": "",
                          rules: [
                            function(v) {
                              return !!v || "Email address is required."
                            },
                            function(v) {
                              return (
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                                  v
                                ) || "E-mail must be valid."
                              )
                            }
                          ],
                          disabled: _vm.formInputDisabled,
                          success: _vm.registerFormValid
                        },
                        model: {
                          value: _vm.emailInputValue,
                          callback: function($$v) {
                            _vm.emailInputValue = $$v
                          },
                          expression: "emailInputValue"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          "prepend-inner-icon": "mdi-textbox-password",
                          outlined: "",
                          type: _vm.showPasswordText ? "text" : "password",
                          label: "Password",
                          "validate-on-blur": "",
                          rules: [
                            function(v) {
                              return !!v || "Password is required"
                            },
                            function(v) {
                              return (
                                v.length >= 8 ||
                                "Password must be 8 charecters or more"
                              )
                            }
                          ],
                          required: "",
                          disabled: _vm.formInputDisabled,
                          success: _vm.registerFormValid
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", rounded: "", small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.passwordVisible()
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.showPasswordText
                                              ? "mdi-eye"
                                              : "mdi-eye-off"
                                          ) +
                                          "\n                "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.passwordInputValue,
                          callback: function($$v) {
                            _vm.passwordInputValue = $$v
                          },
                          expression: "passwordInputValue"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          "prepend-inner-icon": "mdi-textbox-password",
                          outlined: "",
                          type: _vm.showConfirmPasswordText
                            ? "text"
                            : "password",
                          label: "Confirm Password",
                          rules: [
                            function(v) {
                              return !!v || "Confirm password is required"
                            },
                            function() {
                              return (
                                this$1.passwordInputValue ===
                                  this$1.confirmPasswordInputValue ||
                                "Passwords do match"
                              )
                            }
                          ],
                          required: "",
                          disabled: _vm.formInputDisabled,
                          success: _vm.registerFormValid
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", rounded: "", small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.passwordVisible()
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.showConfirmPasswordText
                                              ? "mdi-eye"
                                              : "mdi-eye-off"
                                          ) +
                                          "\n                "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.confirmPasswordInputValue,
                          callback: function($$v) {
                            _vm.confirmPasswordInputValue = $$v
                          },
                          expression: "confirmPasswordInputValue"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-alert",
                        {
                          attrs: { type: "error", value: "", dismissible: "" },
                          model: {
                            value: _vm.errorAlertVisible,
                            callback: function($$v) {
                              _vm.errorAlertVisible = $$v
                            },
                            expression: "errorAlertVisible"
                          }
                        },
                        _vm._l(_vm.validationErrors, function(value, key) {
                          return _c("v-list-item", { key: key }, [
                            _vm._v(_vm._s(value))
                          ])
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "pb-4 pr-4 pl-4" },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                loading: _vm.registerLoading ? true : false,
                                disabled: _vm.registerFormValid ? false : true,
                                block: "",
                                color: "primary",
                                large: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.registerButtonClick()
                                }
                              }
                            },
                            [_vm._v("Register")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "pb-4 pr-2 pl-2" },
                        [
                          _c(
                            "v-col",
                            { attrs: { left: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    small: "",
                                    outlined: "",
                                    block: "",
                                    color: "primary"
                                  }
                                },
                                [
                                  _c("v-icon", [_vm._v("mdi-file-lock")]),
                                  _vm._v(
                                    "Forgot\n                password\n              "
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { right: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    small: "",
                                    outlined: "",
                                    block: "",
                                    color: "primary"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginButtonClick()
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", [_vm._v("mdi-account-plus")]),
                                  _vm._v("Login\n              ")
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
              _vm.$vuetify.breakpoint.smAndUp
                ? _c(
                    "v-col",
                    { staticClass: "text-center", attrs: { cols: "2" } },
                    [_c("v-divider", { attrs: { vertical: "" } })],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-2",
                      attrs: {
                        large: "",
                        top: "",
                        block: "",
                        color: "light-green"
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("mdi-google")]),
                      _vm._v("Google\n        ")
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/auth/register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_e8907422_v_cloak_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=e8907422&v-cloak=true& */ "./resources/js/components/auth/register.vue?vue&type=template&id=e8907422&v-cloak=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_e8907422_v_cloak_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_e8907422_v_cloak_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/auth/register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/register.vue?vue&type=template&id=e8907422&v-cloak=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/auth/register.vue?vue&type=template&id=e8907422&v-cloak=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_e8907422_v_cloak_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=e8907422&v-cloak=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/register.vue?vue&type=template&id=e8907422&v-cloak=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_e8907422_v_cloak_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_e8907422_v_cloak_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);