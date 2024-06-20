<template>
<div>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</div>

</template>

<script>
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import { Line } from 'vue-chartjs'
    import axios from 'axios'

    import Response from '../assets/json/response.json'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    export default {
        name: 'App',
        components: {
            Line
        },
        data() {
            resp: Response
        },

        mounted: {

        },

        methods: {
            responseParse() {
                
            }
        }
    }
</script>