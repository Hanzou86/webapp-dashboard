// const barChartlabels = Utils.months({count: 7});

// barChart.defaults.global.legend.display = false;

const barChartLabels = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
];


const barChartData = {
  labels: barChartLabels,
  datasets: [{
    data: [75, 120, 175, 125, 225, 200, 100],
    backgroundColor: [
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)'
    ],
    borderColor: [
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)',
      'rgb(112, 116, 185)'
    ],
    borderWidth: 1
  }]
};

const barChartConfig = {
    type: 'bar',
    data: barChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
          legend: {
            display: false,
          }
        }

    }
};

const barChart = new Chart(
    document.getElementById('barChart'),
    barChartConfig
);
