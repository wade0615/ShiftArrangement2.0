<template>
  <div id="store-setting">
    <v-expansion-panels focusable popout
      class="mb-5">
      <v-expansion-panel
        v-for="(store,index) in stores"
        :key="'store'+index+1"
      >
        <v-expansion-panel-header>{{ store.storeName }}</v-expansion-panel-header>
        <v-expansion-panel-content class="pt-2">
          <!--  刪除店家按鈕 -->
          <ConfirmDel @confirmDialog="delStore(index)" />

          <Calendar
            v-for="(shiftTable,index) in store.shiftTable"
            :key="'shiftTable'+index+1"
            :shiftTable="shiftTable"
            class="pt-3"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- 新增店家按鈕 -->
    <DialogNewStore :active="canAddNewStore" @confirmDialog="addStore" />
  </div>
</template>

<script>
import mockStores from '@/mock/stores.json';
import mockNewStore from '@/mock/newStore.json';

export default {
  name: 'storeSetting',
  data: () => ({
    stores: [],
  }),
  methods: {
    // 獲取今天是今年中的第幾週
    getWeek() {
      const curDate = new Date();
      const date = new Date();
      // 設置本年的第一天
      date.setMonth(0);
      date.setDate(1);
      const dateGap = curDate.getTime() - date.getTime();
      // const day = Math.ceil(dateGap / (24 * 60 * 60 * 1000));
      // 輸出天數， Math.ceil()向上取整
      // 一年中的第一週為 第 0 週
      const week = Math.ceil(dateGap / (7 * 24 * 60 * 60 * 1000));
      return week;
    },
    getMonday(curDate) {
      curDate.setDate(curDate.getDate() - (curDate.getDay() - 1));
      // curDate.setDate(curDate.getDate() + 7);
      return curDate.toLocaleDateString('en-GB', {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      });
    },
    getSunday(curDate) {
      curDate.setDate(curDate.getDate() - (curDate.getDay() - 7));
      return curDate.toLocaleDateString('en-GB', {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      });
    },
    // 取得下一個奇數週的 String
    getWeekDate(week) {
      if (week % 2 === 0) {
        // 偶數週
        const curDate = new Date();
        curDate.setDate(curDate.getDate() + 7);
        const thisMon = this.getMonday(curDate);
        const thisSun = this.getSunday(curDate);
        return `第 ${week} 週, ${thisMon} - ${thisSun}`;
      }
      // 奇數週
      const curDate = new Date();
      curDate.setDate(curDate.getDate() + 14);
      const thisMon = this.getMonday(curDate);
      const thisSun = this.getSunday(curDate);
      return `第 ${week} 週, ${thisMon} - ${thisSun}`;
    },
    setWeekDate() {
      const week = this.getWeek();
      this.stores.forEach((store, index) => {
        const curStore = store;
        curStore.shiftTable[0].week = this.getWeekDate(week);
        curStore.shiftTable[1].week = this.getWeekDate(week + 1);
        this.stores[index] = curStore;
      });
    },
    addStore(value) {
      const newStore = JSON.parse(JSON.stringify(mockNewStore));
      newStore.storeName = value;
      this.stores.push(newStore);
    },
    delStore(index) {
      const stores = this.stores.map((e) => e);
      stores.splice(index, 1);
      this.stores = stores;
    },
  },
  computed: {
    canAddNewStore() {
      return Boolean(this.stores.length > 5);
    },
  },
  mounted() {
    this.stores = mockStores;

    this.setWeekDate();
  },
};
</script>

<style lang="sass" scoped>
#store-setting
  position: relative
</style>
