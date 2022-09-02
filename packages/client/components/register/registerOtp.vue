<template>
  <div id="registerOtp">
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
            <!-- <StyledInput
            v-model="validationForm.otpCode"
            placeholder="請輸入您的 otpCode "
            cssclass="mb-2"
            required
          /> -->
            <v-otp-input
              v-model="validationForm.otpCode"
              length="6"
              type="number"
            ></v-otp-input>
            <span class="text-sm leading-normal"
              >已將驗證碼寄送至 {{ email }}</span
            >
          </ValidationProvider>
        </div>
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
        <!-- <nuxt-link to="/register" class="col-12 col-md-6">
          修改 email 信箱
        </nuxt-link> -->
        <v-btn large min-width @click="handleOtp">修改 email 信箱</v-btn>
      </ValidationObserver>
    </section>
  </div>
</template>

<script>
export default {
  props: [],
  data: () => {
    return {
      email: 'test@mail.com',
      validationForm: {
        otpCode: '',
      },
      rules: {
        otpCode: 'required|min:6',
      },
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
        this.$emit('handle_otp')
      }
    },
    handleOtp() {
      this.$emit('handle_otp')
    },
  },
}
</script>

<style lang="sass" scoped>
span
  color: #7E7E7E
</style>
