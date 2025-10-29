import { computed } from 'vue';
import { removeSpaces } from '@/services/RegexService';
import CustomAnimation from './CustomAnimation.vue';
const props = defineProps({
    text: String,
    formValueData: String,
    textValueData: String,
    buttonValueData: String,
    selectValueData: String,
    selectOptionData: Array,
    selectKey: String,
    inputType: { type: String, default: 'text' },
    isBtn: Boolean,
    isForm: Boolean,
    isText: Boolean,
    isSelect: Boolean,
    required: Boolean,
    errorsData: Boolean,
    selectDefaultText: { type: String, default: 'Select an option' },
    titleStyle: Object,
    textValueStyle: Object,
    buttonStyle: Object,
    selectStyle: Object,
    formStyle: Object,
    // ✅ Properly typed callback
    callBack: {
        type: Function,
        default: () => { },
    },
});
const fieldName = computed(() => removeSpaces(props.text?.trim()?.toLowerCase() || ''));
const selectValue = (option) => props.selectKey === ''
    ? option?.toString().toLowerCase()
    : option[props.selectKey]?.toString().toLowerCase() || '';
const selectLabel = (option) => props.selectKey === '' ? option : option[props.selectKey];
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
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "info-item" },
});
/** @type {[typeof CustomAnimation, typeof CustomAnimation, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CustomAnimation, new CustomAnimation({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const { default: __VLS_3 } = __VLS_2.slots;
if (props.text) {
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ style: (props.titleStyle) },
        ...{ class: "form-title-style" },
    });
    (props.text);
}
if (props.isForm) {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: (['form-control', props.errorsData ? 'error' : '']) },
    });
    __VLS_asFunctionalElement(__VLS_elements.input)({
        ...{ onInput: ((e) => props.callBack(e)) },
        name: (__VLS_ctx.fieldName),
        ...{ style: (props.formStyle) },
        type: (props.inputType),
        placeholder: (`${props.text}${props.required ? ' *' : ' (optional)'}`),
        value: (props.formValueData),
        ...{ class: (props.formValueData && !props.errorsData ? 'valid' : '') },
    });
    // @ts-ignore
    [fieldName,];
}
if (props.isBtn) {
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: ((e) => props.callBack(e)) },
        ...{ style: (props.buttonStyle) },
        ...{ class: "edit-button" },
    });
    (props.buttonValueData);
}
if (props.isText) {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ style: (props.textValueStyle) },
    });
    (props.textValueData);
}
if (props.isSelect) {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ style: (props.selectStyle) },
        ...{ class: "form-control complete-form-select-wrap" },
        ...{ class: (props.errorsData ? 'error' : '') },
    });
    __VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
        ...{ onChange: ((e) => props.callBack(e)) },
        name: (__VLS_ctx.fieldName),
        ...{ class: "complete-form-select" },
        ...{ class: (props.selectValueData && !props.errorsData ? 'valid' : '') },
        value: (props.selectValueData),
    });
    // @ts-ignore
    [fieldName,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        value: "",
    });
    (props.selectDefaultText);
    for (const [option, index] of __VLS_getVForSourceType((props.selectOptionData))) {
        __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
            key: (index),
            value: (__VLS_ctx.selectValue(option)),
        });
        // @ts-ignore
        [selectValue,];
        (__VLS_ctx.selectLabel(option));
        // @ts-ignore
        [selectLabel,];
    }
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['info-item']} */ ;
/** @type {__VLS_StyleScopedClasses['form-title-style']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['edit-button']} */ ;
/** @type {__VLS_StyleScopedClasses['form-control']} */ ;
/** @type {__VLS_StyleScopedClasses['complete-form-select-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['complete-form-select']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        text: String,
        formValueData: String,
        textValueData: String,
        buttonValueData: String,
        selectValueData: String,
        selectOptionData: Array,
        selectKey: String,
        inputType: { type: String, default: 'text' },
        isBtn: Boolean,
        isForm: Boolean,
        isText: Boolean,
        isSelect: Boolean,
        required: Boolean,
        errorsData: Boolean,
        selectDefaultText: { type: String, default: 'Select an option' },
        titleStyle: Object,
        textValueStyle: Object,
        buttonStyle: Object,
        selectStyle: Object,
        formStyle: Object,
        // ✅ Properly typed callback
        callBack: {
            type: Function,
            default: () => { },
        },
    },
});
export default {};
