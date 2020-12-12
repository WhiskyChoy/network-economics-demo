<template lang="pug">
  div.chart-container(ref="globe")
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import axios from 'axios'

export default {
  name: "GlobeChart",
  data() {
    return {
      chart: null,
      airports: null,
      maxCapacityMatrix: null,
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
            targetCoord: [108, 31],
            autoRotate: false,
            distance: 50
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
    },
    async getCalcData(T, ep, date){
      const paramStr = `T=${T} ep=${ep}`;
      const fileStr = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.json`
      const capacityMatrixDir = `/data/capacity/${paramStr}/${fileStr}`
      const severityVectorDir = `/data/severity/${fileStr}`

      const capacityMatrix = (await axios.get(capacityMatrixDir)).data;
      const severityVector = (await axios.get(severityVectorDir)).data;

      return {capacityMatrix, severityVector}
    }
  },
  async beforeMount() {
    this.airports = (await axios.get('/data/geoinfo/flights/airports.json')).data;
    this.maxCapacityMatrix = (await axios.get('/data/capacity/max.json')).data;
    const {capacityMatrix, severityVector} = await this.getCalcData(1000, 0.7, new Date(2020,1,16))
    console.log(capacityMatrix);
    console.log(severityVector)
  },
  async mounted() {
    await this.$nextTick();
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