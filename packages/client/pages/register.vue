<template>
  <main id="register">
    <h2>
      {{ title }}
    </h2>
    <div class="my-8">區塊</div>
  </main>
</template>

<script>
export default {
  name: 'Register',
  props: [],
  data: () => {
    return {
      title: '店面管理員註冊',
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
  min-height: calc(100vh - 56px)
  padding: 32px 16px
  h2
    font-weight: 500
    font-size: 20px
    line-height: 1.5
    text-align: center
  div
    background: #F5F5F5
</style>
