<template>
  <div id="loginForm">
    <div class="login container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" name="" class="form-control input_user" :placeholder="usernamePlaceholder" v-model="username">
              </div>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" name="" class="form-control input_pass" :placeholder="passwordPlaceholder" v-model="password">
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-envelope-open-text"></i></span>
                </div>
                <input type="password" name="" class="form-control input_pass" :placeholder="emailPlaceholder" v-model="email">
              </div>
              <div class="d-flex justify-content-center mt-3 login_container">
                <button type="button" name="button" class="btn login_btn" :disabled="disableButton">{{registerBtn}}</button>
              </div>
            </form>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-content-center links">
              {{loginInsteadText}}&nbsp;<router-link to="/login">{{signin}}</router-link>
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
    el: '#registerForm',
    name: 'Register',
    data(){
      return {
        username: '',
        usernamePlaceholder: 'Username',
        password: '',
        passwordPlaceholder: 'Password',
        email: '',
        emailPlaceholder: 'Email',
        registerBtn: 'Register',
        loginInsteadText: 'Already have an account?',
        signin: 'Sign in',
        disableButton: true,
        invalidEmail: false,
      }
    },
    methods:{
    },
    updated: function(){        
        //source of regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript  (comment of second answer)
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // (note: not perfect validation but works for examples)
        this.validEmail = re.test(this.email);
        this.disableButton = this.username === '' || this.password === '' || !this.validEmail;
      },
    });
  </script>
  <style lang="scss">
</style>