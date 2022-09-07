<template>
  <div id="styled-dialog">
    <v-dialog :value="value" width="500" @click:outside="handleDialog()">
      <v-card>
        <v-card-title> Dialog </v-card-title>
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
#styled-dialog
  position: relative
</style>
