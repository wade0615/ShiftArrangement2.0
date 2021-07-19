<template>
  <div id="staff-setting" class="">
    <Table :staffsData="staffs" />
  </div>
</template>

<script>
import mockStaffs from '@/mock/staffs.json';

export default {
  name: 'StaffSetting',
  watch: {
  },
  data: () => ({
    staffs: [],
  }),
  computed: {
  },
  methods: {
  },
  created() {
    this.staffs = mockStaffs;
  },
};
</script>

<style lang="sass" scoped>
#staff-setting
  position: relative
</style>
