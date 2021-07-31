<template>
  <div id="loginForm">
    <div class="login container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <h1 class="input-group-loginHeader"><strong>{{loginHeader}}</strong></h1>
              </div>
              <div class="input-group mb-3">
                <span v-if="this.$route.params.loginFailed" class="input-group-loginWarning">{{loginWarning}}</span>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" name="" class="form-control input_user" v-bind:placeholder="usernamePlaceholder" v-model="username">
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" name="" class="form-control input_pass" v-bind:placeholder="passwordPlaceholder" v-model="password">
              </div>

              <div class="form-group">
                <div class="checkbox">
                  <input type="checkbox" id="customControlInline">
                  <label for="customControlInline">{{rememberMe}}</label>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3 login_container">
                <div class="input-group-append">
                  <span v-show="capsEnabled" class="input-group-text"><i class="fas fa-exclamation-triangle"></i>&nbsp;{{capsWarning}}</span>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3 login_container">
                <button id="loginButton" @click="attemptLogin" type="button" name="button" class="btn login_btn" :disabled="disableButton">{{loginbtn}}</button>
              </div>
            </form>
          </div>

          <div class="mt-3">
            <div class="d-flex justify-content-center links">
              <router-link to="/register">{{signup}}</router-link>&nbsp;|&nbsp;
              <!-- TODO: make a typical password recovery page? -->
              <router-link to="/register">{{recovery}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* NOTE: it is apparently very important to always use export default! */
  export default ({
    el: '#loginForm',
    name: 'Login',
    data(){
      return {
        loginHeader: 'Login',
        loginbtn: 'Login',
        username: '',
        usernamePlaceholder: 'Username or email',
        password: '',
        passwordPlaceholder: 'Password',
        rememberMe: 'Remember me',
        signup: 'Sign up',
        recovery: 'Forgot your password?',
        loginWarning: 'Error: logging in failed. Please try again.',
        capsWarning: 'Capslock is turned on.',
        disableButton: true,
        capsEnabled: false,
      }
    },
    methods:{
      attemptLogin: function(){
        if (this.username === 'test' && this.password === 'kiswe')
          this.$router.push({ name: 'Welcome', params: {loginSuccess: true}});
        else{
          this.$router.push({ name: 'Login', params: {loginFailed: true}});
        }
      }
    },
    updated: function(){
      this.disableButton = this.username === '' || this.password === '';
    },
    mounted: function(){
      // source: https://forum.vuejs.org/t/capture-keypress-for-all-keys/14560/2
      // this allows users to press enter to log in
      window.addEventListener("keypress", function(e) {
        if(e.keyCode == 13 && !this.disableButton)
          this.attemptLogin();
      }.bind(this));
      window.addEventListener("keyup", function(e) {
        if (e.getModifierState('CapsLock')) {
          this.capsEnabled = true;
        } else {
          this.capsEnabled = false;
        }
      }.bind(this));
    }
  });
</script>

<style lang="scss">
</style>