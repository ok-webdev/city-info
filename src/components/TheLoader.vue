<template>
  <p class="loader">Loading...</p>
</template>

<style scoped lang="scss">
  .loader {
    font-size: 36px;
    color: gray;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: blinking 1s infinite linear;
  }

  @keyframes blinking {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
