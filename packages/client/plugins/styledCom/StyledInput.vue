<template>
  <div :class="cssclass">
    <!-- select -->
    <v-select
      v-if="type === 'select'"
      :value="value"
      :items="selectOptions"
      label="Select"
      :placeholder="placeholder"
      :required="required"
      multiple
      chips
      :hint="hint"
      persistent-hint
    ></v-select>
    <!-- chipsSelect -->
    <v-select
      v-if="type === 'chipsSelect'"
      :value="value"
      :items="selectOptions"
      label="Select"
      :placeholder="placeholder"
      :required="required"
      item-text="label"
      item-value="value"
      item-disabled="disabled"
      multiple
      outlined
      solo
      flat
      chips
      dense
      :hint="hint"
      persistent-hint
      @input="handleInput"
    ></v-select>
    <!-- password -->
    <v-text-field
      v-if="type === 'password'"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      outlined
      background-color="#FFF"
      dense
      :hint="hint"
      persistent-hint
      @input="handleInput"
      @click:append="showPassword = !showPassword"
    ></v-text-field>
    <!-- text input -->
    <v-text-field
      v-if="type === 'input'"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      outlined
      background-color="#FFF"
      dense
      :hint="hint"
      persistent-hint
      @input="handleInput"
    ></v-text-field>
    <!-- radio -->
    <v-radio-group
      v-if="type === 'radio'"
      :value="value"
      :required="required"
      :column="radioDirection === 'column' ? 'column' : null"
      :row="radioDirection === 'row' ? 'row' : null"
      @change="handleInput"
    >
      <v-radio
        v-for="(option, index) in radioOptions"
        :key="index + 'radio'"
        :label="option.label"
        :value="option.value"
      ></v-radio>
    </v-radio-group>
    <!-- timePicker -->
    <TimePicker
      v-if="type === 'timePicker'"
      :time="value"
      :placeholder="placeholder"
      :required="required"
      :hint="hint"
      @input="handleInput"
    />
    <!-- checkbox -->
    <div v-if="type === 'checkbox'" class="flex flex-wrap gap-x-8">
      <v-checkbox
        v-for="(option, index) in checkboxOptions"
        :key="index + 'checkbox'"
        :label="option.label"
        :value="option.value"
        :input-value="value"
        @change="handleInput"
      />
    </div>
  </div>
</template>

<script>
import TimePicker from './TimePicker'

export default {
  name: 'StyledInput',
  components: { TimePicker },
  props: {
    cssclass: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'input',
    },
    value: {
      type: [String, Number, Array, Boolean],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '在這裡輸入內容',
    },
    selectOptions: {
      type: Array,
      default: () => {
        return ['選項一', '選項二']
      },
    },
    hint: {
      type: String,
      default: '',
    },
    radioOptions: {
      type: Array,
      default: () => [
        {
          label: '選項一',
          value: 'true',
        },
        {
          label: '選項二',
          value: 'false',
        },
      ],
    },
    radioDirection: {
      type: String,
      default: 'row',
    },
    checkboxOptions: {
      type: Array,
      default: () => [
        {
          label: '選項一',
          value: 'true',
        },
        {
          label: '選項二',
          value: 'false',
        },
      ],
    },
  },
  data: () => {
    return {
      showPassword: false,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    },
    handleChange(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<style lang="sass" scoped></style>
