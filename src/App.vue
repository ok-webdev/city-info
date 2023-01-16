<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>

<script lang="ts">
  import TheHeader from './components/TheHeader.vue';
  export default {
    name: 'App',
    components: {TheHeader}
  }
</script>

<style lang="scss">
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
