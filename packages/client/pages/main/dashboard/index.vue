<template>
  <main id="dashboard" class="bg-light-gray px-4 py-6">
    <section class="flex gap-2 mb-6">
      <div class="w-2/3 bg-white rounded px-3 py-2 flex items-center">
        <div>
          <v-avatar color="info" size="42">
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
        </div>
        <div>
          <h3>{{ userName }}</h3>
          <p>{{ storeName }}</p>
        </div>
      </div>
      <div class="w-1/3 bg-white rounded px-3 py-2 flex gap-2 items-center">
        <div class="text-center">
          <v-icon class="main-color">mdi-storefront-outline</v-icon>
          <p>店面數</p>
        </div>
        <div class="grow text-center">{{ storeNum }}</div>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="mb-4">店面即時狀態</h2>
      <p class="mb-3">正在執行班表：目前無執行中班表</p>
      <v-tabs v-model="tab" fixed-tabs>
        <v-tabs-slider class="main-color"></v-tabs-slider>
        <v-tab v-for="item in tabItems" :key="item.value">
          {{ item.label }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabItems" :key="item.value">
          <v-card flat class="p-6">{{ item.text }}</v-card>
        </v-tab-item>
      </v-tabs-items>
    </section>
    <section>
      <header class="mb-4 flex justify-between items-center">
        <h2>班表排班</h2>
        <nuxt-link to="/main/store/StoreList" class="main-color">
          前往排班管理
        </nuxt-link>
      </header>
      <main class="flex justify-between items-center shadow-lg bg-white">
        <div class="grow px-3 py-4 text-center">
          <span>{{ shiftsWaitForConfirm }}</span>
          <p>待確認</p>
        </div>
        <div class="grow px-3 py-4 text-center">
          <span>{{ shiftsWaitForSchedule }}</span>
          <p>待排班</p>
        </div>
        <div class="grow px-3 py-4 text-center">
          <span>{{ drafts }}</span>
          <p>草稿</p>
        </div>
      </main>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Dashboard',
  layout: 'main',
  props: [],
  data: () => {
    return {
      userName: 'Wade',
      storeName: '薛丁格咖啡',
      storeNum: 2,
      tab: null,
      tabItems: [
        {
          label: '待解決',
          value: 'pending',
          text: '目前無任何狀況發生',
        },
        {
          label: '如期進行',
          value: 'onGoing',
          text: '出事啦阿伯',
        },
      ],
      shiftsWaitForConfirm: 0,
      shiftsWaitForSchedule: 2,
      drafts: 1,
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
#dashboard
  height: calc( 100vh - 56px )
  h2
    font-weight: 500
    font-size: 1.25rem
    color: $textPrimary
</style>
