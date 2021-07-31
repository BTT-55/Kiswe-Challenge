<template>
  <div id="welcomeTemplate">
    <div class="login container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
            <div class="input-group mb-3">
              <h1 class="input-group-loginHeader"><strong>{{RedirectHeader}}</strong></h1>
            </div>
            <div v-if='this.$route.params.loginSuccess' class="input-group mb-3">
              <span>{{loginSuccess}}</span>
            </div>
            <div v-if='this.$route.params.signupSuccess' class="input-group mb-3">
              <span>{{signupSuccess}}</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* NOTE: it is apparently very important to always use export default! */
  export default ({
    el: '#welcomeTemplate',
    name: 'Welcome',
    data(){
      return {
        RedirectHeader: 'Redirecting',
        loginbtn: 'Login',
        loginSuccess: 'Login successful, please wait a moment...',
        signupSuccess: 'Signup successful, please wait a moment...',
      }
    },
    methods:{
    },
  });
</script>
<style lang="scss">
</style>