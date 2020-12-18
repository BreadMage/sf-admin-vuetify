<template>
  <v-list-group
    v-if="hasVisibleChildren"
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
    <template v-for="child in route.children">
      <sf-aside-item v-if="!route.hidden" :route="child" :key="child.name" />
    </template>
  </v-list-group>
  <v-list-item v-else :key="route.name" :to="{ name: route.name }" exact>
    <v-list-item-icon v-if="route.meta && route.meta.icon">
      <v-icon v-text="route.meta && route.meta.icon" />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title
        v-text="route.meta && route.meta.title"
      ></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'sf-aside-item',
  props: {
    route: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    hasVisibleChildren () {
      if (!this.route.children || this.route.children.length < 2) return false
      const visibleChildren = this.route.children.filter(l => !l.hidden)
      if (visibleChildren.length < 2) return false
      return true
    }
  }
}
</script>

<style lang="scss" scoped></style>
