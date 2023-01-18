<template>
  <button class="button" :class="buttonColor" :type="type">{{ title }}</button>
</template>

<script>
  export default {
    name: 'Base-Button',
    props: {
      title: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: false,
        default: 'submit'
      }
    },
    computed: {
      buttonColor () {
        return {
          'button_submit': this.type === 'submit',
          'button_reset': this.type === 'reset'
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .button {
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    padding: 5px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: var(--button-text-color);
    &_submit{
      background-color: var(--additive-color);
    }
    &_reset{
      background-color: var(--warning-color);
    }
    &:hover {
      filter: brightness(1.1)
    }
  }
</style>
