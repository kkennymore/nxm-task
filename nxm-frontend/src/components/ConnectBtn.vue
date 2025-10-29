<script setup lang="ts">
import { defineProps, type CSSProperties } from 'vue';

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
  textAlign: {
    type: null,
    default: "center"
  },
  method: {
    type: null,
    default: () => {}
  }
});

const spanStyle: CSSProperties = {
  textAlign: props.textAlign,
};

const buttonStyle: CSSProperties = {
  backgroundImage: `url(${props.btnImg})`, 
  backgroundRepeat: 'no-repeat', 
  backgroundSize: '14%'
};
</script>

<template>
  <button  @click="props.method" class="button-container" :style="buttonStyle">
    <span :style="spanStyle">{{ props.btnText }}</span>
  </button>
</template>

