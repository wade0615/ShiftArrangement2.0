<template>
  <div id="store-setting">
    <v-expansion-panels focusable popout>
      <v-expansion-panel
        v-for="(store,index) in stores"
        :key="'store'+index+1"
      >
        <v-expansion-panel-header>{{ store.storeName }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Calendar
            v-for="(shiftTable,index) in store.shiftTable"
            :key="'shiftTable'+index+1"
            :shiftTable="shiftTable"
            class="pt-3"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import mockStores from '@/mock/stores.json';

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
