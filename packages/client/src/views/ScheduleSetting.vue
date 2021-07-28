<template>
  <div id="schedule-setting" class="">
    <v-select
      :items="items"
      item-text="name"
      item-value="name"
      label="Solo field"
      solo
    >
      <!-- <template v-slot:item="{ item }">
        <v-list dense class="pa-0">
          <v-list-item>
            <v-icon small v-if="item.jobTitle === 'FT'">mdi-pencil</v-icon>
            <v-icon small v-if="item.jobTitle === 'PT'">mdi-check</v-icon>
            {{ item.name }}
          </v-list-item>
        </v-list>
      </template> -->
    </v-select>
  </div>
</template>

<script>
import mockStaffs from '@/mock/staffs.json';

export default {
  name: 'ScheduleSetting',
  data: () => ({
    items: mockStaffs,
  }),
  methods: {},
};
</script>

<style lang="sass" scoped>
#schedule-setting
  position: relative
</style>
