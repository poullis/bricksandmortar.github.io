//Line Chart

var canvas3 = document.getElementById("lineChart");
var ctx3 = canvas3.getContext('2d');



// // Global Options:
// Chart.defaults.global.defaultFontColor = 'black';
// Chart.defaults.global.defaultFontSize = 16;

var data3 = {
    labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [{
            label: "Retail Sales",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: "red", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#f5e25d",
            pointHoverBorderColor: "red",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [2.8, 4.3, 3.0, 1.9, 2.3, 3.5, 3.1, 4.1, 2.0, 3.2, 2.9, 4.6, 4.1, 3.2, 6.0, 0.2],
            spanGaps: true,
        }, {
            label: "Internet Sales",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(86, 144, 166, 1)",
            borderColor: "#012B39",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#f5e25d",
            pointHoverBorderColor: "#012B39",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [47.4, 22, 23.2, 17.3, 11.3, 18, 10.2, 14.6, 26.9, 12.8, 12.5, 8.9, 57.2, -1.2],
            spanGaps: false,
        }

    ]
};



var data4 = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
            label: "Revenue in billion U.S. dollars",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(86, 144, 166, 1)",
            borderColor: "#012B39",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#f5e25d",
            pointHoverBorderColor: "#012B39",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: [97, 103.9, 109.7, 113.8, 116.4, 119.1],
            spanGaps: false,
        }

    ]
};

// Notice the scaleLabel at the same level as Ticks
var options = {
    scales: {
        yAxes: {
            title: {
                display: true,
                text: 'Percentage of growth from previous year (%)'
            },
            ticks: {
                beginAtZero: true,
            },

        }
    }
};

// Chart declaration:
var LineChart = new Chart(ctx3, {
    type: 'line',
    data: data3,
    options: options
});


var canvas4 = document.getElementById("lineChartFuture");
var ctx4 = canvas4.getContext('2d');

var LineChartFuture = new Chart(ctx4, {
    type: 'line',
    data: data4,
    options: options
});