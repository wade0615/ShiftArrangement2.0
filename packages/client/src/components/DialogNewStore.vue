<template>
  <div class="dialog-new-store text-center">
    <v-btn fab
      class="d-block ma-0 ml-auto mr-auto"
      :disabled="active"
      @click.stop="addStore()">
      <v-icon large>
        mdi-plus-circle-outline
      </v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="900"
    >
      <v-card>
        <v-card-title>
          新增分店
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="店名"
            :rules="rules"
            v-model="value"
            autofocus
            hide-details="auto"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!canAddNewStore()"
            text
            @click="confirmDialog()"
          >
            新增
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialogNewStore',
  props: ['active'],
  data: () => ({
    dialog: false,
    value: '',
    rules: [
      (value) => !!value || '店名是必須的',
      (value) => (value && value.length >= 2) || '最少兩個字',
    ],
  }),
  methods: {
    addStore() {
      this.dialog = true;
    },
    confirmDialog() {
      this.$emit('confirmDialog', this.value);
      this.dialog = false;
      this.value = '';
    },
    canAddNewStore() {
      return Boolean(this.value && this.value.split('').length >= 2);
    },
  },
};
</script>

<style lang="sass" scoped>
.dialog-new-store
  position: relative
</style>
