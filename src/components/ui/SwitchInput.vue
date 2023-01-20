<template>
  <div class="switch">
    <svg
      v-if="isTheme"
      class="switch__img"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
    >
      <path
        d="M10 12.5q1.042 0 1.771-.729.729-.729.729-1.771 0-1.042-.729-1.771Q11.042 7.5 10 7.5q-1.042 0-1.771.729Q7.5 8.958 7.5 10q0 1.042.729 1.771.729.729 1.771.729Zm0 1.083q-1.5 0-2.542-1.052Q6.417 11.479 6.417 10q0-1.5 1.052-2.542Q8.521 6.417 10 6.417q1.5 0 2.542 1.052Q13.583 8.521 13.583 10q0 1.5-1.052 2.542-1.052 1.041-2.531 1.041Zm-8.25-3.041q-.229 0-.385-.157-.157-.156-.157-.385t.157-.385q.156-.157.385-.157h2.208q.23 0 .386.157.156.156.156.385t-.156.385q-.156.157-.386.157Zm14.292 0q-.23 0-.386-.157-.156-.156-.156-.385t.156-.385q.156-.157.386-.157h2.208q.229 0 .385.157.157.156.157.385t-.157.385q-.156.157-.385.157ZM10 4.5q-.229 0-.385-.156-.157-.156-.157-.386V1.75q0-.229.157-.385.156-.157.385-.157t.385.157q.157.156.157.385v2.208q0 .23-.157.386-.156.156-.385.156Zm0 14.292q-.229 0-.385-.157-.157-.156-.157-.385v-2.208q0-.23.157-.386.156-.156.385-.156t.385.156q.157.156.157.386v2.208q0 .229-.157.385-.156.157-.385.157ZM5.333 6.104 4.146 4.896q-.167-.167-.167-.375 0-.209.167-.375.166-.167.375-.167.208 0 .375.167l1.208 1.187q.188.167.188.386t-.188.385q-.146.167-.364.167-.219 0-.407-.167Zm9.771 9.75-1.208-1.187q-.188-.167-.188-.375 0-.209.188-.396.146-.167.364-.167.219 0 .407.167l1.187 1.208q.167.167.167.375 0 .209-.167.375-.166.167-.364.167-.198 0-.386-.167Zm-1.208-9.75q-.167-.146-.167-.364 0-.219.167-.407l1.208-1.187q.188-.167.386-.156.198.01.364.156.167.166.167.364 0 .198-.167.386l-1.187 1.208q-.167.188-.386.188t-.385-.188Zm-9.75 9.75q-.167-.166-.167-.375 0-.208.167-.375l1.187-1.208q.167-.167.375-.167.209 0 .396.167.167.166.156.385-.01.219-.156.386l-1.208 1.187q-.167.167-.375.177-.209.011-.375-.177ZM10 10Z"
      />
    </svg>

    <label class="switch__label" for="checkbox">
      <input
        class="switch__input"
        type="checkbox"
        id="checkbox"
        :checked="checked"
        @change="$emit('change', $event)"
      />
      <div class="switch__slider switch__slider_round"></div>
    </label>
    <svg
      v-if="isTheme"
      class="switch__img"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
    >
      <path
        d="M10.021 16.583q-2.75 0-4.667-1.916Q3.438 12.75 3.438 10q0-2.625 1.77-4.5 1.771-1.875 4.354-2.042.146 0 .303.011.156.01.323.031-.605.604-.948 1.375-.344.771-.344 1.625 0 1.938 1.344 3.281 1.343 1.344 3.281 1.344.854 0 1.625-.344.771-.343 1.354-.948.042.167.052.323.01.156.01.323-.166 2.563-2.041 4.333-1.875 1.771-4.5 1.771Zm0-1.083q1.708 0 3.104-.979 1.396-.979 2.042-2.563-.417.104-.823.177-.406.073-.823.073-2.375 0-4.042-1.666Q7.812 8.875 7.812 6.5q0-.417.073-.823.073-.406.177-.823Q6.479 5.5 5.5 6.896 4.521 8.292 4.521 10q0 2.292 1.604 3.896t3.896 1.604Zm-.292-5.208Z"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'SwitchInput',
    props: {
      isTheme: {
        type: Boolean,
        required: false,
        default: true,
      },
      checked: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  };
</script>

<style scoped lang="scss">
  .switch {
    display: flex;
    align-items: center;
    &__img {
      fill: var(--font-color);
    }
  }
  .switch__label {
    display: inline-block;
    height: 19px;
    position: relative;
    width: 32px;
    margin: 0 5px;
  }

  .switch__label input {
    display: none;
  }

  .switch__slider {
    background-color: var(--additive-color);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .switch__slider:before {
    background-color: var(--bg-color);
    bottom: 3px;
    content: '';
    height: 13px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 13px;
  }

  .switch__input:checked + .switch__slider {
    background-color: var(--secondary-color);
  }

  .switch__input:checked + .switch__slider:before {
    transform: translateX(12px);
  }

  .switch__slider.switch__slider_round {
    border-radius: 34px;
  }

  .switch__slider.switch__slider_round:before {
    border-radius: 50%;
  }
</style>
