<template>
  <div id="add-store-shift" class="p-4">
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
          placeholder="請輸入班別名稱"
          cssclass="mb-2"
          required
        />
        <p class="mb-2">班別時段*</p>
        <div class="flex gap-4">
          <StyledInput
            v-model="validationForm.startTime"
            type="timePicker"
            placeholder="開始時間"
          />
          <StyledInput
            v-model="validationForm.endTime"
            type="timePicker"
            placeholder="結束時間"
          />
        </div>
        <p class="mb-2">班別配置*</p>
        <StyledInput
          v-model="validationForm.configuration"
          type="checkbox"
          :checkbox-options="checkboxOptions"
        />
        <p class="mb-2">複製此班別至其他工作日</p>
        <StyledInput
          v-model="validationForm.copyShift"
          type="checkbox"
          :checkbox-options="copyShiftOptions"
        />
        <StyledBtn
          text="新增"
          text-color="#fff"
          bg-color="#46B964"
          min-width="160"
          type="submit"
          elevation="0"
        ></StyledBtn>
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
        endTime: '',
        configuration: [],
        copyShift: [],
      },
      rules: {
        shiftName: 'required|max:30',
      },
      checkboxOptions: [
        {
          label: '早班',
          value: 'morning',
        },
        {
          label: '晚班',
          value: 'afternoon',
        },
      ],
      copyShiftOptions: [
        {
          label: '週二',
          value: 'tue',
        },
        {
          label: '週三',
          value: 'wed',
        },
      ],
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
  methods: {
    async submit() {
      /** 取得驗證是否通過，通過為 true */
      const isValid = await this.$refs.addStore.validate()
      if (isValid) {
        this.$emit('onSubmit', this.validationForm)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
#add-store-shift
  position: relative
</style>
