<template>
  <form class="search" @submit.prevent="submitHandler" @reset="resetHandler">
    <label class="search__label" for="search">
      Type city name or part of city name
    </label>
    <input
      class="search__input"
      type="text"
      id="search"
      placeholder="Search..."
      v-model="searchValue"
    />
    <div class="search__buttons">
      <base-button title="Reset" type="reset" />
      <base-button title="Submit" type="submit" />
    </div>
  </form>
</template>

<script>
  import BaseButton from './BaseButton.vue';
  export default {
    name: 'Search-Cities',
    components: {
      BaseButton,
    },
    data() {
      return {
        searchValue: null,
      };
    },
    methods: {
      submitHandler() {
        this.$emit('submit', { searchValue: this.searchValue });
        this.searchValue = null;
      },
      resetHandler() {
        this.searchValue = null;
        this.$store.dispatch('resetError');
      },
    },
  };
</script>

<style scoped lang="scss">
  .search {
    padding: 20px;
    &__label {
      display: block;
      font-size: 14px;
      margin-bottom: 10px;
    }
    &__input {
      width: 60%;
      min-width: 220px;
      padding: 5px 7px;
      border: 1px solid #e7e7e7;
      border-radius: 5px;
      outline-color: #9c9c9c;
      &:hover {
        border-color: #9c9c9c;
      }
    }
    &__buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
    }
  }
</style>
