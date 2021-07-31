<template>
  <div id="welcomeTemplate">
    <div class="login container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
            <div class="input-group mb-3">
              <h1 class="input-group-loginHeader"><strong>{{About}}</strong></h1>
            </div>
            <div class="input-group mb-3">
              <span>{{AboutText}}</span>
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
        About: 'About',
        AboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id vestibulum mi. Nunc ante risus, mollis mattis turpis sit amet, efficitur pellentesque lectus. Fusce euismod bibendum quam dapibus pharetra. Sed malesuada vulputate mauris eget egestas. In hac habitasse platea dictumst. Vivamus rhoncus turpis ut ex cursus facilisis. Ut viverra dolor libero, iaculis lobortis quam consectetur eget. Aliquam erat volutpat.',
      }
    },
    methods:{
    },
  });
</script>
<style lang="scss">
</style>