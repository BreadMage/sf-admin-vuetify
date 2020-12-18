<template>
  <v-navigation-drawer
    app
    v-model="isCollapseAsideInner"
    :mini-variant="isMiniAside"
    :expand-on-hover="isMiniAside"
    :permanent="!isMobile"
    :temporary="isMobile"
  >
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
  model: {
    prop: 'isCollapseAside'
  },
  props: {
    isCollapseAside: {
      type: Boolean,
      default: true
    },
    isMiniAside: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return { routeModules }
  },
  computed: {
    isCollapseAsideInner: {
      get () {
        return this.isCollapseAside
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
