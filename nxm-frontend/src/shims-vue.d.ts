declare module '*.vue';
declare module '@/services/*';
declare module '@/components/*';
declare module '@/assets/*';
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '@/services/RegexService';
