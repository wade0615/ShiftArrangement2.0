<template>
  <section id="nav-bar">
    <v-app-bar :elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <span></span>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-subheader class="justify-end">
          <v-icon @click="drawer = !drawer">mdi-close</v-icon>
        </v-subheader>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(item, index) in list" :key="index + 'list'">
            <nuxt-link :to="item.route" class="col-12 col-md-6">
              {{ item.label }}
            </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: '班表 COSHIFT',
    drawer: false,
    group: null,
    list: [
      {
        route: '/main/dashboard',
        label: '控制台',
      },
      {
        route: '/',
        label: '通知',
      },
      {
        route: '/',
        label: '排班管理',
      },
      {
        route: '/',
        label: '統計報表',
      },
      {
        route: '/',
        label: '員工管理',
      },
      {
        route: '/main/store/StoreList',
        label: '店面管理',
      },
      {
        route: '/',
        label: '設定',
      },
      {
        route: '/main/register',
        label: '註冊/登入',
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style lang="sass" scoped>
#nav-bar::v-deep
  header
    background-color: $white
    .v-toolbar__content
      justify-content: space-between
    span
      width: 48px
      color: $mainColor
</style>
