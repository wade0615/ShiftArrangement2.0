<template>
  <div class="dialog-time-picker mb-1 text-center">
    <v-dialog
      v-model="dialog"
      max-width="1200"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="light-blue lighten-5"
          depressed
          v-bind="attrs"
          v-on="on"
        >
          <div class="d-flex flex-column">
            <div class="d-flex align-center">
              <v-icon small>mdi-account-multiple</v-icon>
              <span class="mr-2">{{ manpower }}</span>
            </div>
            <div class="d-flex align-center">
              <v-icon small>mdi-clock-outline</v-icon>
              <span>{{ startTime }}~{{ endTime }}</span>
            </div>
          </div>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>
        <v-card-text class="pa-4">
          <div class="slider">
            <v-slider
              v-model="manpower"
              step="1"
              max="5"
              thumb-label
              ticks
              prepend-icon="mdi-account-multiple"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="manpower"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </div>
          <TimePicker
            :startTime="startTime"
            :endTime="endTime"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['scheduleConfig'],
  watch: {
    scheduleConfig() {
      console.log('scheduleConfig', this.scheduleConfig);
      this.setSchedule(this.scheduleConfig);
    },
  },
  data() {
    return {
      name: 'dialogTimePicker',
      dialog: false,
      manpower: 0,
      startTime: undefined,
      endTime: undefined,
    };
  },
  methods: {
    setSchedule(scheduleConfig) {
      this.manpower = scheduleConfig.manpower;
      this.startTime = scheduleConfig.startTime;
      this.endTime = scheduleConfig.endTime;
    },
  },
  mounted() {
    this.setSchedule(this.scheduleConfig);
  },
};
</script>

<style lang="sass" scoped>
.dialog-time-picker
  position: relative
.slider
  max-width: 600px
  margin: 0 auto
  padding: 12px 0
</style>
