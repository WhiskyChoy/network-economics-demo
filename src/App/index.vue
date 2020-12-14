<template lang="pug">
  div#app
    h1.title Dynamic Aviation Network Under Pandemic
    h2.subtitle A Demo For Course CIE6036
    GlobeChart
    GlobeTotalChart.global-total-chart
</template>

<script>

import GlobeChart from "@/components/GlobeChart";
import GlobeTotalChart from "@/components/GlobeTotalChart";
export default {
  name: 'App',
  components: {
    GlobeTotalChart,
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
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body{
  margin: 0
}

.global-total-chart{
  margin-top: 1rem;
}

.subtitle{
  margin-top: 0;
}

</style>
