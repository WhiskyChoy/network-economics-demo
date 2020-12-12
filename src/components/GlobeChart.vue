<template lang="pug">
  div.chart-container(ref="globe")
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'

export default {
  name: "GlobeChart",
  data() {
    return {
      chart: null,
      option:{
        globe: {
          baseTexture: "/data/geoinfo/texture/world.topo.bathy.200401.jpg",
          heightTexture: "/data/geoinfo/texture/world.topo.bathy.200401.jpg",
          displacementScale: 0.04,
          shading: 'lambert',
          environment: "/data/geoinfo/texture/starfield.jpg",
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              texture: "/data/geoinfo/",
              diffuseIntensity: 0.2
            }
          },
          viewControl: {
            targetCoord: [108, 34],
            autoRotate: false,
            distance: 100
          }
        }
      }
    }
  },
  methods: {
    initChart() {
      const globe = this.$refs['globe'];
      this.chart = echarts.init(globe);
      this.chart.setOption(this.option);
      console.log(this.chart)
    },
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', this.chart.resize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.chart.resize)
  }
}
</script>

<style scoped>
.chart-container {
  width: 40%;
  min-width: 600px;
  height: 40vh;
  min-height:600px;
  background-color: red
}
</style>