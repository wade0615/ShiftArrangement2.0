<template>
  <div id="about" class="pa-4 pl-16">
    <NavigationDrawer />
    <router-view name="features" />
  </div>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
  }),
};
</script>

<style lang="sass" scoped>
#about
  position: relative
  height: 100%
</style>
