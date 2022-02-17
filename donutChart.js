

const donutChartData = {
    labels: [
      'Desktop',
      'Tablet',
      'Phones'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 75, 75],
      backgroundColor: [
        'rgb(112, 116, 185)',
        'rgb(99, 203, 139)',
        'rgb(0, 184, 197)'
      ],
      borderColor: [
        'rgb(112, 116, 185)',
        'rgb(99, 203, 139)',
        'rgb(0, 184, 197)'
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
            labels: {
              boxWidth: 25,
              padding: 12,
              font: {
                size: 15,
                weight: 'bolder',
              }
            }
          }
        }
  }
  };

  const donutChart = new Chart(
    document.getElementById('donutChart'),
    donutChartConfig
);

