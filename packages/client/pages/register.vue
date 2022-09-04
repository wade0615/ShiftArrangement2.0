<template>
  <main id="register" data-app>
    <h2>
      {{ title }}
    </h2>
    <RegisterDetail v-show="showDetail" @handle_otp="handleOTP" />
    <RegisterOtp
      v-if="!showDetail"
      :register-data="registerData"
      @handle_otp="handleOTP"
    />
  </main>
</template>

<script>
import '@/components/register'

export default {
  name: 'Register',
  layout: 'default',
  props: [],
  data: () => {
    return {
      title: '店面管理員註冊',
      showDetail: true,
      registerData: {},
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {
    handleOTP(value) {
      if (value) {
        this.registerData = value
      }
      this.showDetail = !this.showDetail
    },
  },
}
</script>

<style lang="sass" scoped>
#register
  min-height: 100vh
  padding: 32px 16px
  h2
    margin: 0 0 32px 0
    font-weight: 500
    font-size: 20px
    line-height: 1.5
    text-align: center
</style>
