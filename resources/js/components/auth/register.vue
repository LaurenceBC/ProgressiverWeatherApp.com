<template v-cloak>
  <v-card outlined>
    <v-card-title max-width="900px" class="pb-0">Register</v-card-title>
    <v-container>
     <v-row>
        <v-col cols="12" md="5">
          <!-- Register form. -->
          <v-form ref="registerForm" v-model="registerFormValid">
            <!-- Name input. -->
            <v-text-field
              clearable
              outlined
              label="Name"
              required
              prepend-inner-icon="mdi-rename-box"
              v-model="nameInputValue"

              :success="registerFormValid"
              :disabled="formInputDisabled"
              :rules="[v => v.length <= 255 || 'Name must be less than 255 characters',
                       v => /^[a-z0-9\-]*$/.test(v) || 'Name must be alpha numeric',

                                v => !!v || 'A name is required',

                            ]"
            ></v-text-field>

            <!-- Email input. -->
            <v-text-field
              prepend-inner-icon="mdi-account-box-outline"
              clearable
              outlined
              label="Email"
              required
              :rules="[

                                v => !!v || 'Email address is required.',
                                v =>
                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                                        v
                                    ) || 'E-mail must be valid.'
                            ]"
              :disabled="formInputDisabled"
              v-model="emailInputValue"
              :success="registerFormValid"
            ></v-text-field>

            <!-- Password input. -->

            <!-- Password input. -->
            <v-text-field
              prepend-inner-icon="mdi-textbox-password"
              outlined
              :type="showPasswordText ? 'text' : 'password'"
              label="Password"
              :rules="[v => !!v || 'Password is required', v => v.length >= 8 || 'Password must be 8 charecters or more']"
              required
              :disabled="formInputDisabled"
              v-model="passwordInputValue"
              :success="registerFormValid"
            >
              <template v-slot:append>
                <v-btn icon rounded small v-on:click="passwordVisible()">
                  <v-icon>
                    {{
                    showPasswordText
                    ? "mdi-eye"
                    : "mdi-eye-off"
                    }}
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>

            <!-- Confirm password input. -->

            <v-text-field
              prepend-inner-icon="mdi-textbox-password"
              outlined
              :type="showConfirmPasswordText ? 'text' : 'password'"
              label="Confirm Password"
              :rules="[v => !!v || 'Confirm password is required', v => v.length >= 8 || 'Password must be 8 charecters or more',
               () => (this.passwordInputValue === this.confirmPasswordInputValue) || 'Password dosnt match']
              "
              required
              :disabled="formInputDisabled"
              v-model="confirmPasswordInputValue"
              :success="registerFormValid"
            >
              <template v-slot:append>
                <v-btn icon rounded small v-on:click="passwordVisible()">
                  <v-icon>
                    {{
                    showConfirmPasswordText
                    ? "mdi-eye"
                    : "mdi-eye-off"
                    }}
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>

            <!-- Alert box. -->
            <v-alert type="error" value dismissible v-model="errorAlertVisible">
              <!-- {{ errors.message }} -->
              <v-list-item v-for="(value, key) in  validationErrors" v-bind:key="key">{{value}}</v-list-item>
            </v-alert>

            <!-- Register button. -->
            <v-row class="pb-4 pr-4 pl-4">
              <v-btn
                :loading="registerLoading ? true : false"
                :disabled="registerFormValid ? false : true"
                v-on:click="registerButtonClick()"
                block
                color="primary"
                large
              >Register</v-btn>
            </v-row>

            <v-row class="pb-4 pr-2 pl-2">
              <v-col left>
                <v-btn small outlined block color="primary">
                  <v-icon>mdi-file-lock</v-icon>Forgot
                  password
                </v-btn>
              </v-col>

              <v-col right>
                <v-btn v-on:click="loginButtonClick()" small outlined block color="primary">
                  <v-icon>mdi-account-plus</v-icon>Login
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>

    <v-col cols="2" v-if="$vuetify.breakpoint.smAndUp" class="text-center">
          <!-- Login & social login divider -->
          <!-- <v-flex xs v-if="$vuetify.breakpoint.smAndUp" class="ml-4 mr-4">
          <v-layout justify-center fill-height>-->
          <v-divider vertical></v-divider>
        </v-col>

        <!-- Social login buttons. -->
        <!-- Adding margin left -->
        <v-col cols="12" md="5">
          <v-btn large top block color="light-green" class="mb-2">
            <v-icon>mdi-google</v-icon>Google
          </v-btn>
          <v-btn large top block color="blue">
            <v-icon>mdi-facebook</v-icon>Facebook
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  mounted() {
    console.log("Register box component mounted.");
  },
  props: {

  },

  data() {
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
    validationErrors() {
      let errors = Object.values(this.errors);
      errors = errors.flat();
      return errors;
    }
  },
  methods: {
    passwordVisible: function() {
      this.showPasswordText = !this.showPasswordText;
    },
    confirmPasswordVisible: function() {
      this.showConfirmPasswordText = !this.showConfirmPasswordText;
    },

    registerButtonClick: function() {
      if (this.registerFormValid) {
        this.formSubmit();
      }
    },

    loginButtonClick: function() {
      this.$bus.emit("authenticator-change-component", "login");
    },

    //Submits the form to laravel backend, none json
    formSubmit: function() {
      var self = this;

      axios
        .post(self.registerRoute, {
          // email: self.emailInputValue,
          // password: self.passwordInputValue
          name: self.nameInputValue,
          email: self.emailInputValue,
          password: self.passwordInputValue,
          password_confirmation: self.confirmPasswordInputValue
        })
        .then(response => {
          console.log("got back: " + response);

            if ((response.status = 200)) {
            this.$store.commit("setAuthUser", response.data.authUser);
            this.$store.commit("setLoggedInStatus", true);
            //Set axios csrf token
            axios.defaults.headers.common["X-CSRF-TOKEN"] =
              response.data.csrf_token;
            //Push route
            this.$router.push(response.data.redirect).catch(err => {});
          }
        })
        .catch(error => {
          console.log(error);

          this.errors = error.response.data.errors;
          this.errorAlertVisible = true;
          this.passwordInputValue = "";
          this.confirmPasswordInputValue = "";
          this.registerLoading = false;
        });
    }
  }
};
</script>
