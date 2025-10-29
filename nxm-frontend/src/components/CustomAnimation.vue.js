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
const observer = ref(null);
// Check if the element is in view using IntersectionObserver
const observeElement = () => {
    observer.value = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            console.log(JSON.stringify(entry.target.innerHTML));
            isInView.value = true;
        }
        else {
            isInView.value = false;
        }
    }, {
        threshold: 0.5
    });
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
    }
    else {
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ref: "sectionRef",
});
/** @type {typeof __VLS_ctx.sectionRef} */ ;
// @ts-ignore
[sectionRef,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ style: (__VLS_ctx.animationStyle) },
});
// @ts-ignore
[animationStyle,];
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
const __VLS_base = (await import('vue')).defineComponent({
    props: {
        duration: {
            type: Number,
            default: 0.1
        },
        delay: {
            type: Number,
            default: 1.5
        }
    },
});
const __VLS_export = {};
export default {};
