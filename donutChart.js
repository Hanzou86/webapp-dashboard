

const donutChartData = {
    labels: [
      'Desktop',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(112, 116, 185)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const donutChartConfig = {
    type: 'doughnut',
    data: donutChartData,
    options: {
      plugins: {
          legend: {
            position: 'right',
          }
        }
  }
  };

  const donutChart = new Chart(
    document.getElementById('donutChart'),
    donutChartConfig
);

