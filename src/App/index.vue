<template lang="pug">
  div#app
    GlobeChart
</template>

<script>

import GlobeChart from "@/components/GlobeChart";
export default {
  name: 'App',
  components: {
    GlobeChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

body{
  margin: 0
}

</style>
