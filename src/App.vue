<template>
  <div id="app">
    <div id="nav" class="navbar">
      <!-- zou hierboven nog een headerbar komen -->
      <router-link to="/">{{HomeText}}</router-link> |
      <router-link to="/login">{{LoginText}}</router-link> |
      <router-link to="/about">{{AboutText}}</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
  export default { name: 'App',
data(){
  return {
    HomeText: 'Home',
    LoginText: 'Login',
    AboutText: 'About',
  }
}};
  </script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #nav {
    margin-bottom: 30px;
    background-color: #eae7dc;
  }
</style>
