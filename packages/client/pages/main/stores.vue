<template>
  <div id="stores" data-app>
    <p @click="handleDialog">Stores</p>
    <StyledDialog
      :value="value"
      title="diolog title"
      @handleDialog="handleDialog"
    />
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
    },
  },
}
</script>

<style lang="sass" scoped></style>
