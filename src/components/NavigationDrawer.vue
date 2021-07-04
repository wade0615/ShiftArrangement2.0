<template>
  <div id="navigation-drawer" class="pa-12">
    <v-card min-height="100%">
      <v-navigation-drawer
        absolute
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="userAvatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <!-- 登入者資料 -->
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ username }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <!-- 店家設定 -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ storeSetting }}</v-list-item-title>
          </v-list-item>
          <!-- 員工編制 -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ staffSetting }}</v-list-item-title>
          </v-list-item>
          <!-- 選擇班別 -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-file-document-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ scheduleSetting }}</v-list-item-title>
          </v-list-item>
          <!-- 查看班表 -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-calendar-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ viewArrangement }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div>hello hello hello hello hello hello </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    username: 'Sandra Adams',
    userEmail: 'sandra_a88@gmail.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/85.jpg',
    storeSetting: '店家設定',
    staffSetting: '員工編制',
    scheduleSetting: '選擇班別',
    viewArrangement: '查看班表',
  }),
};
</script>

<style lang="sass" scoped>
#navigation-drawer
  height: 100%
</style>
