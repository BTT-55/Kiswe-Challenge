<template>
  <div id="welcomeTemplate">
    <div class="login container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
            <div class="input-group mb-3">
              <h1><strong>{{RedirectHeader}}</strong></h1>
            </div>
            <div class="input-group mb-3">
              <span>Login successful, please wait a moment...</span>
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
      }
    },
    methods:{
      attemptLogin: function(){
        if (this.username === 'test' && this.password === 'kiswe')
          this.$router.push({ name: 'Welcome', params: {loginFailed: false}});
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
    }
  });
</script>
<style lang="scss">
</style>