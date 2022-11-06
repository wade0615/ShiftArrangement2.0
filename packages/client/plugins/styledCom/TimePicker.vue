<template>
  <v-dialog ref="time-picker-dialog" v-model="modal" persistent width="290px">
    <!-- :return-value.sync="time" -->
    <template #activator="{ attrs, on }">
      <v-text-field
        :value="time"
        :placeholder="placeholder"
        :required="required"
        label=""
        append-icon="mdi-clock-time-four-outline"
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
    <v-time-picker
      v-if="modal"
      :value="time"
      full-width
      format="24hr"
      @input="handleInput"
    >
      <v-spacer></v-spacer>
      <v-btn text @click="modal = false"> 取消 </v-btn>
      <v-btn text @click="$refs.time - picker - dialog.save(time)">
        確定
      </v-btn>
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
