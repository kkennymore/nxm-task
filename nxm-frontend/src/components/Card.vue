<script setup lang="ts">
import { defineProps } from "vue";

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
    type: String,
    default: 'center' // Default text alignment
  }
});
</script>

<template>
  <section 
    :style="{
      backgroundColor: props.bgColor,
      borderRadius: `${props.radius}px`,
      padding: `${props.padding}px`,
      margin: props.margin,
      textAlign: props.align
    }"
    class="card"
  >
    <slot></slot>
  </section>
</template>
