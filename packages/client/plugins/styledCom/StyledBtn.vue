<template>
  <div class="styled-btn text-center" :style="cssProps">
    <v-btn
      :large="large"
      :color="bgColor"
      :min-width="minWidth"
      :type="type"
      :elevation="elevation"
      :disabled="disabled"
      :to="to"
      :outlined="outlined"
      @click="onClick"
      ><slot>{{ text }}</slot>
    </v-btn>
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
    outlined: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: String,
      default: '0.5rem',
    },
  },
  data: () => {
    return {}
  },
  computed: {
    cssProps() {
      return {
        '--color': this.textColor,
        '--borderRadius': this.borderRadius,
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
    border-radius: var(--borderRadius)
</style>
