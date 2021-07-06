<template>
  <v-navigation-drawer
    id="navigation-drawer"
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
      <v-list-item>
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
      <!-- 店家設定/員工編制/選擇班別/查看班表 -->
      <v-list-item
        v-for="feature in features" :key="feature.id"
        :to="{name: feature.id}"
        @click="selectListItem(feature.label)">
        <v-list-item-icon>
          <v-icon>{{ feature.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ feature.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    username: 'Sandra Adams',
    userEmail: 'sandra_a88@gmail.com',
    userAvatar: 'https://randomuser.me/api/portraits/women/85.jpg',
    features: [
      {
        id: 'storeSetting', label: '店家設定', icon: 'mdi-store',
      },
      {
        id: 'staffSetting', label: '員工編制', icon: 'mdi-account-multiple',
      },
      {
        id: 'scheduleSetting', label: '選擇班別', icon: 'mdi-file-document-edit',
      },
      {
        id: 'viewArrangement', label: '查看班表', icon: 'mdi-calendar-check',
      },
    ],
  }),
  methods: {
    selectListItem(selectItem) {
      console.log(selectItem);
    },
  },
};
</script>

<style lang="sass" scoped>
#navigation-drawer
  z-index: 2
  height: 100%
</style>
