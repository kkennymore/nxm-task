import CustomAnimation from '@/components/CustomAnimation.vue';
import user from "@/assets/images/group.webp";
import RegisterForm from './RegisterForm.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "register-main-wrap" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "formwrap" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-content" },
});
/** @type {[typeof CustomAnimation, typeof CustomAnimation, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CustomAnimation, new CustomAnimation({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const { default: __VLS_3 } = __VLS_2.slots;
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: (__VLS_ctx.user),
    alt: "image",
});
// @ts-ignore
[user,];
var __VLS_2;
/** @type {[typeof CustomAnimation, typeof CustomAnimation, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(CustomAnimation, new CustomAnimation({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
const { default: __VLS_7 } = __VLS_6.slots;
/** @type {[typeof RegisterForm, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(RegisterForm, new RegisterForm({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
var __VLS_6;
/** @type {__VLS_StyleScopedClasses['register-main-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['formwrap']} */ ;
/** @type {__VLS_StyleScopedClasses['form-content']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
