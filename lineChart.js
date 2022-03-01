
let lineCanvas = document.querySelector('#lineChart');
const ctx = lineCanvas.getContext('2d');

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



const trafficData = {
    hourly: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
    daily: [31, 52, 42, 83, 63, 73, 52, 79, 94, 63, 104],
    weekly: [4, 7, 6, 12, 9, 10, 7, 11, 13, 9, 15],
    monthly: [1, 2, 2, 3, 2, 3, 2, 3, 3, 2, 4],
};

const lineChartData = {
    labels: lineChartLabels,
    datasets: [{
    label: 'My First dataset',
    tension: .4,
    borderWidth: 1,
    fill: 'origin', 
    backgroundColor: 'rgba(112, 116, 185, .3)',
    borderColor: 'rgba(112, 116, 185, .3)',
    data: trafficData.hourly,
    }]
};

dailyData.addEventListener('click', (event) => {
    lineChartData.datasets[0].data = trafficData.daily;
    window.lineCanvas.update();
    // new Chart(lineCanvas);
})



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
