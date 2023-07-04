<template>
  <div id="routine-shifts">
    <header class="flex justify-between px-8 py-2.5">
      <nuxt-link to="/main/store/StoreDetail">
        <v-icon>mdi-chevron-left</v-icon>
      </nuxt-link>
      <h2>{{ header }}</h2>
      <v-icon class="icon-transparent">mdi-chevron-left</v-icon>
    </header>
    <main class="px-4 py-6">routine-shifts</main>
  </div>
</template>

<script>
export default {
  name: 'RoutineShifts',
  layout: 'main',
  props: [],
  data: () => {
    return {
      header: '編輯例行班表',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {
    const propsQuery = this.$route.query.values
    console.log('propsQuery', propsQuery)
  },
  updated() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
#routine-shifts
  .icon-transparent
    color: transparent
</style>
