<template>
  <main id="add-store" class="px-4 py-8" data-app>
    <ValidationObserver
      v-slot="{ invalid }"
      ref="addStore"
      tag="form"
      @submit.prevent="submit()"
    >
      <h2>新增店面資訊</h2>
      <ValidationProvider ref="storeName" :rules="rules.storeName">
        <p class="mb-2">店面名稱*</p>
        <StyledInput
          v-model="validationForm.storeName"
          placeholder="請輸入店面名稱"
          cssclass="mb-2"
          required
        />
      </ValidationProvider>
      <ValidationProvider ref="publicHoliday" :rules="rules.publicHoliday">
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
        :rules="rules.separateFrontAndBack"
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
      <div class="text-center mb-8">
        <StyledBtn
          text="下一步"
          large
          text-color="#fff"
          bg-color="#46B964"
          min-width="160"
          type="submit"
          :disabled="invalid"
        ></StyledBtn>
      </div>
    </ValidationObserver>
  </main>
</template>

<script>
export default {
  name: 'AddStore',
  layout: 'main',
  props: [],
  data: () => {
    return {
      validationForm: {
        storeName: '',
        publicHoliday: '',
        separateFrontAndBack: 'false',
      },
      rules: {
        storeName: 'required|max:30',
        publicHoliday: '',
        separateFrontAndBack: '',
      },
      dayOptions: [
        {
          label: '星期一',
          value: 'Mon',
        },
        {
          label: '星期二',
          value: 'Tue',
        },
        {
          label: '星期三',
          value: 'Wed',
        },
      ],
      radioOptions: [
        {
          label: '有',
          value: 'true',
        },
        {
          label: '沒有',
          value: 'false',
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
      const isValid = await this.$refs.addStore.validate()
      if (isValid) {
        console.log('通過驗證', this.validationForm)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
#add-store
  h2
    flex: 0 1 auto
    font-weight: 500
    font-size: 1.25rem
    line-height: 1.5
</style>
