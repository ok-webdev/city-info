<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <switch-input class="header__theme" @change="themeSwitchHandler" :checked="isThemeToggled"/>
  </header>
</template>

<script>
  import SwitchInput from './SwitchInput.vue';
  export default {
    name: 'TheHeader',
    components: {
      SwitchInput,
    },
    methods: {
      themeSwitchHandler (e) {
        this.$store.commit('toggleTheme', {theme: e.target.checked})
      }
    },
    computed: {
      isThemeToggled () {
        return this.$store.getters.theme === 'dark' ? true : false
      }
    }
  };
</script>

<style scoped lang="scss">
  .header {
    padding: 20px 0;
    position: relative;
    &__theme {
      position: absolute;
      top: 19px;
      right: 10px;
    }
    &__nav {
      color: var(--heading-color);
      a {
        font-weight: bold;
        color: var(--heading-color);
        &:hover {
          color: var(--additive-color);
        }

        &.router-link-exact-active {
          color: var(--additive-color);
        }
      }
    }
  }
</style>
