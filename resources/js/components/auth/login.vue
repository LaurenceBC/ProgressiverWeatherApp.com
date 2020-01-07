<template>
  <v-card outlined>
    <v-card-title class="pb-0">Login</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <v-form ref="loginForm" v-model="loginFormValid">
            <!-- Email input. -->
            <v-text-field
              prepend-inner-icon="mdi-account-box-outline"
              clearable
              outlined
              label="Email"
              required
              :rules="[ v => !!v || 'Email address is required.',
                        v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid.']"
              :disabled="formInputDisabled"
              v-model="emailInputValue"
              :success="loginFormValid"
            ></v-text-field>

            <!-- Password input. -->
            <v-text-field
              prepend-inner-icon="mdi-textbox-password"
              outlined
              :type="showpasswordtext ? 'text' : 'password'"
              label="Password"
              :rules="[v => !!v || 'Password is required']"
              required
              :disabled="formInputDisabled"
              v-model="passwordInputValue"
              :success="loginFormValid"
            >
              <template v-slot:append>
                <v-btn icon rounded small v-on:click="passwordVisible()">
                  <v-icon>
                    {{
                    showpasswordtext
                    ? "mdi-eye"
                    : "mdi-eye-off"
                    }}
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>

            <!-- Error alert box. -->
            <v-alert type="error" value dismissible v-model="errorAlertVisible">
              <!-- {{ errors.message }} -->
              <v-list-item v-for="(value, key) in  validationErrors" v-bind:key="key">{{value}}</v-list-item>
            </v-alert>

            <!-- Login button. -->
            <v-row class="pb-4 pr-4 pl-4">
              <v-btn
                :loading="loginLoading ? true : false"
                :disabled="loginFormValid ? false : true"
                v-on:click="loginButtonClick()"
                block
                color="primary"
                large
              >
                <v-icon left>mdi-login</v-icon>Login
              </v-btn>
              <v-checkbox v-model="rememberMe" hide-details label="Remember me." />
            </v-row>

            <!-- Sign up button. -->
            <v-row class="pb-4 pr-2 pl-2">
              <v-col left>
                <v-btn small outlined block color="primary">
                  <v-icon>mdi-file-lock</v-icon>Forgot
                  password
                </v-btn>
              </v-col>

              <v-col right>
                <v-btn v-on:click="registerButtonClick()" small outlined block color="primary">
                  <v-icon>mdi-account-plus</v-icon>Register
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
          <v-btn large top block color="light-green" class="mb-2" href="/login/redirect/google">
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
    console.log("Login component mounted.");
  },
  props: {},

  data() {
    return {
      loginRoute: this.ziggyRoute("login"),

      emailPrependInnerIcon: true,
      passwordPrependInnerIcon: true,
      errors: "",
      errorAlertVisible: false,
      loginLoading: false,

      showpasswordtext: false,
      formInputDisabled: false,
      loginFormValid: false,
      emailInputValueValid: false,
      passwordInputValueValid: false,

      //Form data

      emailInputValue: "",
      passwordInputValue: "",
      rememberMe: false
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
    registerButtonClick: function() {
      //   this.$bus.emit("authenticator-change-component", "register");
    },
    passwordVisible: function() {
      this.showpasswordtext = !this.showpasswordtext;
    },
    emailFocus: function() {
      this.emailPrependInnerIcon = !this.emailPrependInnerIcon;
    },
    loginButtonClick: function() {
      this.$refs.loginForm.validate();

      if (this.loginFormValid) {
        this.formSubmit();
      }
      //  this.formSubmit();
    },
    //Submits the form to laravel backend, none json
    formSubmit: function() {


      this.loginLoading = true;

      axios
        .post(this.loginRoute, {
          email: this.emailInputValue,
          password: this.passwordInputValue
        })
        .then(response => {
          if ((response.status = 200)) {
            //Store auth user and set loggedInStatus
            this.$store.commit("setAuthUser", response.data.authUser);
            this.$store.commit("setLoggedInStatus", true);
            //Set axios csrf token
            axios.defaults.headers.common["X-CSRF-TOKEN"] = response.data.csrf_token;
            //Push route
            this.$router.push({ name: "home" }).catch(err => {});
          }
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.errorAlertVisible = true;
          this.passwordInputValue = "";
          this.loginLoading = false;
        });
    }
  }
};
</script>
