// const width = 50,
//     height = 150,
//     margin = 40;



// // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
// const radius = Math.min(width, height) / 2 - margin

// // append the svg object to the div called 'my_dataviz'
// const svg = d3.select("#my_dataviz")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", `translate(${width/2},${height/2})`);


// // Create dummy data
// const data = { wholesale: 19, clothing: 11, groceries: 30, perfumes: 8, electronis: 12, home: 3, kitchen: 7, bathroom: 14 }

// // set the color scale
// const color = d3.scaleOrdinal()
//     .domain(["a", "b", "c", "d", "e", "f", "g", "h"])
//     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

// // Compute the position of each group on the pie:
// const pie = d3.pie()
//     .sort(null) // Do not sort group by size
//     .value(d => d[1])
// const data_ready = pie(Object.entries(data))

// // The arc generator
// const arc = d3.arc()
//     .innerRadius(radius * 0.5) // This is the size of the donut hole
//     .outerRadius(radius * 0.8)

// // Another arc that won't be drawn. Just for labels positioning
// const outerArc = d3.arc()
//     .innerRadius(radius * 0.9)
//     .outerRadius(radius * 0.9)

// var div = d3.select("body").append("div")
//     .attr("class", "tooltip-donut")
//     .style("opacity", 0);

// // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
// svg
//     .selectAll('allSlices')
//     .data(data_ready)
//     .join('path')
//     .attr('d', arc)
//     .attr('fill', d => color(d.data[0]))
//     .attr("stroke", "white")
//     .style("stroke-width", "2px")
//     .style("opacity", 0.7)
//     .text('I am here')
//     .on("mouseenter", function(d) {
//         d3.select(this)
//             .attr("stroke", "white")
//             .transition()
//             .duration(2000)
//             // .attr("d", 1000)
//             .attr("stroke-width", 6);
//     })
//     .on("mouseleave", function(d) {
//         d3.select(this).transition()
//             .attr("d", arc)
//             .attr("stroke", "none");
//     })
//     .on('mouseover', function(d) {
//         d3.select(this).transition()
//             .duration('50')
//             .attr('opacity', '.85');
//         div.transition()
//             .duration(50)
//             .style("opacity", 1);
//         let num = (Math.round((100 / 30) * 100)).toString() + '%';
//         div.html(num)
//             .style("left", 100 + "px")
//             .style("top", 10000 + "px")
//             .text(function(d) { return d.data; });

//     }).on('mouseout', function(d, i) {
//         d3.select(this).transition()
//             .duration('50')
//             .attr('opacity', '1');
//         div.transition()
//             .duration('50')
//             .style("opacity", 0);
//     });





// // Add the polylines between chart and labels:
// svg
//     .selectAll('allPolylines')
//     .data(data_ready)
//     .join('polyline')
//     .attr("stroke", "black")
//     .style("fill", "none")
//     .attr("stroke-width", 1)
//     .attr('points', function(d) {
//         const posA = arc.centroid(d) // line insertion in the slice
//         const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
//         const posC = outerArc.centroid(d); // Label position = almost the same as posB
//         const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
//         posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
//         return [posA, posB, posC]
//     })

// // Add the polylines between chart and labels:
// svg
//     .selectAll('allLabels')
//     .data(data_ready)
//     .join('text')
//     .text(d => d.data[0])
//     .attr('transform', function(d) {
//         const pos = outerArc.centroid(d);
//         const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
//         pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
//         return `translate(${pos})`;
//     })
//     .style('text-anchor', function(d) {
//         const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
//         return (midangle < Math.PI ? 'start' : 'end')
//     })


// var path = svg.selectAll('path')
//     .data(data_ready)
//     .enter()
//     .append('path')
//     .attr('d', arc)
//     .attr('fill', function(d, i) {
//         return color(d.data.title);
//     })
//     .attr('transform', 'translate(0, 0)')
//     .on('mouseover', function(d, i) {
//         d3.select(this).transition()
//             .duration('50')
//             .attr('opacity', '.85');
//         div.transition()
//             .duration(50)
//             .style("opacity", 1);
//         let num = (Math.round((d.value / d.data.all) * 100)).toString() + '%';
//         div.html(num)
//             .style("left", (d3.event.pageX + 10) + "px")
//             .style("top", (d3.event.pageY - 15) + "px");
//     }).on('mouseout', function(d, i) {
//         d3.select(this).transition()
//             .duration('50')
//             .attr('opacity', '1');
//         div.transition()
//             .duration('50')
//             .style("opacity", 0);
//     });


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
    labels: ["2021", "2022", "2023", "2024", "2025"],
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
            data: [65, 59, 80, 81, 56],
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
            data: [10, 20, 60, 95, 64],
            spanGaps: false,
        }

    ]
};

// Notice the scaleLabel at the same level as Ticks
var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            scaleLabel: {
                display: true,
                labelString: 'Moola',
                fontSize: 20
            }
        }]
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