<template>
  <v-main>
    <v-container fluid>
      <sf-breadcrumbs />
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
import SfBreadcrumbs from './sf-breadcrumbs'
export default {
  components: { SfBreadcrumbs }
}
</script>

<style lang="scss" scoped></style>
