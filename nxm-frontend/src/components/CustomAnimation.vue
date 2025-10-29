<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";

const props = defineProps({
    duration: {
        type: Number,
        default: 0.1
    },
    delay: {
        type: Number,
        default: 1.5
    }
});

const sectionRef = ref(null);
const isInView = ref(false);

const animationStyle = ref({
    transform: 'translateY(-200px)',
    opacity: 0,
    transition: `all ${props.delay}s cubic-bezier(0.30, 0.80, 0.99, 1) ${props.duration}s`
});

const observer = ref<IntersectionObserver | null>(null);

// Check if the element is in view using IntersectionObserver
const observeElement = () => {
    observer.value = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                console.log(JSON.stringify(entry.target.innerHTML));
                isInView.value = true;
            } else {
                isInView.value = false;
            }
        },
        {
            threshold: 0.5
        }
    );

    if (sectionRef.value) {
        observer.value.observe(sectionRef.value);
    }
};

// Watch `isInView` to apply the animation styles
watchEffect(() => {
    if (isInView.value) {
        animationStyle.value = {
            transform: 'none',
            opacity: 1,
            transition: `all ${props.delay}s cubic-bezier(0.30, 0.80, 0.99, 1) ${props.duration}s`
        };
    } else {
        animationStyle.value = {
            transform: 'translateY(-200px)',
            opacity: 0,
            transition: `all ${props.delay}s cubic-bezier(0.30, 0.80, 0.99, 1) ${props.duration}s`
        };
    }
});

// Start observing when the component is mounted
onMounted(() => {
    observeElement();
});
</script>
<template>
    <section ref="sectionRef">
        <span :style="animationStyle">
            <slot></slot>
        </span>
    </section>
</template>
