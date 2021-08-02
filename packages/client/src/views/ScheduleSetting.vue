<template>
  <div id="schedule-setting" class="">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(staff,i) in staffs"
        :key="i"
      >
        <v-expansion-panel-header disable-icon-rotate>
          {{ staff.name }}
          <template v-slot:actions>
            <v-icon color="teal" v-if="staff.jobTitle === 'PT'">
              mdi-check
            </v-icon>
            <v-icon color="error" v-else>
              mdi-alert-circle
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <SelectWorkingDay :staff="staff" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import mockStaffs from '@/mock/staffs.json';

export default {
  name: 'ScheduleSetting',
  data: () => ({
    staffs: [],
  }),
  methods: {
  },
  mounted() {
    this.staffs = JSON.parse(JSON.stringify(mockStaffs));
  },
  beforeMount() {
  },
};
</script>

<style lang="sass" scoped>
#schedule-setting
  position: relative
</style>
