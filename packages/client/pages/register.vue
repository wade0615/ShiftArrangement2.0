<template>
  <main id="register">
    <h2>
      {{ title }}
    </h2>
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
      <v-text-field
        outlined
        background-color="#FFF"
        dense
        label="請輸入您的 Email 電子郵件地址"
        class="mb-8"
      ></v-text-field>
      <v-text-field
        outlined
        background-color="#FFF"
        dense
        label="設定您的密碼"
        class="mb-8"
      ></v-text-field>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Register',
  layout: 'default',
  props: [],
  data: () => {
    return {
      title: '店面管理員註冊',
      shopName: '薛丁格的咖啡',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeMount() {},
  updated() {},
  methods: {},
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
  section:nth-child(2)
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
</style>
