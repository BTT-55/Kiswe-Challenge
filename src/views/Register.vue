<template>
  <div id="loginForm">
    <div class="login container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <h1 class="input-group-loginHeader"><strong>{{registerHeader}}</strong></h1>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" name="" class="form-control input_user" :placeholder="firstNamePlaceholder" v-model="firstName">
              </div>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" name="" class="form-control input_user" :placeholder="lastNamePlaceholder" v-model="lastName">
              </div>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" name="" class="form-control input_pass" :placeholder="passwordPlaceholder" v-model="password">
              </div>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-redo"></i></span>
                </div>
                <input type="password" name="" class="form-control input_pass" :placeholder="passwordConfirmPlaceholder" v-model="passwordConfirm">
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-envelope-open-text"></i></span>
                </div>
                <input type="email" name="" class="form-control input_pass" :placeholder="emailPlaceholder" v-model="email">
              </div>

              <!-- TODO: replace these with proper bootstrap alerts! -->
              <div class="d-flex justify-content-center mt-3 login_container">
                <div v-if="passwordsNoMatch" class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-exclamation-triangle"></i>&nbsp;{{passwordsNoMatchWarning}}</span>
                </div>
              </div>

              <div class="d-flex justify-content-center mt-3 login_container">
                <button @click="attemptSignUp" type="button" name="button" class="btn login_btn" :disabled="disableButton">{{registerBtn}}</button>
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
        registerHeader: 'Register',
        firstName: '',
        firstNamePlaceholder: 'First name',
        lastName: '',
        lastNamePlaceholder: 'Last name',
        password: '',
        passwordPlaceholder: 'Password',
        passwordConfirm: '',
        passwordConfirmPlaceholder: 'Repeat password',
        email: '',
        emailPlaceholder: 'Email',
        registerBtn: 'Register',
        loginInsteadText: 'Already have an account?',
        signin: 'Sign in',
        disableButton: true,
        invalidEmail: false,
        passwordsNoMatch: false,
        passwordsNoMatchWarning: 'Passwords don\'t match.',
      }
    },
    methods:{
      attemptSignUp(){
        console.log("test!");
        // only sign the user up if the user can sign up (shown by the button being enabled)
        if(this.disableButton)
          return;
        this.$router.push({ name: 'Welcome', params: {signupSuccess: true}});
      }
    },
    updated: function(){        
        //source of regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript  (comment of second answer)
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // (note: not perfect validation but works for examples)
        this.validEmail = re.test(this.email);
        // this should really compare the encrypted password strings instead of the passwords themselves
        this.passwordsNoMatch = this.password !== this.passwordConfirm && this.password !== '' && this.passwordConfirm !== '';
        // disable the button if data is lacking
        this.disableButton = this.firstName === '' || this.lastName === '' || this.password === ''  || this.passwordsNoMatch || !this.validEmail;
      },
    });
  </script>
  <style lang="scss">
</style>