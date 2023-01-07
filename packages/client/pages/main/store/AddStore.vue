<template>
  <main id="add-store" class="px-4 py-8" data-app>
    <ValidationObserver
      v-slot="{ invalid }"
      ref="addStore"
      tag="form"
      @submit.prevent="submit()"
    >
      <h2 class="mb-8 text-center">新增店面資訊</h2>
      <!-- 第一步 -->
      <section v-if="pageOne">
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
      </section>
      <!-- 第二步 -->
      <section v-else>
        <v-card elevation="2" class="p-3 mb-8">
          <p class="mb-2">設定店面班別</p>
          <v-tabs v-model="tab" fixed-tabs>
            <v-tabs-slider color="#46B964"></v-tabs-slider>
            <v-tab v-for="weekDay in weekDayOptions" :key="weekDay.value">
              {{ weekDay.label }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(weekDay, weekDayIndex) in validationForm.weekDayShifts"
              :key="'weekDayShifts' + weekDayIndex"
            >
              <v-card flat>
                <div
                  v-if="validationForm.publicHoliday.includes(weekDayIndex)"
                  class="py-2.5 text-center"
                >
                  您已將本日設為公休日
                </div>
                <div
                  v-if="
                    weekDay?.length === 0 &&
                    !validationForm.publicHoliday.includes(weekDayIndex)
                  "
                  class="py-2.5 text-center"
                >
                  <v-card-text class="bg-light-gray" @click="addShift()">
                    您尚未添加任何班別
                  </v-card-text>
                  <StyledBtn
                    text="新增班別"
                    text-color="#46B964"
                    bg-color="#fff"
                    min-width="160"
                    type="button"
                    elevation="0"
                    @click="addShift()"
                  ></StyledBtn>
                </div>
                <div v-if="weekDay?.length !== 0">
                  <v-card-text class="bg-light-gray">
                    <div
                      v-for="(shifts, shiftsIndex) in weekDay"
                      :key="'shifts' + shiftsIndex"
                    >
                      {{ shifts.shiftName }}
                    </div>
                  </v-card-text>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
        <StyledBtn
          text="建立完成"
          text-color="#fff"
          bg-color="#46B964"
          min-width="160"
          type="submit"
          elevation="0"
        ></StyledBtn>
        <StyledDialog
          :value="activeDialog"
          title="新增班別"
          confirm-text="新增"
          :hide-default-btn="true"
        >
          <AddStoreShift @onSubmit="addNewShift" />
        </StyledDialog>
      </section>
    </ValidationObserver>
  </main>
</template>

<script>
import AddStoreShift from '@/pages/main/store/AddStoreShift'

export default {
  name: 'AddStore',
  components: { AddStoreShift },
  layout: 'main',
  props: [],
  data: () => {
    return {
      validationForm: {
        storeName: '',
        publicHoliday: [],
        separateFrontAndBack: 'false',
        weekDayShifts: [[], [], [], [], [], [], []],
      },
      rules: {
        storeName: 'required|max:30',
        publicHoliday: 'required',
        separateFrontAndBack: 'required',
      },
      dayOptions: [
        {
          label: '無',
          value: 'none',
        },
        {
          label: '星期一',
          value: 0,
        },
        {
          label: '星期二',
          value: 1,
        },
        {
          label: '星期三',
          value: 2,
        },
        {
          label: '星期四',
          value: 3,
        },
        {
          label: '星期五',
          value: 4,
        },
        {
          label: '星期六',
          value: 5,
        },
        {
          label: '星期日',
          value: 6,
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
      weekDayOptions: [
        { label: '一', value: 0 },
        { label: '二', value: 1 },
        { label: '三', value: 2 },
        { label: '四', value: 3 },
        { label: '五', value: 4 },
        { label: '六', value: 5 },
        { label: '日', value: 6 },
      ],
      pageOne: true,
      tab: null,
      activeDialog: false,
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
        this.pageOne = false
      }
    },
    addShift() {
      this.handleDialog()
    },
    handleDialog() {
      this.activeDialog = !this.activeDialog
    },
    addNewShift(values) {
      this.activeDialog = !this.activeDialog
      console.log('addNewShift', this.tab, values)
      // TODO 推進外面的 form 裡
      this.validationForm.weekDayShifts[this.tab].push(values)
      console.log(this.validationForm)
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
  .v-tab
    min-width: 40px
    padding: 0 0.25rem
</style>
