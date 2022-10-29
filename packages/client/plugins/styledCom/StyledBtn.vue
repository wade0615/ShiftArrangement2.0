<template>
  <div class="styled-btn" :style="cssProps">
    <v-btn
      :large="large"
      :color="bgColor"
      :min-width="minWidth"
      :type="type"
      :elevation="elevation"
      :disabled="disabled"
      :to="to"
      @click="onClick"
      >{{ text }}</v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '確定',
    },
    type: {
      type: String,
      default: 'submit',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    minWidth: {
      type: String,
      default: '160',
    },
    textColor: {
      type: String,
      default: '#000',
    },
    bgColor: {
      type: String,
      default: '#000',
    },
    large: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
    elevation: {
      type: String,
      default: '2',
    },
  },
  data: () => {
    return {}
  },
  computed: {
    cssProps() {
      return {
        '--color': this.textColor,
      }
    },
  },
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.styled-btn
  button.v-btn, a.v-btn
    color: var(--color)
</style>
