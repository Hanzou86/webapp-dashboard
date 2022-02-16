const lineChartLabels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31',
];



const lineChartData = {
    labels: lineChartLabels,
    datasets: [{
    label: 'My First dataset',
    tension: .4,
    borderWidth: 2,
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
    }]
};

const lineChartConfig = {
    type: 'line',
    data: lineChartData,
    options: {
        plugins: {
            legend: {
              display: false,
            }
          }
    }
};

const lineChart = new Chart(
    document.getElementById('lineChart'),
    lineChartConfig
);
