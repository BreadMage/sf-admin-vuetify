<template template>
  <v-breadcrumbs :items="$route.matched">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.path" exact>
        {{ item.meta && item.meta.title }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'sf-breadcrumbs'
}
</script>

<style lang="scss" scoped></style>
