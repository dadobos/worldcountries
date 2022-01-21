<template>
  <div id="app">
    <Countries />
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Countries from "./view/Countries.vue";

export default {
  name: "App",
  components: {
    Countries,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;
}
</style>
