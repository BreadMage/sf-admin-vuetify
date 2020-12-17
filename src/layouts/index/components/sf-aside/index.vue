<template>
  <v-navigation-drawer app>
    <v-list nav>
      <template v-for="route in routeModules">
        <sf-aside-item :key="route.name" :route="route" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routeModules from '@/router/modules'
import sfAsideItem from './sf-aside-item.vue'
export default {
  name: 'sf-aside',
  components: { sfAsideItem },
  data () {
    return { routeModules }
  },
  created () {}
}
</script>

<style lang="scss" scoped></style>
