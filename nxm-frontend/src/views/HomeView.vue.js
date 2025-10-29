import { reactive, onMounted } from 'vue';
import Banner from '@/components/Banner.vue';
import Area4 from '@/components/Area4.vue';
import Area2 from '@/components/Area2.vue';
import Influencer from '@/components/Influencer.vue';
import LearnMore from '@/components/LearnMore.vue';
import Footer from '@/components/Footer.vue';
import FormSection from '@/components/FormSection.vue';
const userState = reactive({
    isLoading: false,
    data: {
        userId: "728637283",
        username: "Usiobaifo Kenneth",
        email: "kenneth@yahoo.com"
    }
});
// When the page is mounted
onMounted(() => {
    console.log(JSON.stringify(userState, null, 2));
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "home-main-wrap" },
});
/** @type {[typeof Banner, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Banner, new Banner({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Area2, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Area2, new Area2({}));
const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {[typeof Area4, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(Area4, new Area4({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {[typeof Influencer, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(Influencer, new Influencer({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof LearnMore, ]} */ ;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(LearnMore, new LearnMore({}));
const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
/** @type {[typeof FormSection, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(FormSection, new FormSection({}));
const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {__VLS_StyleScopedClasses['home-main-wrap']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
