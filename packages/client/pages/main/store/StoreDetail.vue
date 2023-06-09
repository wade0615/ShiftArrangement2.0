<template>
  <div id="store-detail">
    <header class="flex justify-between px-8 py-2.5">
      <nuxt-link to="/main/store/StoreList">
        <v-icon class="text-transparent">mdi-chevron-left</v-icon>
      </nuxt-link>
      <h2>{{ header }}</h2>
      <v-icon class="icon-transparent">mdi-chevron-left</v-icon>
    </header>
    <body>
      <section class="px-4 mb-6">
        <header class="flex justify-between mb-2">
          <h3 class="text-lg font-medium">基本資訊</h3>
          <nuxt-link to="/main/store/edit/StoreInfo" class="main-color">
            編輯
          </nuxt-link>
        </header>
        <div class="p-3 shadow-md">
          <v-simple-table dense>
            <thead></thead>
            <tbody>
              <tr>
                <td class="pr-3">店面名稱</td>
                <td>站前店</td>
              </tr>
              <tr>
                <td>公休日</td>
                <td>每週二</td>
              </tr>
              <tr>
                <td>內外場</td>
                <td>有內外場</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </section>
      <section class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">例行班表</h3>
          <nuxt-link to="/main/store/edit/RoutineShifts" class="main-color">
            新增
          </nuxt-link>
        </header>
        <div class="p-3 shadow-md">卡片卡片</div>
      </section>
    </body>
  </div>
</template>

<script>
export default {
  name: 'StoreDetail',
  layout: 'main',
  props: [],
  data: () => {
    return {
      header: '站前店',
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
#store-detail
  .icon-transparent
    color: transparent
</style>
