<template>
  <v-app>
    <sf-header />
    <sf-aside />
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
  }
}
</script>

<style lang="scss" scoped></style>
