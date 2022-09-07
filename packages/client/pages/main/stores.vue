<template>
  <div id="stores" data-app>
    <p @click="handleDialog">Stores</p>
    <StyledDialog :value="value" @handleDialog="handleDialog" />
  </div>
</template>

<script>
export default {
  name: 'Stores',
  layout: 'main',
  props: [],
  data: () => {
    return {
      value: false,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {
    handleDialog() {
      this.value = !this.value
      console.log('handleDialog', this.value)
    },
  },
}
</script>

<style lang="sass" scoped></style>
