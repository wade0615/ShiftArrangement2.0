<template>
  <div id="store-detail">
    <header class="flex justify-between px-8 py-2.5">
      <nuxt-link to="/main/store/StoreList">
        <v-icon>mdi-chevron-left</v-icon>
      </nuxt-link>
      <h2>{{ header }}</h2>
      <v-icon class="icon-transparent">mdi-chevron-left</v-icon>
    </header>
    <main>
      <!-- 基本資訊 -->
      <section id="storeInfo" class="px-4 mb-6">
        <header class="flex justify-between mb-2">
          <h3 class="text-lg font-medium">基本資訊</h3>
          <nuxt-link to="/main/store/edit/StoreInfo" class="main-color">
            編輯
          </nuxt-link>
        </header>
        <div class="p-3 shadow-md rounded-md">
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
      <section id="routineShifts" class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">例行班表</h3>
          <nuxt-link to="/main/store/edit/RoutineShifts" class="main-color">
            新增
          </nuxt-link>
        </header>
        <div v-if="isRoutineShifts" class="p-3 shadow-md">站前店例行班表</div>
        <div v-else class="p-3 shadow-md rounded-md">
          尚未有此店面的例行班表紀錄
        </div>
      </section>
      <!-- Line 群組通知 -->
      <section id="bindToLine" class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">Line 群組通知</h3>
          <nuxt-link to="/main/store/edit/BindToLine" class="main-color">
            綁定
          </nuxt-link>
        </header>
        <div v-if="isBindToLine" class="p-3 shadow-md rounded-md">
          <div class="inline-block mr-2">Line 群組</div>
          <div class="inline-block">薛丁格咖啡店用公事群</div>
        </div>
        <div v-else class="p-3 shadow-md rounded-md text-secondary">
          您目前尚未綁定 Line
          群組，如完成綁定，當您發佈班表時，系統會自動在群組發送通知訊息。
        </div>
      </section>
      <!-- 店面活動 -->
      <section id="storeEvents" class="px-4 mb-6">
        <header class="flex justify-between">
          <h3 class="text-lg font-medium">店面活動</h3>
          <nuxt-link to="/main/store/edit/StoreEvents" class="main-color">
            管理活動
          </nuxt-link>
        </header>
        <div v-if="isStoreEvents">
          <div
            v-for="(_storeEvent, index) in storeEvents"
            :key="index + 'storeEvents'"
            class="mb-4 p-3 shadow-md rounded-md"
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
      <!-- 店面營業時間 -->
      <section id="businessHours" class="px-4 mb-6">
        <header class="flex justify-between mb-4">
          <h3 class="text-lg font-medium">店面營業時間</h3>
          <nuxt-link to="/main/store/edit/BusinessHours" class="main-color">
            編輯
          </nuxt-link>
        </header>
        <div class="p-3 shadow-md rounded-md">
          <div
            v-for="(_businessHours, index) in businessHours"
            :key="index + 'businessHours'"
            class="mb-2"
          >
            <p class="inline-block mr-3">{{ _businessHours.label }}</p>
            <p
              v-if="
                _businessHours.state === storeBusinessHoursStateCode.OpenTime
              "
              class="inline-block"
            >
              {{ _businessHours.value }}
            </p>
            <p
              v-if="
                _businessHours.state ===
                storeBusinessHoursStateCode.PublicHoliday
              "
              class="inline-block text-primary"
            >
              公休日
            </p>
            <p
              v-if="
                _businessHours.state === storeBusinessHoursStateCode.Unfilled
              "
              class="inline-block text-tertiary"
            >
              尚未填寫
            </p>
          </div>
        </div>
      </section>
      <!-- 其他店面資訊 -->
      <section id="moreStoreInfo" class="px-4 mb-6">
        <header class="flex justify-between mb-4">
          <h3 class="text-lg font-medium">其他店面資訊</h3>
          <nuxt-link to="/main/store/edit/MoreStoreInfo" class="main-color">
            編輯
          </nuxt-link>
        </header>
        <div class="p-3 shadow-md rounded-md">
          <v-simple-table dense>
            <thead></thead>
            <tbody>
              <tr>
                <td>店面地址</td>
                <td v-if="moreStoreInfo.address">
                  {{ moreStoreInfo.address }}
                </td>
                <td v-else class="text-tertiary">尚未填寫</td>
              </tr>
              <tr>
                <td>聯絡電話</td>
                <td v-if="moreStoreInfo.phoneNumber">
                  {{ moreStoreInfo.phoneNumber }}
                </td>
                <td v-else class="text-tertiary">尚未填寫</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </section>
      <!-- 刪除店面 -->
      <section id="deleteStore" class="px-4 mb-6">
        <header class="flex justify-between mb-4">
          <h3 class="text-lg font-medium">其他店面資訊</h3>
          <span class="main-color"> 刪除 </span>
        </header>
        <div>
          <p class="text-tertiary">如刪除店面系統將不會留下此店面紀錄</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import StoreEventsStateCode from '@/enum/storeEventsStateCode'
import StoreBusinessHoursStateCode from '@/enum/storeBusinessHoursStateCode'

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
      storeBusinessHoursStateCode: StoreBusinessHoursStateCode,
      businessHours: [
        {
          label: '週一',
          state: StoreBusinessHoursStateCode.OpenTime,
          value: '06:00~18:00',
        },
        {
          label: '週二',
          state: StoreBusinessHoursStateCode.OpenTime,
          value: '06:00~18:00',
        },
        {
          label: '週三',
          state: StoreBusinessHoursStateCode.OpenTime,
          value: '06:00~18:00',
        },
        {
          label: '週四',
          state: StoreBusinessHoursStateCode.OpenTime,
          value: '06:00~18:00',
        },
        {
          label: '週五',
          state: StoreBusinessHoursStateCode.Unfilled,
          value: '尚未填寫',
        },
        {
          label: '週六',
          state: StoreBusinessHoursStateCode.PublicHoliday,
          value: '公休日',
        },
        {
          label: '週日',
          state: StoreBusinessHoursStateCode.PublicHoliday,
          value: '公休日',
        },
      ],
      moreStoreInfo: {
        address: '瓜瓜市哈哈街噗噗一弄',
        phoneNumber: '',
      },
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
      width: 20%
      padding: 0
  td
    border-bottom: none
  #storeInfo
    td:first-child
      color: $textSecondary
  #moreStoreInfo
    td:first-child
      color: $textPrimary
  p
    margin: 0
</style>
