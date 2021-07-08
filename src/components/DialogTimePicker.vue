<template>
  <div class="dialog-time-picker text-center">
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
          <v-icon small>mdi-account-multiple</v-icon>
          <span class="mr-2">3</span>
          <v-icon small>mdi-clock-outline</v-icon>
          <span>09:00~16:00</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>
        <v-card-text>
          <TimePicker />
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
  data() {
    return {
      name: 'dialogTimePicker',
      dialog: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.dialog-time-picker
  position: relative
</style>
