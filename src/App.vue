<template>
  <router-view v-if="isRouterAlive"/>
</template>

<script>
  import { provide, ref, nextTick } from "vue";

  export default {
    name: 'App',
    setup() {
      const isRouterAlive = ref(true);
      const reload = () => {
        isRouterAlive.value = false;
        nextTick(() => {
          isRouterAlive.value = true
        })
      }
      provide("reload", reload);
      return {isRouterAlive}
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0px auto;
}
</style>
