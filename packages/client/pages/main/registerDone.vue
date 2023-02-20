<template>
  <main id="register-done" class="px-4 py-8 text-center" data-app>
    <h2 class="mb-3">太棒了，註冊完成！</h2>
    <p class="mb-8">
      很開心見到您！ 請先填寫店面基本資料，以便系統能夠為您快速建立班表。
    </p>
    <div class="flex justify-center mb-8">
      <v-img
        lazy-src="https://picsum.photos/20/20/"
        max-height="200"
        max-width="200"
        src="https://picsum.photos/200/200/"
      ></v-img>
    </div>
    <StyledBtn
      large
      text-color="#fff"
      bg-color="#46B964"
      min-width="160"
      to="/main/store/AddStore"
      >前往新增店面</StyledBtn
    >
  </main>
</template>

<script>
export default {
  name: 'RegisterDone',
  layout: 'main',
  props: [],
  data: () => {
    return {}
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
#register-done
  min-height: calc(100vh - 56px)
  h2
    font-weight: 500
    font-size: 1.25rem
    line-height: 1.5
  p
    font-weight: 400
    font-size: 1rem
    line-height: 1.5
    color: #7E7E7E
</style>
