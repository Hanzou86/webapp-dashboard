const lineChartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];



const lineChartData = {
    labels: lineChartLabels,
    datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const lineChartConfig = {
    type: 'line',
    data: lineChartData,
    options: {}
};

const lineChart = new Chart(
    document.getElementById('lineChart'),
    lineChartConfig
);
