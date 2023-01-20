<template>
  <div class="home">
    <h1>Search for capitals</h1>
    <search-cities @submit="searchSubmit" />
    <search-results />
    <p class="home__error" v-if="!citiesList && citiesError && !loading">
      {{ citiesError }}
    </p>
    <the-loader v-else-if="loading" />
  </div>
</template>

<script>
  import SearchResults from '@/components/SearchResults.vue';
  import SearchCities from '@/components/SearchCities.vue';
  import TheLoader from '@/components/TheLoader.vue';
  export default {
    name: 'HomeView',
    components: {
      SearchResults,
      SearchCities,
      TheLoader,
    },
    data() {
      return {
        loading: false,
        isModal: false,
        currentCity: null,
      };
    },
    methods: {
      async searchSubmit(e) {
        this.loading = true;
        await this.$store.dispatch('getCities', { city: e.searchValue });
        this.loading = false;
      },
      cityClickHandler(e) {
        this.isModal = true;
        this.currentCity = e.city;
      },
    },
    computed: {
      citiesList() {
        return this.$store.getters.citiesList;
      },
      citiesError() {
        return this.$store.getters.error;
      },
    },
    watch: {
      isModal(val) {
        if (val) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .home {
    &__error {
      padding: 50px 0;
      color: var(--warning-color);
    }
  }
</style>
