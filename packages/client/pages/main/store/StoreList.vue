<template>
  <main id="stores" class="px-4 py-8" data-app>
    <section class="flex justify-between mb-3">
      <h2 @click="handleDialog">店面管理</h2>
      <nuxt-link to="/main/store/AddStore" class="main-color">
        新增店面
      </nuxt-link>
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
            <p>
              <v-icon>mdi-calendar-month</v-icon>
              <span>{{ store.time }}</span>
            </p>
            <p>
              <v-icon>mdi-bell</v-icon>
              <span v-if="store.lineNotification">已啟用 Line 群組通知</span>
              <span v-else>未啟用 Line 群組通知</span>
            </p>
            <p>
              <v-icon>mdi-bell</v-icon>
              <span>{{ store.time }}</span>
            </p>
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
          time: '每週二公休',
          lineNotification: true,
        },
        {
          id: 'iked9',
          storeName: '公館店',
          time: '每週二公休',
          lineNotification: false,
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
