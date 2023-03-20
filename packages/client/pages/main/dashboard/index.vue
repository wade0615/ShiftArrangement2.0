<template>
  <main id="dashboard" class="bg-light-gray px-4 py-6">
    <section class="flex gap-2 mb-4">
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
    <section>
      <h2>店面即時狀態</h2>
      <p>正在執行班表：目前無執行中班表</p>
      <v-tabs v-model="tab" fixed-tabs>
        <v-tabs-slider color="#46B964"></v-tabs-slider>
        <v-tab v-for="item in tabItems" :key="item.value">
          {{ item.label }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabItems" :key="item.value">
          <v-card flat>{{ item.text }}</v-card>
        </v-tab-item>
      </v-tabs-items>
    </section>
    <section>
      <h2>班表排班</h2>
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
h2
  font-weight: 500
  font-size: 1.25rem
  color: $textPrimary
</style>
