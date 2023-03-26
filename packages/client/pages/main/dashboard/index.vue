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
          <h3>{{ dashboardInfo.userName }}</h3>
          <p>{{ dashboardInfo.storeName }}</p>
        </div>
      </div>
      <div class="w-1/3 bg-white rounded px-3 py-2 flex gap-2 items-center">
        <div class="text-center">
          <v-icon class="main-color">mdi-storefront-outline</v-icon>
          <p>店面數</p>
        </div>
        <div class="grow text-center">{{ dashboardInfo.storeNum }}</div>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="mb-4">店面即時狀態</h2>
      <p class="mb-3">正在執行班表：目前無執行中班表</p>
      <v-tabs v-model="tab" fixed-tabs>
        <v-tabs-slider class="main-color"></v-tabs-slider>
        <v-tab v-for="item in tabItems" :key="item.value" class="bg-light-gray">
          {{ item.label }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="bg-light-gray">
        <v-tab-item v-for="item in tabItems" :key="item.value">
          <div v-if="item.value === 'pending'" flat class="py-6">
            <div
              v-if="dashboardInfo.situationPending.length > 0"
              class="flex flex-col gap-2"
            >
              <v-card
                v-for="(
                  situationPending, index
                ) in dashboardInfo.situationPending"
                :key="'situationPending' + index"
                class="p-2 flex items-center situation"
              >
                <v-icon class="main-color">mdi-bell</v-icon>
                <span class="mr-2">
                  {{ situationPending.storeName }}
                </span>
                <span class="mr-2">
                  {{ situationPending.event }}
                </span>
                <span>
                  {{ situationPending.content }}
                </span>
              </v-card>
            </div>
            <v-card v-else class="p-2">
              <p class="flex items-center justify-center">目前無任何狀況發生</p>
            </v-card>
          </div>
          <div v-if="item.value === 'onGoing'" flat class="py-6">
            <div
              v-if="dashboardInfo.situationOngoing.length > 0"
              class="flex flex-col gap-2"
            >
              <v-card
                v-for="(
                  situationOngoing, index
                ) in dashboardInfo.situationOngoing"
                :key="'situationOngoing' + index"
                class="p-2 flex items-center situation"
              >
                <v-icon class="main-color">mdi-bell</v-icon>
                <span class="mr-2">
                  {{ situationOngoing.storeName }}
                </span>
                <span>
                  {{ situationOngoing.content }}
                </span>
              </v-card>
            </div>
            <v-card v-else class="p-2">
              <p class="flex items-center justify-center">目前無任何狀況發生</p>
            </v-card>
          </div>
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
      <main
        class="flex justify-between items-center shadow-lg bg-white rounded-md"
      >
        <div class="grow px-3 py-4 text-center">
          <span>{{ dashboardInfo.shiftsWaitForConfirm }}</span>
          <p>待確認</p>
        </div>
        <div class="grow px-3 py-4 text-center">
          <span>{{ dashboardInfo.shiftsWaitForSchedule }}</span>
          <p>待排班</p>
        </div>
        <div class="grow px-3 py-4 text-center">
          <span>{{ dashboardInfo.drafts }}</span>
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
      dashboardInfo: {
        userName: 'Wade',
        storeName: '薛丁格咖啡',
        storeNum: 2,
        situationPending: [
          {
            storeName: '站前店',
            event: '換班申請',
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam illo modi voluptatibus corporis iure earum in. Assumenda, dolores iste!',
          },
          {
            storeName: '板橋店',
            event: '換班申請',
            content:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quibusdam illo modi voluptatibus corporis iure earum in. Assumenda, dolores iste!',
          },
        ],
        situationOngoing: [
          {
            storeName: '雙和店',
            content: '一切正常',
          },
          {
            storeName: '新店店',
            content: '一切正常',
          },
        ],
        shiftsWaitForConfirm: 0,
        shiftsWaitForSchedule: 2,
        drafts: 1,
      },
      tab: null,
      tabItems: [
        {
          label: '待解決',
          value: 'pending',
        },
        {
          label: '如期進行',
          value: 'onGoing',
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
#dashboard
  height: calc( 100vh - 56px )
  h2
    font-weight: 500
    font-size: 1.25rem
    color: $textPrimary
  .situation
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
</style>
