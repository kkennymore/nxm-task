<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import { removeSpaces } from "@/services/RegexService";
import CustomAnimation from '@/components/CustomAnimation.vue';

// Define Props
const props = defineProps({
  text: {
    type: String,
    default: ""
  },
  formValueData: {
    type: String,
    default: ""
  },
  textValueData: {
    type: String,
    default: ""
  },
  buttonValueData: {
    type: String,
    default: ""
  },
  selectValueData: {
    type: String,
    default: ""
  },
  selectOptionData: {
    type: Array,
    default: () => []
  },
  selectKey: {
    type: String,
    default: ""
  },
  inputType: {
    type: String,
    default: "text"
  },
  isBtn: {
    type: Boolean,
    default: false
  },
  isForm: {
    type: Boolean,
    default: false
  },
  isText: {
    type: Boolean,
    default: false
  },
  isSelect: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  errorsData: {
    type: Boolean,
    default: false
  },
  selectDefaultText: {
    type: String,
    default: "Select an option"
  },
  titleStyle: {
    type: Object,
    default: () => ({})
  },
  textValueStyle: {
    type: Object,
    default: () => ({})
  },
  buttonStyle: {
    type: Object,
    default: () => ({})
  },
  selectStyle: {
    type: Object,
    default: () => ({})
  },
  formStyle: {
    type: Object,
    default: () => ({})
  },
  callBack: {
    type: Function,
    default: () => { }
  }
});

// Emit events (if necessary)
const emit = defineEmits();

// Computed property for dynamic field name
const fieldName = computed(() => removeSpaces(props.text?.trim()?.toLowerCase() || ""));

const selectValue = (option: any) => {
  return props.selectKey === ""
    ? option?.toString().toLowerCase()
    : option[props.selectKey]?.toString().toLowerCase() || "";
};

const selectLabel = (option: any) => {
  return props.selectKey === "" ? option : option[props.selectKey];
};

</script>

<template>
  <div class="info-item">
    <CustomAnimation>
      <!-- Title Label -->
      <span v-if="props.text" :style="props.titleStyle" class="form-title-style">
        {{ props.text }}
      </span>

      <!-- Form Input -->
      <div v-if="props.isForm" :class="['form-control', props.errorsData ? 'error' : '']">
        <input :name="fieldName" :style="props.formStyle" :type="props.inputType"
          :placeholder="`${props.text}${props.required ? ' *' : ' (optional)'}`" :value="props.formValueData"
          @input="props.callBack" :class="props.formValueData && !props.errorsData ? 'valid' : ''" />
      </div>

      <!-- Button -->
      <button v-if="props.isBtn" :style="props.buttonStyle" @click="props.callBack" class="edit-button">
        {{ props.buttonValueData }}
      </button>

      <!-- Static Text -->
      <div v-if="props.isText">
        <span :style="props.textValueStyle">{{ props.textValueData }}</span>
      </div>

      <!-- Select Dropdown -->
      <div v-if="props.isSelect" :style="props.selectStyle" class="form-control complete-form-select-wrap"
        :class="props.errorsData ? 'error' : ''">
        <select :name="fieldName" class="complete-form-select"
          :class="props.selectValueData && !props.errorsData ? 'valid' : ''" @change="props.callBack"
          :value="props.selectValueData">
          <option value="">{{ props.selectDefaultText }}</option>
          <option v-for="(option, index) in props.selectOptionData" :key="index" :value="selectValue(option)">
            {{ selectLabel(option) }}
          </option>
        </select>
      </div>
    </CustomAnimation>
  </div>
</template>
