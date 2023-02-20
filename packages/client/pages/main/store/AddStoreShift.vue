<template>
  <div id="add-store-shift" class="p-4">
    <ValidationObserver
      v-slot="{}"
      ref="addstoreShift"
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
        <p v-if="storeInfo.separateFrontAndBack" class="mb-2">班別配置*</p>
        <StyledInput
          v-if="storeInfo.separateFrontAndBack"
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
          text-color="#fff"
          bg-color="#46B964"
          min-width="160"
          type="submit"
          elevation="0"
          >新增</StyledBtn
        >
      </ValidationProvider>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'AddStoreShift',
  layout: 'default',
  props: {
    storeInfo: {
      type: Object,
      default: () => {
        return {
          storeName: '',
          publicHoliday: [],
          separateFrontAndBack: false,
          weekDayShifts: [],
        }
      },
    },
    currentDay: {
      type: Number,
      default: 0,
    },
  },
  data: () => {
    return {
      validationForm: {
        shiftName: '',
        startTime: null,
        endTime: null,
        configuration: [],
        copyShift: [],
      },
      rules: {
        shiftName: 'required|max:30',
        startTime: 'required',
        endTime: 'required',
      },
      checkboxOptions: [
        {
          label: '外場',
          value: 'front',
        },
        {
          label: '內場',
          value: 'back',
        },
      ],
      copyShiftOptions: [
        {
          label: '週一',
          value: 0,
        },
        {
          label: '週二',
          value: 1,
        },
        {
          label: '週三',
          value: 2,
        },
        {
          label: '週四',
          value: 3,
        },
        {
          label: '週五',
          value: 4,
        },
        {
          label: '週六',
          value: 5,
        },
        {
          label: '週日',
          value: 6,
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
  beforeMount() {
    this.setCopyShiftOptions()
  },
  updated() {},
  methods: {
    async submit() {
      /** 取得驗證是否通過，通過為 true */
      const isValid = await this.$refs.addstoreShift.validate()
      if (isValid) {
        this.$emit('onSubmit', this.validationForm)
        // window.requestAnimationFrame(() => {
        //   this.$refs.addStore.reset()
        //   console.log('close')
        // })
      }
    },
    setCopyShiftOptions() {
      console.log('setCopyShiftOptions', this.storeInfo.publicHoliday)
      const copyShiftOptions = JSON.parse(JSON.stringify(this.copyShiftOptions))
      const currentCopyDays = copyShiftOptions.filter(
        (option, index) =>
          !this.storeInfo.publicHoliday.includes(index) &&
          index !== this.currentDay
      )
      this.copyShiftOptions = currentCopyDays
    },
  },
}
</script>

<style lang="sass" scoped>
#add-store-shift
  position: relative
</style>
