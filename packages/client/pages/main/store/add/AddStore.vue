<template>
  <main id="add-store" class="px-4 py-8" data-app>
    <ValidationObserver
      v-slot="{ invalid }"
      ref="addStore"
      tag="form"
      @submit.prevent="submit()"
    >
      <header
        v-show="activeAddStoreShift"
        class="flex justify-between py-2.5 mb-8"
      >
        <v-icon @click="handleDialog">mdi-chevron-left</v-icon>
        <h2 class="text-center">新增班別</h2>
        <v-icon class="icon-transparent">mdi-chevron-left</v-icon>
      </header>
      <header v-show="!activeAddStoreShift" class="mb-8 text-center">
        <h2>新增店面資訊</h2>
      </header>
      <!-- 第一步 -->
      <section v-if="pageOne" v-show="!activeAddStoreShift">
        <ValidationProvider ref="storeName" :rules="validationRules.storeName">
          <p class="mb-2">店面名稱*</p>
          <StyledInput
            v-model="validationForm.storeName"
            placeholder="請輸入店面名稱"
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
        <div class="text-center mb-8">
          <StyledBtn
            prepend-icon="mdi-thumb-up"
            large
            text-color="white"
            bg-color="mainColor"
            min-width="160"
            type="submit"
            :disabled="invalid"
          >
            下一步
          </StyledBtn>
        </div>
      </section>
      <!-- 第二步 -->
      <section v-if="!pageOne" v-show="!activeAddStoreShift">
        <v-card elevation="2" class="p-3 mb-8">
          <p class="mb-2">設定店面班別</p>
          <v-tabs v-model="tab" fixed-tabs>
            <v-tabs-slider class="main-color"></v-tabs-slider>
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
                    text-color="white"
                    bg-color="mainColor"
                    min-width="160"
                    type="button"
                    elevation="0"
                    class="mt-4"
                    @click="addShift()"
                  >
                    <v-icon light>mdi-plus</v-icon>新增班別
                  </StyledBtn>
                </div>
                <div v-if="weekDay?.length !== 0">
                  <v-card-text class="bg-light-gray">
                    <div
                      v-for="(shifts, shiftsIndex) in weekDay"
                      :key="'shifts' + shiftsIndex"
                      class="shift-card"
                    >
                      <h6>
                        {{ shifts.shiftName }}
                      </h6>
                      <span>
                        {{ shifts.startTime }} ~ {{ shifts.endTime }}
                      </span>
                      <!-- <span
                        v-if="
                          shifts.configuration.includes(
                            storeConfigurationStateCode.Front
                          )
                        "
                        class="mr-1 px-1.5 py-1 bg-main-color text-white rounded"
                      >
                        外
                      </span>
                      <span
                        v-if="
                          shifts.configuration.includes(
                            storeConfigurationStateCode.Back
                          )
                        "
                        class="px-1.5 py-1 bg-main-color text-white rounded"
                      >
                        內
                      </span> -->
                      <div>
                        <div
                          v-if="shifts.configuration.length === 0"
                          class="configuration-card"
                        >
                          <div class="flex items-center">
                            <div class="flex-1">
                              <span class="mr-2">正職 0 位</span>
                              <span>兼職 0 位</span>
                            </div>
                            <div>
                              <v-icon class="primary-text-500"
                                >mdi-chevron-right</v-icon
                              >
                            </div>
                          </div>
                        </div>
                        <div v-else class="configuration-card">
                          <div
                            v-if="
                              shifts.configuration.includes(
                                storeConfigurationStateCode.Front
                              )
                            "
                            class="flex items-center"
                          >
                            <div class="flex-1">
                              <span
                                class="mr-2 px-1.5 py-1 bg-main-color text-white rounded"
                              >
                                外
                              </span>
                              <span class="mr-2">正職 0 位</span>
                              <span>兼職 0 位</span>
                            </div>
                            <div>
                              <v-icon class="primary-text-500"
                                >mdi-chevron-right</v-icon
                              >
                            </div>
                          </div>
                          <div
                            v-if="
                              shifts.configuration.includes(
                                storeConfigurationStateCode.Back
                              )
                            "
                            class="flex items-center"
                          >
                            <div class="flex-1">
                              <span
                                class="mr-2 px-1.5 py-1 bg-main-color text-white rounded"
                              >
                                內
                              </span>
                              <span class="mr-2">正職 0 位</span>
                              <span>兼職 0 位</span>
                            </div>
                            <div>
                              <v-icon class="primary-text-500"
                                >mdi-chevron-right</v-icon
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                  <StyledBtn
                    text-color="white"
                    bg-color="mainColor"
                    min-width="160"
                    type="button"
                    elevation="0"
                    class="mt-4"
                    @click="addShift()"
                  >
                    <v-icon light>mdi-plus</v-icon>新增班別
                  </StyledBtn>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
        <StyledBtn
          text-color="white"
          bg-color="mainColor"
          min-width="160"
          type="submit"
          elevation="0"
          class="mb-2"
          >建立完成</StyledBtn
        >
        <StyledBtn
          text-color="white"
          bg-color="mainColor"
          min-width="160"
          type="button"
          elevation="0"
          @click="previousStep()"
          >回上一步</StyledBtn
        >
        <!-- <StyledDialog
          :value="activeDialog"
          title="新增班別"
          confirm-text="新增"
          :hide-default-btn="true"
          @handleDialog="handleDialog"
        >
          <AddStoreShift
            v-if="activeDialog"
            :store-info="validationForm"
            :current-day="tab"
            @onSubmit="addNewShift"
          />
        </StyledDialog> -->
      </section>
      <section v-show="activeAddStoreShift">
        <AddStoreShift
          v-if="activeAddStoreShift"
          :store-info="validationForm"
          :current-day="tab"
          @onSubmit="addNewShift"
        />
      </section>
    </ValidationObserver>
  </main>
</template>

<script>
import AddStoreShift from '@/pages/main/store/add/AddStoreShift'
import StoreConfigurationStateCode from '@/enum/storeConfigurationStateCode'

export default {
  name: 'AddStore',
  components: { AddStoreShift },
  layout: 'main',
  props: [],
  data: () => {
    return {
      storeConfigurationStateCode: StoreConfigurationStateCode,
      validationForm: {
        storeName: '',
        publicHoliday: [],
        separateFrontAndBack: false,
        weekDayShifts: [[], [], [], [], [], [], []],
      },
      validationRules: {
        storeName: 'required|max:30',
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
      activeAddStoreShift: false,
    }
  },
  computed: {},
  watch: {
    validationForm: {
      handler(val) {
        this.handlePublicDay(val)
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
        // console.log('通過驗證', this.validationForm)
        this.pageOne = false
      }
    },
    previousStep() {
      this.pageOne = true
    },
    /** 新增班別 */
    addShift() {
      this.handleDialog()
    },
    /** 開關新增班別視窗 */
    handleDialog() {
      this.activeAddStoreShift = !this.activeAddStoreShift
    },
    /** 新增班別 */
    addNewShift(values) {
      console.log('addNewShift', values)
      this.handleDialog()
      // 新增班表進指定 週天
      this.validationForm.weekDayShifts[this.tab].push(values)
      // 若新增的班表有需有複製班表，執行複製動作
      if (values.copyShift.length > 0) {
        values.copyShift.forEach((element) => {
          this.validationForm.weekDayShifts[element].push(values)
        })
      }
    },
    /** 設定公休日 */
    handlePublicDay(values) {
      if (values.publicHoliday.includes('none')) {
        // 若有設定其他公休日，移除其他所有公休日
        if (values.publicHoliday.filter((e) => e !== 'none').length > 0) {
          const publicHolidayValues = this.validationForm.publicHoliday.filter(
            (e) => e === 'none'
          )
          this.validationForm.publicHoliday = publicHolidayValues
        }
        // 將其餘選項 disabled
        const dayOptionsResult = this.dayOptions.map((e) => {
          if (e.value === 'none') {
            return e
          }
          return {
            ...e,
            disabled: true,
          }
        })
        this.dayOptions = dayOptionsResult
        return
      }
      // 解除封印
      const dayOptionsResult = this.dayOptions.map((e) => {
        return {
          ...e,
          disabled: false,
        }
      })
      this.dayOptions = dayOptionsResult
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
  .shift-card
    padding: 12px
    margin: 0 0 12px
    background-color: #fff
    box-shadow: 0px 1px 4px rgba(82, 82, 82, 0.15)
    border-radius: 5px
    span:not:first-child
      width: 30px
      height: 21px
      vertical-align: bottom
      display: inline-flex
      justify-content: center
      align-items: center
    .configuration-card
      border: 1px solid $primary500
      border-radius: 5px
      padding: 0.75rem
      >div:nth-child(2)
        margin: 1rem 0 0
  .icon-transparent
    color: transparent
</style>
