<template>
  <h1>Hello The Blocks!</h1>
  <div class="menu-items">
    <router-link to="/">Go to Simple Todo component</router-link>
    <router-link to="/calculator">Go to Simple Calculator component</router-link>
    <router-link to="/counter">Go to Simple Counter component</router-link>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.menu-items {
  display: flex;
  align-items: center;
  a + a {
    margin-left: 20px;
  }
}
</style>
