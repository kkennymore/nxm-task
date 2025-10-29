<script setup>
const props = defineProps({
    data: {
        type: null,
        default: {}
    }
});
</script>

<template>
    <section class="view-invoice-overlay-container">
        <div v-for="(item, index) in props.data" :key="index" >
            <h1>{{ item.invoice }}</h1>
        </div>
    </section>
</template>