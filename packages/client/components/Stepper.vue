<template>
  <div id="stepper">
    <v-stepper @value="step">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" />
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2" />
        <v-divider></v-divider>
        <v-stepper-step step="3" />
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  layout: 'default',
  props: {
    step: {
      type: [Number],
      default: 3,
    },
  },
  data: () => {
    return {
      e1: 1,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
#stepper::v-deep
    .primary
      background-color: $mainColor
</style>
