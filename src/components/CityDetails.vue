<template>
  <div>
    <transition name="fade">
      <info-modal
        v-if="city"
        @close="setCurrentCity({ currentCity: null })"
        :city="city"
      />
    </transition>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import InfoModal from './InfoModal.vue';
  export default {
    components: { InfoModal },
    props: {
      city: {
        type: Object,
        required: false,
        default: null
      },
    },
    methods: {
      ...mapMutations(['setCurrentCity']),
    },
  };
</script>
