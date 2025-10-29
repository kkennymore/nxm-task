<template>
  <div
    :style="{
      clear: 'both',
      position: 'relative',
      backgroundColor: 'transparent',
      height: height,
      width: width
    }"
  ></div>
</template>

<script>
export default {
  name: 'Spacer',
  props: {
    height: {
      type: String,
      default: '0'
    },
    width: {
      type: String,
      default: '0'
    }
  }
};
</script>
