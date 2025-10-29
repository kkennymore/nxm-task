declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: NumberConstructor;
        default: number;
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: null;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: NumberConstructor;
        default: number;
    };
    padding: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: null;
        default: string;
    };
}>> & Readonly<{}>, {
    radius: number;
    bgColor: string;
    padding: number;
    margin: string;
    align: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
