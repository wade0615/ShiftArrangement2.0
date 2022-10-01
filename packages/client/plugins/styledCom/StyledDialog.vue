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
        <v-card-text>
          {{ text }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="handleDialog()"> Close </v-btn>
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
      default: 'text',
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
</style>
