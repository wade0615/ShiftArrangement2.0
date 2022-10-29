<template>
  <div id="styled-dialog">
    <v-dialog
      :value="value"
      width="500"
      content-class="styled-dialog"
      @click:outside="handleDialog()"
    >
      <v-card>
        <v-card-title class="diolog-title">
          <v-btn icon></v-btn>
          {{ title }}
          <v-btn icon @click="handleDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn></v-card-title
        >
        <v-card-text v-if="text" class="text-center">
          {{ text }}
        </v-card-text>
        <slot v-else></slot>
        <v-card-actions class="justify-center gap-4">
          <v-btn
            v-if="isCancelBtn"
            outlined
            class="cancel-btn"
            @click="handleDialog()"
            >{{ cancelText }}
          </v-btn>
          <v-btn class="confirm-btn" @click="handleDialog()"
            >{{ confirmText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'StyledDialog',
  layout: 'default',
  props: {
    value: {
      type: [Boolean],
      default: false,
    },
    title: {
      type: [String],
      default: 'title',
    },
    text: {
      type: [String],
      default: '',
    },
    isCancelBtn: {
      type: [Boolean],
      default: false,
    },
    confirmText: {
      type: [String],
      default: '好',
    },
    cancelText: {
      type: [String],
      default: '取消',
    },
  },
  data: () => {
    return {
      handleDialog() {
        this.$emit('handleDialog', false)
      },
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
#styled-dialog::v-deep
  position: relative
.styled-dialog
  .diolog-title
    justify-content: space-between
  .v-card
    .v-card__text
      color: $textPrimary
      font-weight: 400
      font-size: 1rem
      line-height: 1.5
    .v-card__actions
      padding-bottom: 2rem
      button.cancel-btn
        padding: 0.5rem
        min-width: 160px
        color: $mainColor
        background-color: $white
      button.confirm-btn
        padding: 0.5rem
        min-width: 160px
        background-color: $mainColor
        color: $white
</style>
