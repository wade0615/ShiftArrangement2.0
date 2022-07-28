<template>
  <v-text-field
    :value="value"
    :placeholder="placeholder"
    required
    outlined
    background-color="#FFF"
    dense
    class="mb-2"
    @input="handleInput"
  ></v-text-field>
</template>

<script>
export default {
  name: 'StyledInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '在這裡輸入內容',
    },
  },
  data: () => {
    return {}
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
