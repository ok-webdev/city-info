<template>
  <form class="search" @submit.prevent="submitHandler" @reset="resetHandler">
    <label class="search__label" for="search">
      Type a city name or a part of a city name
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
  import BaseButton from './ui/BaseButton.vue';
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
      },
      resetHandler() {
        this.searchValue = null;
        this.$store.commit('setError', {error: null});
      },
    },
  };
</script>

<style scoped lang="scss">
  .search {
    padding: 20px 0;
    &__label {
      display: block;
      font-size: 14px;
      margin-bottom: 12px;
      color: var(--heading-color);
    }
    &__input {
      background-color: var(--bg-color);
      color: var(--font-color);
      font-family: inherit;
      width: 60%;
      min-width: 290px;
      padding: 10px 15px;
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
      outline-color: var(--font-color);
      &::placeholder{
        color: var(--font-color);
      }
      &:hover {
        border-color: var(--font-color);
      }
      &:-webkit-autofill{
        -webkit-box-shadow: 0 0 0 1000px  var(--bg-color) inset;
        -webkit-text-fill-color: var(--font-color);
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
