<template>
  <main id="main-register" class="px-4 py-8" data-app>
    <h2>
      {{ title }}
    </h2>
    <section v-if="registerStep === 0" id="authorize">
      <div class="my-8 mb-8 px-4 py-8">
        <p class="mb-3.5 text-center">授權碼</p>
        <p class="mb-3.5">
          請輸入本公司業務同仁提供給您的授權碼，如有任何問題歡迎您洽詢服務同仁。
        </p>
        <ValidationObserver ref="authCode">
          <!-- <ValidationObserver ref="authCode" v-slot="{ invalid }"> -->
          <form @submit.prevent="submit">
            <ValidationProvider ref="myinput" rules="required|max:10">
              <v-text-field
                v-model="validationForm.authCode"
                :counter="10"
                placeholder="請輸入授權碼"
                required
                outlined
                background-color="#FFF"
                dense
                class="mb-8"
              ></v-text-field>
            </ValidationProvider>
            <div class="text-center mb-8">
              <v-btn large dark color="#46B964" min-width="160" type="submit"
                >下一步</v-btn
              >
            </div>
          </form>
        </ValidationObserver>
        <p class="text-center">
          還沒有授權碼嗎？
          <nuxt-link to="/">與我們聯繫</nuxt-link>
        </p>
      </div>
      <div class="text-center">
        <p>已經是會員了嗎？<nuxt-link to="/">登入</nuxt-link></p>
      </div>
    </section>
    <section v-if="registerStep === 1" id="apply">
      <div>營業單位</div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainRegister',
  components: {},
  layout: 'main',
  props: [],
  data: () => {
    return {
      title: '店面管理員註冊',
      registerStep: 0,
      validationForm: {
        authCode: '',
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
        this.$router.push({ name: 'register' })
      }
    },
  },
}
</script>

<style lang="sass" scoped>
#main-register
  min-height: calc(100vh - 56px)
  h2
    font-weight: 500
    font-size: 20px
    line-height: 1.5
    text-align: center
  section#authorize
    div:nth-child(1)
      background: #F5F5F5
      p:nth-child(1)
        font-size: 18px
        font-weight: 500
        line-height: 1.5
      p:nth-child(2)
        color: #787878
      p:nth-last-child(1)
        a
          color: #007aff
    div:nth-child(2)
      p
        a
          color: #007aff
  section#apply
    color: red
</style>
