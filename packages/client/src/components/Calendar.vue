<template>
  <div class="calendar">
    第 {{ week }} 週
    <v-row no-gutters>
      <v-col
        v-for="(daySchedule, index) in schedule" :key="'daySchedule'+index+1"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{ weekdateText(index+1) }}
        </v-card>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <!-- 班別 -->
          <DialogTimePicker
            v-for="(scheduleConfig, index) in daySchedule" :key="'scheduleConfig'+index+1"
            :scheduleConfig="scheduleConfig"
          />
          <!-- 增減一個班別 -->
          <div class="text-center" style="min-width: 140px; margin: 0 auto;">
            <v-btn x-small
              :disabled="daySchedule.length < 1"
              @click="removeSchedule(index)">
              <v-icon small>
                mdi-minus-circle-outline
              </v-icon>
            </v-btn>
            <v-btn x-small
              :disabled="daySchedule.length > 6"
              @click="addSchedule(index)">
              <v-icon small>
                mdi-plus-circle-outline
              </v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'calendar',
  props: ['shiftTable'],
  data: () => ({
    week: 0,
    dialog: false,
    schedule: [],
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
    weekdateText(weekdate) {
      let weekText = '';
      switch (weekdate) {
        case 1:
          weekText = 'Mon';
          break;
        case 2:
          weekText = 'Tue';
          break;
        case 3:
          weekText = 'Wed';
          break;
        case 4:
          weekText = 'Thu';
          break;
        case 5:
          weekText = 'Fri';
          break;
        case 6:
          weekText = 'Sat';
          break;
        case 7:
          weekText = 'Sun';
          break;
        default:
          console.log('err');
      }
      return weekText;
    },
    // 刪去一個班別
    removeSchedule(weekDay) {
      const schedule = this.schedule[weekDay];
      schedule.pop();
      this.schedule[weekDay] = schedule;
    },
    // 添加一個班別
    addSchedule(weekDay) {
      const schedule = this.schedule[weekDay];
      schedule.push({
        manpower: '3',
        startTime: '09:00',
        endTime: '16:00',
      });
      this.schedule[weekDay] = schedule;
    },
  },
  mounted() {
    // this.week = this.getWeek();
    this.week = this.shiftTable.week;
    this.schedule = this.shiftTable.schedule;
  },
};
</script>

<style lang="sass" scoped>
.calendar
  position: relative
</style>
