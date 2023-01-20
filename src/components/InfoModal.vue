<template>
  <div class="backdrop" @click.self="$emit('close')">
    <div class="modal">
      <table class="modal__city">
        <tr class="modal__city-row">
          <td class="modal__city-item">City:</td>
          <td class="modal__city-value">{{ city.capital[0] }}</td>
        </tr>
        <tr class="modal__city-row">
          <td class="modal__city-item">Country:</td>
          <td class="modal__city-value">
            <div class="modal__city-country">
              <img
                class="modal__city-flag"
                :src="city.flags.svg"
                alt="city.name.official"
              />
              {{ city.name.common }}
            </div>
          </td>
        </tr>
        <tr class="modal__city-row">
          <td class="modal__city-item">Subregion:</td>
          <td class="modal__city-value">{{ city.subregion }}</td>
        </tr>
        <tr class="modal__city-row">
          <td class="modal__city-item">Currency(-ies):</td>
          <td class="modal__city-value">
            <p v-for="(item, index) in currencies" :key="index + Math.random()">
              {{ item }}
            </p>
          </td>
        </tr>
        <tr class="modal__city-row">
          <td class="modal__city-item">Timezone(-s):</td>
          <td class="modal__city-value">
            <p
              v-for="(item, index) in city.timezones"
              :key="index + Math.random()"
            >
              {{ item }}
            </p>
          </td>
        </tr>
        <tr class="modal__city-row">
          <td class="modal__city-item">Language(-s):</td>
          <td class="modal__city-value">
            <p v-for="(item, index) in languages" :key="index + Math.random()">
              {{ item }}
            </p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Info-Modal',
    props: {
      city: {
        type: [Object, null],
        required: true,
      },
    },
    computed: {
      languages() {
        const langs = [];
        for (let key in this.city.languages) {
          langs.push(this.city.languages[key]);
        }
        return langs;
      },
      currencies() {
        const currs = [];
        for (let key in this.city.currencies) {
          currs.push(
            `${this.city.currencies[key].name}, ${this.city.currencies[key].symbol}`
          );
        }
        return currs;
      },
    },
    watch: {
      city(val) {
        val
          ? (document.body.style.overflow = 'hidden')
          : (document.body.style.overflow = 'visible');
      },
    },
  };
</script>

<style scoped lang="scss">
  .backdrop {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    transition: all 0.3s ease;
  }
  .modal {
    width: 300px;
    background-color: var(--bg-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 20px;
    &__city {
      width: 100%;
      border-collapse: collapse;
      &-row {
        border-bottom: 1px solid black;
        &:last-child {
          border: none;
        }
      }
      &-item,
      &-value {
        padding: 10px 5px;
      }
      &-item {
        font-size: 12px;
        font-weight: 300;
        text-align: left;
      }
      &-value {
        width: 65%;
        font-size: 12px;
        font-weight: 600;
        text-align: right;
      }
      &-country {
        display: flex;
        justify-content: end;
        align-items: center;
      }
      &-flag {
        width: 20px;
        margin-right: 5px;
      }
    }
  }
</style>
