<template>
  <div class="home">
    <h1>Search cities</h1>
    <search-cities @submit="searchSubmit" />
    <cities-table
      class="home__cities"
      v-if="citiesList && !citiesError && !loading"
      :cities="citiesList"
      @cityClick="cityClickHandler"
    />
    <p class="home__error" v-else-if="!citiesList && citiesError && !loading">
      {{ citiesError }}
    </p>
    <the-loader v-else-if="loading" />
    <transition name="fade">
      <info-modal v-if="isModal" @close="isModal = false" :city="currentCity" />
    </transition>
  </div>
</template>

<script>
  import CitiesTable from '@/components/CitiesTable.vue';
  import SearchCities from '@/components/SearchCities.vue';
  import InfoModal from '@/components/InfoModal.vue';
  import TheLoader from '@/components/TheLoader.vue';
  export default {
    name: 'HomeView',
    components: {
      CitiesTable,
      SearchCities,
      InfoModal,
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
    &__cities {
      margin: 10px auto;
    }
    &__error {
      padding: 50px 0;
      color: var(--warning-color);
    }
  }
</style>
