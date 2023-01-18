<template>
  <table class="cities">
    <tr class="cities__header">
      <th class="cities__header-country">Country</th>
      <th class="cities__header-capital">Capital</th>
    </tr>
    <tr class="cities__info" v-for="(city, index) in cities" :key="index + Math.random()" @click.prevent="$emit('cityClick', { city })">
      <td class="cities__country">{{ city.name.official }}</td>
      <td class="cities__capital">
        <a href="#">{{
          city.capital[0]
        }}</a>
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'Cities-List',
    props: {
      cities: {
        type: Array,
        required: false,
        default: null,
      },
    },
  };
</script>

<style scoped lang="scss">
  .cities {
    width: 60%;
    min-width: 290px;
    border-collapse: collapse;
    &__header {
      border-bottom: 1px solid var(--secondary-color);
      &-country,
      &-capital {
        padding: 10px 20px;
      }
      &-country {
        text-align: left;
      }
      &-capital {
        text-align: right;
      }
    }
    &__country,
    &__capital {
      padding: 15px 20px;
    }
    &__country {
      text-align: left;
    }
    &__capital {
      width: 60%;
      text-align: right;
     
     
    }
    &__info{
      background-color: var(--bg-color);
      cursor: pointer;
      &:nth-child(odd) {
        background-color: var(--secondary-color);
      }
      &:hover {
        a{
          color: var(--additive-color)
        }
        filter: brightness(1.05)
      }
    }
  }
</style>
