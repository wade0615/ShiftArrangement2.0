<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <router-link :to="{name: 'Home'}">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <router-link :to="{name: 'about'}">
      <span class="mr-2 white--text">To about</span>
      <v-icon>mdi-open-in-new</v-icon>
    </router-link>
  </v-app-bar>
</template>
