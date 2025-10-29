<script setup lang="ts">
import { defineProps, type CSSProperties } from "vue";

// Defining props with default values
const props = defineProps({
  bgColor: {
    type: String,
    default: '#fff' // Default background color
  },
  radius: {
    type: Number,
    default: 8 // Default border-radius
  },
  padding: {
    type: Number,
    default: 16 // Default padding
  },
  margin: {
    type: String,
    default: '0 auto' // Default margin
  },
  align: {
    type: null,
    default: 'center' // Default text alignment
  }
});
// style
const cardStyle: CSSProperties = {
      backgroundColor: props.bgColor,
      borderRadius: `${props.radius}px`,
      padding: `${props.padding}px`,
      margin: props.margin,
      textAlign: props.align,
};
</script>

<template>
  <section :style="cardStyle" class="card">
    <slot></slot>
  </section>
</template>
