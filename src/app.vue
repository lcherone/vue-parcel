<template>
  <router-view :state="state"></router-view>
</template>

<script>
export default {
  data() {
    return {
      state: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./assets/style.css";
</style>
