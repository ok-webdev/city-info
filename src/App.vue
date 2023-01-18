<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue';
  export default {
    name: 'App',
    components: { TheHeader },
    created() {
      const theme = localStorage.getItem('theme');
      theme === 'dark'
        ? this.$store.commit('toggleTheme', { theme: true })
        : this.$store.commit('toggleTheme', { theme: false });
    },
  };
</script>

