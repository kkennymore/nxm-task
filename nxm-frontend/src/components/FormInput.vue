<script setup >
import { computed } from 'vue';
import { removeSpaces } from '@/services/RegexService';
import CustomAnimation from '@/components/CustomAnimation.vue';

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
    default: () => {},
  },
});

const fieldName = computed(
  () => removeSpaces(props.text?.trim()?.toLowerCase() || '')
);

const selectValue = (option) =>
  props.selectKey === ''
    ? option?.toString().toLowerCase()
    : option[props.selectKey]?.toString().toLowerCase() || '';

const selectLabel = (option) =>
  props.selectKey === '' ? option : option[props.selectKey];
</script>

<template>
  <div class="info-item">
    <CustomAnimation>
      <span v-if="props.text" :style="props.titleStyle" class="form-title-style">
        {{ props.text }}
      </span>

      <!-- Input with correct typing -->
      <div v-if="props.isForm" :class="['form-control', props.errorsData ? 'error' : '']">
        <input
          :name="fieldName"
          :style="props.formStyle"
          :type="props.inputType"
          :placeholder="`${props.text}${props.required ? ' *' : ' (optional)'}`"
          :value="props.formValueData"
          @input="(e) => props.callBack(e)"
          :class="props.formValueData && !props.errorsData ? 'valid' : ''"
        />
      </div>

      <!-- Button -->
      <button
        v-if="props.isBtn"
        :style="props.buttonStyle"
        @click="(e) => props.callBack(e)"
        class="edit-button"
      >
        {{ props.buttonValueData }}
      </button>

      <!-- Static text -->
      <div v-if="props.isText">
        <span :style="props.textValueStyle">{{ props.textValueData }}</span>
      </div>

      <!-- Select -->
      <div
        v-if="props.isSelect"
        :style="props.selectStyle"
        class="form-control complete-form-select-wrap"
        :class="props.errorsData ? 'error' : ''"
      >
        <select
          :name="fieldName"
          class="complete-form-select"
          :class="props.selectValueData && !props.errorsData ? 'valid' : ''"
          @change="(e) => props.callBack(e)"
          :value="props.selectValueData"
        >
          <option value="">{{ props.selectDefaultText }}</option>
          <option
            v-for="(option, index) in props.selectOptionData"
            :key="index"
            :value="selectValue(option)"
          >
            {{ selectLabel(option) }}
          </option>
        </select>
      </div>
    </CustomAnimation>
  </div>
</template>
