<template>
  <div class="select-working-day">
    <v-switch
      v-model="selectedAll"
      @change="selectedAlll"
      label="全選"
    ></v-switch>
    第一週
    <v-row>
      <v-col cols="auto"
        v-for="(workingStatus, index) in staff.workingDay.weekOne"
        :key="index+'check1'">
        {{ weekOne[index] }}
        <v-checkbox
          v-model="staff.workingDay.weekOne[index]"
          class="mt-0"
        ></v-checkbox>
      </v-col>
    </v-row>
    <hr class="mb-2">
    第二週
    <v-row>
      <v-col cols="auto"
        v-for="(workingStatus, index) in staff.workingDay.weekTwo"
        :key="index+'check2'">
        {{ weekTwo[index] }}
        <v-checkbox
          v-model="staff.workingDay.weekTwo[index]"
          class="mt-0"
        ></v-checkbox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'selectWorkingDay',
  props: ['staff'],
  watch: {
  },
  data: () => ({
    selectedAll: false,
    weekOne: ['07/26', '07/27', '07/28', '07/29', '07/30', '07/31', '08/01'],
    weekTwo: ['08/02', '08/03', '08/04', '08/05', '08/06', '08/07', '08/08'],
  }),
  computed: {
  },
  methods: {
    selectedAlll(value) {
      this.staff.workingDay.weekOne = this.staff.workingDay.weekOne.map(() => value);
      this.staff.workingDay.weekTwo = this.staff.workingDay.weekTwo.map(() => value);
    },
  },
  created() {
  },
};
</script>

<style lang="sass" scoped>
.select-working-day
  position: relative
</style>
