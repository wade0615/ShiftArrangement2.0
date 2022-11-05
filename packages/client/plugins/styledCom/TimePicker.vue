<template>
  <v-dialog ref="dialog" v-model="modal" persistent width="290px">
    <!-- :return-value.sync="time" -->
    <template #activator="{ attrs, on }">
      <v-text-field
        :time="time"
        :placeholder="placeholder"
        :required="required"
        label="Picker in dialog"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        outlined
        background-color="#FFF"
        dense
        :hint="hint"
        persistent-hint
        v-bind="attrs"
        v-on="on"
        @input="handleInput"
      ></v-text-field>
    </template>
    <v-time-picker v-if="modal" :time="time" full-width @input="handleInput">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(time)"> OK </v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
export default {
  name: 'TimePicker',
  layout: 'default',
  props: {
    time: {
      type: [String, Number, Array],
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '在這裡輸入內容',
    },
    hint: {
      type: String,
      default: '',
    },
  },
  data: () => {
    return {
      modal: false,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="sass" scoped></style>
