<script setup lang="ts">
import { defineProps } from 'vue';

// Defining props with default values
const props = defineProps({
  btnImg: {
    type: String,
    default: ""
  },
  btnText: {
    type: String,
    default: ""
  },
  method: {
    type: Function,
    default: () => {}
  }
});
</script>

<template>
  <button 
    @click="props.method" 
    class="button-container" 
    :style="{ backgroundImage: `url(${props.btnImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '14%' }"
  >
    <span>{{ props.btnText }}</span>
  </button>
</template>

