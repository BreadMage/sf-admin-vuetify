<template>
  <v-app-bar app short>
    <v-app-bar-nav-icon v-if="isMobile" @click="openAside"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ projectTitle }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  model: {
    prop: 'isCollapseAside'
  },
  props: {
    isCollapseAside: {
      type: Boolean,
      default: true
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      projectTitle: state => state.config.projectTitle
    })
  },
  methods: {
    openAside () {
      this.$emit('input', !this.asideStatus)
    }
  }
}
</script>

<style lang="scss" scoped></style>
