<template>
  <div id="add-store-shift" class="p-8">
    <ValidationObserver
      v-slot="{}"
      ref="addStore"
      tag="form"
      @submit.prevent="submit()"
    >
      <ValidationProvider ref="shiftName" :rules="rules.shiftName">
        <p class="mb-2">班別名稱*</p>
        <StyledInput
          v-model="validationForm.shiftName"
          placeholder="請輸入店面名稱"
          cssclass="mb-2"
          required
        />
        <p class="mb-2">班別時段*</p>
        <StyledInput v-model="validationForm.startTime" type="timePicker" />
      </ValidationProvider>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'AddStoreShift',
  layout: 'default',
  props: [],
  data: () => {
    return {
      validationForm: {
        shiftName: '',
        startTime: '',
      },
      rules: {
        shiftName: 'required|max:30',
      },
    }
  },
  computed: {},
  watch: {
    validationForm: {
      handler(val) {
        this.$emit('onchange', val)
      },
      deep: true,
    },
  },
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
#add-store-shift
  position: relative
</style>
