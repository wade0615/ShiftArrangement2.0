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
      <!-- 基本資訊 -->
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
                <td>店面名稱</td>
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
      <!-- 例行班表 -->
      <section class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">例行班表</h3>
          <nuxt-link to="/main/store/edit/RoutineShifts" class="main-color">
            新增
          </nuxt-link>
        </header>
        <div v-if="isRoutineShifts" class="p-3 shadow-md">站前店例行班表</div>
        <div v-else class="p-3 shadow-md">尚未有此店面的例行班表紀錄</div>
      </section>
      <!-- Line 群組通知 -->
      <section class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">Line 群組通知</h3>
          <nuxt-link to="/main/store/edit/BindToLine" class="main-color">
            綁定
          </nuxt-link>
        </header>
        <div v-if="isBindToLine" class="p-3 shadow-md">
          <div class="inline-block mr-2">Line 群組</div>
          <div class="inline-block">薛丁格咖啡店用公事群</div>
        </div>
        <div v-else class="p-3 shadow-md text-secondary">
          您目前尚未綁定 Line
          群組，如完成綁定，當您發佈班表時，系統會自動在群組發送通知訊息。
        </div>
      </section>
      <!-- 店面活動 -->
      <section class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">店面活動</h3>
          <nuxt-link to="/main/store/edit/StoreEvents" class="main-color">
            管理活動
          </nuxt-link>
        </header>
        <div v-if="isStoreEvents" class="">
          <div
            v-for="(_storeEvent, index) in storeEvents"
            :key="index + 'storeEvents'"
            class="mb-4 p-3 shadow-md"
          >
            <v-chip
              v-if="_storeEvent.storeEventState === storeEventsStateCode.Closed"
              class="mb-2"
              color="error50"
              text-color="error600"
              label
            >
              期間未營業
            </v-chip>
            <v-chip
              v-if="_storeEvent.storeEventState === storeEventsStateCode.Open"
              class="mb-2"
              color="primary50"
              text-color="primary600"
              label
            >
              營業時間調整
            </v-chip>
            <div>{{ _storeEvent.storeEventTitle }}</div>
            <div>{{ _storeEvent.storeEventDateRange }}</div>
          </div>
        </div>
        <div v-else class="p-3 shadow-md text-secondary">
          尚未有任何店面活動
        </div>
      </section>
    </body>
  </div>
</template>

<script>
import StoreEventsStateCode from '@/enum/storeEventsStateCode'

export default {
  name: 'StoreDetail',
  layout: 'main',
  props: [],
  data: () => {
    return {
      header: '站前店',
      isRoutineShifts: true,
      isBindToLine: false,
      isStoreEvents: true,
      storeEvents: [
        {
          storeEventState: StoreEventsStateCode.Closed,
          storeEventTitle: '員工教育訓練',
          storeEventDateRange: '2022/10/08(五)',
        },
        {
          storeEventState: StoreEventsStateCode.Open,
          storeEventTitle: '春節歡慶活動',
          storeEventDateRange: '2022/01/31(一) - 2022/02/04(五)',
        },
        {
          storeEventState: StoreEventsStateCode.OpenTimeChange,
          storeEventTitle: '付清節活動',
          storeEventDateRange: '2022/08/08(一)',
        },
      ],
      storeEventsStateCode: StoreEventsStateCode,
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
  tr
    td:first-child
      width: 25%
      padding-right: 0
      color: $textSecondary
  td
    border-bottom: none
</style>
