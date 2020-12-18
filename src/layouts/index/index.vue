<template>
  <v-app>
    <sf-header v-model="isCollapseAside" :is-mobile="isMobile" />
    <sf-aside
      v-model="isCollapseAside"
      :is-mini-aside="isMiniAside"
      :is-mobile="isMobile"
    />
    <sf-main />
    <sf-footer />
  </v-app>
</template>

<script>
import SfHeader from './components/sf-header'
import SfAside from './components/sf-aside/index'
import SfFooter from './components/sf-footer'
import SfMain from './components/sf-main/index'
export default {
  components: {
    SfHeader,
    SfAside,
    SfFooter,
    SfMain
  },
  data () {
    return {
      isMiniAside: false,
      isMobile: false,
      isCollapseAside: true
    }
  },
  watch: {
    '$vuetify.breakpoint.width' (value) {
      this.handleScreen(value)
    }
  },
  methods: {
    // 响应式监听
    handleScreen (value) {
      if (value < 600) {
        this.isMobile = true
        this.isMiniAside = false
        this.isCollapseAside = false
      } else if (value >= 600 && value < 1264) {
        this.isMobile = false
        this.isMiniAside = true
        this.isCollapseAside = true
      } else {
        this.isMobile = false
        this.isMiniAside = false
        this.isCollapseAside = true
      }
    }
  },
  created () {
    this.handleScreen(this.$vuetify.breakpoint.width)
  }
}
</script>

<style lang="scss" scoped></style>
