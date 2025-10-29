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
    textAlign: {
        type: null,
        default: "center"
    },
    method: {
        type: Function,
        default: () => { }
    }
});
const spanStyle = {
    textAlign: props.textAlign,
};
const buttonStyle = {
    backgroundImage: `url(${props.btnImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '14%'
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
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (props.method) },
    ...{ class: "button-container" },
    ...{ style: (__VLS_ctx.buttonStyle) },
});
// @ts-ignore
[buttonStyle,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ style: (__VLS_ctx.spanStyle) },
});
// @ts-ignore
[spanStyle,];
(props.btnText);
/** @type {__VLS_StyleScopedClasses['button-container']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    props: {
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
            type: Function,
            default: () => { }
        }
    },
});
export default {};
