<template>
  <div id="store-info">
    <header class="flex justify-between px-8 py-2.5">
      <nuxt-link to="/main/store/StoreDetail">
        <v-icon>mdi-chevron-left</v-icon>
      </nuxt-link>
      <h2>{{ header }}</h2>
      <v-icon class="icon-transparent">mdi-chevron-left</v-icon>
    </header>
    <main class="px-4 py-6">
      <ValidationObserver
        v-slot="{ invalid }"
        ref="authCode"
        tag="form"
        @submit.prevent="submit()"
      >
        <ValidationProvider ref="storeName" :rules="validationRules.storeName">
          <p class="mb-2">店面名稱*</p>
          <StyledInput
            v-model="validationForm.storeName"
            placeholder=""
            cssclass="mb-2"
            required
          />
        </ValidationProvider>
        <ValidationProvider
          ref="publicHoliday"
          :rules="validationRules.publicHoliday"
        >
          <p class="mb-2">店面公休日*</p>
          <StyledInput
            v-model="validationForm.publicHoliday"
            type="chipsSelect"
            placeholder="請輸入店面公休日"
            :select-options="dayOptions"
            cssclass="mb-2"
            required
          />
        </ValidationProvider>
        <ValidationProvider
          ref="separateFrontAndBack"
          :rules="validationRules.separateFrontAndBack"
        >
          <section class="flex justify-between items-center">
            <p class="mb-2">店內有無分內外場*</p>
            <StyledInput
              v-model="validationForm.separateFrontAndBack"
              type="radio"
              :radio-options="radioOptions"
              radio-direction="row"
              cssclass="mb-2"
              required
            />
          </section>
        </ValidationProvider>
        <div class="flex justify-between gap-4 mb-8 btn-wrapper">
          <StyledBtn
            bg-color="mainColor"
            outlined
            elevation="0"
            min-width="100%"
            border-radius="0.625rem"
            to="/main/store/StoreDetail"
            >取消編輯</StyledBtn
          >
          <StyledBtn
            text-color="white"
            bg-color="mainColor"
            min-width="100%"
            border-radius="0.625rem"
            type="submit"
            :disabled="invalid"
            >儲存編輯</StyledBtn
          >
        </div>
      </ValidationObserver>
    </main>
  </div>
</template>

<script>
export default {
  name: 'StoreInfo',
  layout: 'main',
  props: [],
  data: () => {
    return {
      header: '編輯店面資訊',
      validationForm: {
        storeName: '',
        publicHoliday: '',
        separateFrontAndBack: false,
      },
      validationRules: {
        storeName: 'required',
        publicHoliday: 'required',
        separateFrontAndBack: 'required',
      },
      dayOptions: [
        {
          label: '無',
          value: 'none',
          disabled: false,
        },
        {
          label: '星期一',
          value: 0,
          disabled: false,
        },
        {
          label: '星期二',
          value: 1,
          disabled: false,
        },
        {
          label: '星期三',
          value: 2,
          disabled: false,
        },
        {
          label: '星期四',
          value: 3,
          disabled: false,
        },
        {
          label: '星期五',
          value: 4,
          disabled: false,
        },
        {
          label: '星期六',
          value: 5,
          disabled: false,
        },
        {
          label: '星期日',
          value: 6,
          disabled: false,
        },
      ],
      radioOptions: [
        {
          label: '有',
          value: true,
        },
        {
          label: '沒有',
          value: false,
        },
      ],
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {
    async submit() {
      /** 取得驗證是否通過，通過為 true */
      const isValid = await this.$refs.authCode.validate()
      if (isValid) {
        // this.$emit('handle _otp', this.validationForm)
        console.log('通過啦')
      }
    },
  },
}
</script>

<style lang="sass" scoped>
#store-info
  .icon-transparent
    color: transparent
  .btn-wrapper
    > div
      flex: 1 0 auto
</style>
