<template>
  <main id="stores" class="px-4 py-8" data-app>
    <section class="flex justify-between mb-3">
      <h2 @click="handleDialog">店面管理</h2>
      <nuxt-link to="/main/store/AddStore" class=""> 新增店面 </nuxt-link>
    </section>
    <section>
      <div
        v-for="(store, index) in stores"
        :key="index + 'store'"
        class="mb-6 cursor-pointer"
        @click="toStoreDetail(store.id)"
      >
        <div class="flex items-center">
          <div class="flex-auto">
            <h3>{{ store.storeName }}</h3>
            <p>{{ store.address }}</p>
            <p>{{ store.time }}</p>
          </div>
          <div class="flex-initial">
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </div>
        <v-divider class="mt-4"></v-divider>
      </div>
    </section>
    <StyledDialog
      :value="value"
      title="diolog title"
      @handleDialog="handleDialog"
    />
  </main>
</template>

<script>
export default {
  name: 'StoreList',
  layout: 'main',
  props: [],
  data: () => {
    return {
      value: false,
      stores: [
        {
          id: 'fujr4',
          storeName: '站前店',
          address: '台北市忠孝東路 3 號',
          time: '每週二公休',
        },
        {
          id: 'iked9',
          storeName: '公館店',
          address: '台北市羅斯福路 3 號',
          time: '每週二公休',
        },
      ],
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
    toStoreDetail(storeId) {
      this.$router.push({ name: 'main-store-StoreDetail' })
    },
  },
}
</script>

<style lang="sass" scoped>
#stores
  // section
  //   display: flex
  //   justify-content: space-between
  //   align-items: center
  h2
    flex: 0 1 auto
    font-weight: 500
    font-size: 1.25rem
    line-height: 1.5
  h3
    font-weight: 500
    font-size: 1.125rem
    line-height: 1.5
</style>
