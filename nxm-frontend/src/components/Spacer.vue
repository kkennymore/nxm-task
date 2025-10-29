<script setup>

const props = defineProps({
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
});
const spacerStyle = {
  clear: 'both',
  position: 'relative',
  backgroundColor: 'transparent',
  height: props.height,
  width: props.width
};
</script>
<template>
  <div :style="spacerStyle"></div>
</template>
