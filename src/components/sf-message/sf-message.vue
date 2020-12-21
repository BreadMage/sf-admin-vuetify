<template>
  <div class="sf-message">
    <v-alert
      class="d-inline-block"
      transition="fade-transition"
      dense
      :value="value"
      :icon="icon"
      :color="color"
      text
    >
      {{ message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aliveCount: 0
    }
  },
  updated () {
    console.log(this.value)
  }
}
</script>

<style lang="scss" scoped></style>
