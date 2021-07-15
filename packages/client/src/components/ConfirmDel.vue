<template>
  <div class="confirm-del text-center">
    <v-btn x-small dark
      class="d-block ma-0 ml-auto"
      color="red"
      @click.stop="dialog = true"
    >
      <v-icon small>
        mdi-trash-can-outline
      </v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="900"
    >
      <v-card>
        <v-card-title>
          你確定要刪除這家店嗎？
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="confirmDialog()"
          >
            刪除
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDel',
  data: () => ({
    dialog: false,
  }),
  methods: {
    confirmDialog() {
      this.$emit('confirmDialog');
      this.dialog = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.confirm-del
  position: relative
</style>
