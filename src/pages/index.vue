<template>
  <div>
    <div class="container">
      <h1>Vue Parcel</h1>

      <router-link :to="{ path: '/test/123' }">test</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['state'],
  data: function () {
    return {}
  },
  methods: {

  }
}
</script>

<style></style>