<template>
  <section>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>班表 2.0</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-subheader>分頁清單</v-subheader>
        <nuxt-link to="/" class="col-12 col-md-6">註冊頁</nuxt-link>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in list" :key="index + 'list'">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    list: [
      '控制台',
      '通知',
      '排班管理',
      '統計報表',
      '員工管理',
      '店面管理',
      '設定',
      '註冊/登入',
    ],
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
