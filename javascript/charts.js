//Stacked Chart

var ctx = document.getElementById("stacked-chart").getContext('2d');

var myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ["2007", "2008", "2009", "2010", "2011", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{
            label: 'Online Sales',
            backgroundColor: "#37A37E",
            data: [3.4, 4.9, 6.2, 7.3, 8.3, 9.3, 10.4, 11.3, 12.5, 14.7, 16.3, 18.0, 19.2, 28.1],
        }, {
            label: 'In-store Retail',
            backgroundColor: "#1a5997",
            data: [96.6, 95.1, 93.8, 92.7, 91.7, 90.7, 89.6, 88.7, 87.5, 85.3, 83.7, 82.0, 80.8, 71.9],
        }],
    },
    options: {
        tooltips: {

            displayColors: true,
            mode: 'x',
            multiTooltipTemplate: "My Text <%= datasetLabel %> - <%= value %>",
            tooltipTemplate: "Label <%= label %>",

        },
        scales: {
            xAxes: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Year'
                },
                gridLines: {
                    display: false,

                }
            },
            yAxes: {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
                type: 'linear',
                title: {
                    display: true,
                    text: 'Percentage over Total Retail (%)'
                }

            }
        },
        plugins: {
            deferred: {
                xOffset: 150,
                yOffset: '50%',
                delay: 500
            },

        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
    }

});





let ctx2 = document.getElementById("myDonutChart").getContext("2d");
// var global = Chart.defaults.global;
// global.defaultFontColor = "#888";
// global.maintainAspectRatio = true;



let myDonutChart = new Chart(ctx2, {
    plugins: [{
        beforeInit: function(chart) {
            // chart.legend.afterFit = function() {
            //     this.height = this.height - 40;
            // };
        }
    }],
    type: "doughnut",

    data: {
        labels: ["1 or 2", "3-5", "6-10", "11+"],
        datasets: [{
            label: "languages",
            backgroundColor: [

                `rgb(129, 110, 100)`,
                `rgb(147, 217, 248)`,
                `rgb(220,207,90)`,
                `rgb(55, 163, 126)`,


            ],
            borderColor: [
                "#4F362E",
                "#4D8498",
                "rgb(226,184,66)",
                "#256D54",

            ],
            borderWidth: 1.4,
            data: [16, 30, 19, 34],
            barThickness: 10
        }]
    },
    options: {
        cutoutPercentage: 65,
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true,
            position: "bottom",
            align: "center",
            labels: {
                boxWidth: 20,
                padding: 10,
                usePointStyle: true
            }
        },
        tooltips: {
            mode: "point",
            titleFontColor: "black",
            bodyFontColor: "black",
            backgroundColor: "#eee",
            callbacks: {
                afterLabel: function(tooltipItem, data) {
                    var sum = data.datasets.reduce((sum, dataset) => {
                        return sum + dataset.data[tooltipItem.index];
                    }, 0);
                    var percent = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / sum * 100;
                    percent = percent.toFixed(2); // make a nice string
                    return data.datasets[tooltipItem.datasetIndex].label + ': ' + percent + '%';
                }
            }
        }
    }
});

var DoughnutTextInsideChart = new Chart($('#myDonutChart')[0].getContext('2d')).DoughnutTextInside(data, {
    responsive: true
});

// DoughnutTextInsideChart.destroy();
myChart.destroy();