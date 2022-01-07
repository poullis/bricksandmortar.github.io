//Stacked Chart Future

var ctx_future = document.getElementById("stacked-chart-future").getContext('2d');

var myChartFuture = new Chart(ctx_future, {

    type: 'bar',
    data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [{
            label: 'Online Sales',
            backgroundColor: "#37A37E",
            data: [32.5, 37.5, 37.8, 38.1, 38.4, 38.6],
        }, {
            label: 'In-store Retail',
            backgroundColor: "#1a5997",
            data: [67.5, 62.5, 62.2, 61.9, 61.6, 61.4],
        }],
    },
    options: {
        tooltips: {
            displayColors: true,
            callbacks: {
                mode: 'x',
            },
        },
        scales: {
            xAxes: {
                stacked: true,
                gridLines: {
                    display: false,
                }
            },
            yAxes: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Percentage over Total Retail (%)'
                },
                ticks: {
                    beginAtZero: true,
                },
                type: 'linear',
            }
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
    }

});


var ctx_future_2 = document.getElementById("bar-chart-future").getContext('2d');

var myChartFuture2 = new Chart(ctx_future_2, {

    type: 'bar',
    data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [{
            label: 'Online Sales',
            backgroundColor: "#5690A6",
            data: [97, 103.9, 109.7, 113.8, 116.4, 119.1],
        }],
    },
    options: {
        tooltips: {
            displayColors: true,
            callbacks: {
                mode: 'x',
            },
        },
        scales: {
            xAxes: {
                gridLines: {
                    display: false,
                }
            },
            yAxes: {
                title: {
                    display: true,
                    text: 'Revenue Sales in Billions ($)'
                },
                ticks: {
                    beginAtZero: true,

                },
                type: 'linear',
            }
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
    }

});