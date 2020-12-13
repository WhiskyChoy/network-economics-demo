<template lang="pug">
  div.chart-container(ref="globe")
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import axios from 'axios'

async function getCalcData(T, ep, date) {
  const paramStr = `T=${T} ep=${ep}`;
  const fileStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}.json`
  const capacityMatrixDir = `/data/capacity/${paramStr}/${fileStr}`
  const severityVectorDir = `/data/severity/${fileStr}`

  const capacityMatrix = (await axios.get(capacityMatrixDir)).data;
  const severityVector = (await axios.get(severityVectorDir)).data;

  return {capacityMatrix, severityVector};
}

function getFlight(route, lineWidth, direction) {
  return {
    type: 'lines3D',
    effect: {
      show: true,
      trailWidth: 2,
      trailLength: 0.1,
      trailOpacity: 1,
      trailColor: direction?'rgb(113, 150, 60)':'rgb(188, 59, 24)'
    },

    lineStyle: {
      width: lineWidth,
      color: 'rgb(50, 50, 150)',
      opacity: 0.1
    },
    blendMode: 'lighter',

    data: [route]
  }
}

function getPoint(airport, pointSize) {
  return {
    type: 'scatter3D',
    coordinateSystem: 'globe',
    blendMode: 'lighter',
    symbolSize: pointSize,
    itemStyle: {
      color: 'rgb(150, 50, 150)',
      opacity: 0.9
    },
    data: [airport]
  }
}

export default {
  name: "GlobeChart",
  data() {
    return {
      pointScale: 30,
      lineScale: 15,
      chart: null,
      airports: null,
      maxCapacityMatrix: null,
      option: {
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
              shadow: true,
              time: (()=>{const date = new Date(); date.setHours(20); return date})()
            },
            ambientCubemap: {
              texture: "/data/geoinfo/texture/pisa.hdr",
              diffuseIntensity: 0.2
            }
          },
          viewControl: {
            targetCoord: [108, 31],
            autoRotate: false,
            distance: 50
          }
        },
        series: null
      }
    }
  },
  methods: {
    initChart() {
      const globe = this.$refs['globe'];
      this.chart = echarts.init(globe);
      this.chart.setOption(this.option);
    },

    stopOrStartAnime() {
      this.series&&this.series.forEach((_, idx) => {
        this.chart.dispatchAction({
          type: 'lines3DToggleEffect',
          seriesIndex: idx
        });
      })
    },

    async getSeries(T, ep, date, type = 'relative') {

      this.option.series = [];
      const {capacityMatrix, severityVector} = await getCalcData(T, ep, date);
      const range = this.airports.length

      for (let i = 0; i < range; i++) {
        for (let j = 0; j < range; j++) {
          if (i !== j && capacityMatrix[i][j] !== 0) {
            const route = [this.airports[i], this.airports[j]];
            let lineWidth = 1;
            if (type === 'relative') {
              lineWidth = Math.max(this.lineScale * capacityMatrix[i][j] / this.maxCapacityMatrix[i][j], 1);
            } else {
              const maxC = Math.max.apply(null, capacityMatrix.flat(2));
              lineWidth = Math.max(this.lineScale * capacityMatrix[i][j] / maxC, 1) ;
            }
            const flight = getFlight(route, lineWidth, i < j);
            this.option.series.push(flight);
          }
        }
      }

      //Add the lines first
      for (let i = 0; i < range; i++) {
        const maxS = Math.max.apply(null, severityVector);
        const pointSize = Math.max(this.pointScale /(1 + Math.log10(maxS / severityVector[i] )), 1);
        console.log(pointSize)
        const point = getPoint(this.airports[i], pointSize);
        this.option.series.push(point);
      }
    }
  },

  async beforeMount() {
    this.airports = (await axios.get('/data/geoinfo/flights/airports.json')).data;
    this.maxCapacityMatrix = (await axios.get('/data/capacity/max.json')).data;
  },

  async mounted() {
    await this.$nextTick();
    this.initChart();
    await this.getSeries(1000, 0.7, new Date(2020,1,16))
    this.chart.setOption(this.option)
    window.addEventListener('resize', this.chart.resize);
    window.addEventListener('keydown', this.stopOrStartAnime);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.chart.resize);
    window.removeEventListener('keydown', this.stopOrStartAnime);
  }
}
</script>

<style scoped>
.chart-container {
  width: 40%;
  min-width: 600px;
  height: 40vh;
  min-height: 600px;
  background-color: red
}
</style>