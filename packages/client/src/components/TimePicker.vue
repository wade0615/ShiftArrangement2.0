<template>
  <div>
    <v-row
      justify="space-around"
      align="center"
    >
      <v-col style="width: 350px; flex: 0 1 auto;">
        <h2>Start: {{ start }}</h2>
        <v-time-picker
          v-model="start"
          :max="end"
          format="24hr"
          ampm-in-title
        ></v-time-picker>
      </v-col>
      <v-col style="width: 350px; flex: 0 1 auto;">
        <h2>End: {{ end }}</h2>
        <v-time-picker
          v-model="end"
          :min="start"
          format="24hr"
          ampm-in-title
        ></v-time-picker>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'timePicker',
  props: ['startTime', 'endTime'],
  data() {
    return {
      start: null,
      end: null,
    };
  },
  methods: {
    setTime(startTime, endTime) {
      this.start = startTime;
      this.end = endTime;
    },
  },
  mounted() {
    this.setTime(this.startTime, this.endTime);
  },
};
</script>
