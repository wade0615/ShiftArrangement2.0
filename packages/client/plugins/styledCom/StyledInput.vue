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
      v-else
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
  </div>
</template>

<script>
export default {
  name: 'StyledInput',
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
      type: [String, Number, Array],
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
  },
}
</script>

<style lang="sass" scoped></style>
