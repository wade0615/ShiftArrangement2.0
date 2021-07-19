<template>
  <div id="staff-setting" class="">
    <Table :staffsData="staffs" :stores="storesName" />
  </div>
</template>

<script>
import mockStaffs from '@/mock/staffs.json';
import mockStores from '@/mock/stores.json';

export default {
  name: 'StaffSetting',
  watch: {
  },
  data: () => ({
    staffs: [],
    storesName: [],
  }),
  computed: {
  },
  methods: {
  },
  created() {
    const storesName = mockStores.map((store) => store.storeName);
    this.storesName = storesName;
    this.staffs = mockStaffs;
  },
};
</script>

<style lang="sass" scoped>
#staff-setting
  position: relative
</style>
