<template>
  <v-list-item
    v-if="!route.children || route.children.length === 1"
    :key="route.name"
    :to="{ name: route.name }"
    exact
  >
    <v-list-item-content>
      <v-list-item-title
        v-text="route.meta && route.meta.title"
      ></v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon v-if="route.meta && route.meta.icon">
      <v-icon v-text="route.meta && route.meta.icon" />
    </v-list-item-icon>
  </v-list-item>
  <v-list-group
    v-else
    :key="route.name"
    :prepend-icon="route.meta && route.meta.icon"
    :group="route.name"
    no-action
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title v-text="route.meta && route.meta.title" />
      </v-list-item-content>
    </template>
    <sf-aside-item
      :route="child"
      v-for="child in route.children"
      :key="child.name"
    />
  </v-list-group>
</template>

<script>
export default {
  name: 'sf-aside-item',
  props: {
    route: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped></style>
