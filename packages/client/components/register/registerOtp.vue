<template>
  <div id="register-otp">
    <section>
      <ValidationObserver
        v-slot="{ invalid }"
        ref="authCode"
        tag="form"
        @submit.prevent="submit()"
      >
        <div class="mb-8">
          <ValidationProvider ref="email" :rules="rules.otpCode">
            <p class="mb-2">驗證碼*</p>
            <v-otp-input
              v-model="validationForm.otpCode"
              length="6"
              type="number"
            ></v-otp-input>
            <span class="text-sm leading-normal"
              >已將驗證碼寄送至 {{ registerData.email }}</span
            >
          </ValidationProvider>
        </div>
        <div class="text-center mb-8">
          <StyledBtn
            large
            text-color="#fff"
            bg-color="#46B964"
            min-width="160"
            type="submit"
            :disabled="invalid"
            >下一步</StyledBtn
          >
        </div>
        <div class="text-center mb-8">
          <p>還沒收到驗證碼嗎？</p>
          <p v-if="countTime > 0" @click="resendOtp()">
            ({{ countTime }})秒後可重新寄送
          </p>
          <v-btn
            v-else
            text
            color="#007AFF"
            large
            min-width
            @click="resendOtp()"
            >重新寄送驗證碼</v-btn
          >
        </div>
        <div class="text-center mb-8">
          <v-btn text color="#007AFF" large min-width @click="handleOtp()"
            >修改 email 信箱</v-btn
          >
        </div>
      </ValidationObserver>
    </section>
    <StyledDialog
      :value="value"
      title="驗證信已重新寄送"
      :text="`已將驗證信寄送至 ${registerData.email}`"
      @handleDialog="handleDialog"
    />
  </div>
</template>

<script>
export default {
  props: {
    registerData: {
      type: Object,
      default: () => {
        return {
          email: '',
          password: '',
        }
      },
    },
  },
  data: () => {
    return {
      value: false,
      email: 'test@mail.com',
      validationForm: {
        otpCode: '',
      },
      rules: {
        otpCode: 'required|min:6',
      },
      countTime: 60,
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.timmer()
  },
  beforeMount() {},
  updated() {},
  methods: {
    async submit() {
      /** 取得驗證是否通過，通過為 true */
      const isValid = await this.$refs.authCode.validate()
      if (isValid) {
        this.$router.push({ name: 'main-registerDone' })
      }
    },
    handleOtp() {
      this.$emit('handle_otp')
    },
    /** 重新寄送驗證碼 */
    resendOtp() {
      console.log('重新寄送驗證碼')
      this.value = !this.value
    },
    /** 重新寄送驗證碼倒計時 */
    timmer() {
      const nIntervId = setInterval(() => {
        this.countTime = this.countTime - 1
      }, 1000)
      setTimeout(() => {
        clearInterval(nIntervId)
      }, 60000)
    },
    handleDialog() {
      this.value = !this.value
    },
  },
}
</script>

<style lang="sass" scoped>
span
  color: #7E7E7E
</style>
