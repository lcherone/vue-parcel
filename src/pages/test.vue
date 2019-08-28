<template>
  <div>
    <div class="container">
      <h1>Vue Parcel - Test</h1>

      <router-link :to="{ path: '/' }">Home</router-link>
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