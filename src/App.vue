<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: "App",
  components: {
    navbar: Navbar,
  },
  data: () => ({
    title: "Photo Upload App",
  }),
};
</script>

<style>
#app {
  text-align: center;
}
</style>
