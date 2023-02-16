<template>
  <div style="width: 100%; height: 500px">
    <canvas id="myChart"></canvas>
</div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue';
onMounted(() => {
  const ctx = document.getElementById('myChart');
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 43, 24, 24, 34, 43],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'My Second Dataset',
        data: [25, 89, 56, 92, 44, 60, 50, 32, 32, 65, 43 ,75],
        fill: false,
        borderColor: 'rgb(12, 200, 255)',
        tension: 0.1
      }
    ]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  });

})
</script>

<style></style>