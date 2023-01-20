<template>
  <div>
    <cities-table class="details" :cities="citiesList" v-if="citiesList" />
    <city-details :city="currentCity" />
  </div>
</template>

<script>
  import CitiesTable from './CitiesTable.vue';
  import CityDetails from './CityDetails.vue';
  import { mapGetters } from 'vuex';
  export default {
    components: { CitiesTable, CityDetails },
    computed: {
      ...mapGetters(['citiesList', 'currentCity']),
    },
  };
</script>

<style scoped lang="scss">
  .details {
    margin-left: 50%;
  }
</style>
