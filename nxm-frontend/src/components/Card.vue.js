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
        type: null,
        default: 'center' // Default text alignment
    }
});
// style
const cardStyle = {
    backgroundColor: props.bgColor,
    borderRadius: `${props.radius}px`,
    padding: `${props.padding}px`,
    margin: props.margin,
    textAlign: props.align,
};
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
    ...{ style: (__VLS_ctx.cardStyle) },
    ...{ class: "card" },
});
// @ts-ignore
[cardStyle,];
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['card']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
const __VLS_base = (await import('vue')).defineComponent({
    props: {
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
    },
});
const __VLS_export = {};
export default {};
