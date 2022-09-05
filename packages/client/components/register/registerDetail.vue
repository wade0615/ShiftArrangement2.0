<template>
  <div id="register-detail">
    <section class="mb-6">
      <p>
        <span>營業單位</span>
        <span>{{ shopName }}</span>
      </p>
      <p>
        <span>你所屬的單位名稱不對嗎？</span>
        <nuxt-link to="/">與我們聯繫</nuxt-link>
      </p>
    </section>
    <section class="mb-6">
      <v-btn block large dark color="#46B964" min-width="160"
        >用 LINE 註冊</v-btn
      >
    </section>
    <div class="mb-6 flex items-center">
      <v-divider></v-divider>
      <span class="px-2">或</span>
      <v-divider></v-divider>
    </div>
    <section>
      <ValidationObserver
        v-slot="{ invalid }"
        ref="authCode"
        tag="form"
        @submit.prevent="submit()"
      >
        <ValidationProvider ref="email" :rules="rules.email">
          <p class="mb-2">Email*</p>
          <StyledInput
            v-model="validationForm.email"
            placeholder="請輸入您的 Email 電子郵件地址"
            cssclass="mb-2"
            required
          />
        </ValidationProvider>
        <ValidationProvider ref="password" :rules="rules.password">
          <p class="mb-2">密碼設定*</p>
          <StyledInput
            v-model="validationForm.password"
            type="password"
            placeholder="設定您的密碼"
            hint="密碼長度需要超過6個字元，並包含數字及英文字母。"
            cssclass="mb-6"
            required
          />
        </ValidationProvider>
        <p class="mb-6">
          建立帳號代表你詳閱並同意 Coshift
          <nuxt-link to="/">使用條款</nuxt-link> 與
          <nuxt-link to="/">資料使用政策</nuxt-link>
        </p>
        <div class="text-center mb-8">
          <StyledBtn
            text="註冊"
            large
            text-color="#fff"
            bg-color="#46B964"
            min-width="160"
            type="submit"
            :disabled="invalid"
          ></StyledBtn>
        </div>
      </ValidationObserver>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RegisterDetail',
  props: {},
  data: () => {
    return {
      shopName: '薛丁格的咖啡',
      validationForm: {
        email: '',
        password: '',
      },
      rules: {
        email: 'required|email',
        password: 'required|max:20',
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
        this.$emit('handle_otp', this.validationForm)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
#register-detail
  section:nth-child(1)
    padding: 12px
    background: #F8F8F8
    border-radius: 10px
    p
      font-weight: 400
      font-size: 16px
      line-height: 1.5
    p:nth-child(1)
      margin: 0 0 12px 0
      span:nth-child(1)
        margin: 0 16px 0 0
    p:nth-child(2)
      font-size: 14px
      span
        color: #7E7E7E
        margin: 0 16px 0 0
      a
        color: #007aff
  section:nth-child(4)
    span
      color: #7E7E7E
    a
      color: #007aff
</style>
