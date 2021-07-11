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
            class="mb-3"
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
  mounted() {
    this.stores = mockStores;
  },
};
</script>

<style lang="sass" scoped>
#store-setting
  position: relative
</style>
