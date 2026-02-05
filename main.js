import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

d3.csv("movie_metadata.csv").then((data) => {
    console.log(data)
})

//  const data = [10, 30, 40, 15, 100]

const data = [
    { name: 'London', population: 8674000 },
    { name: 'New York', population: 8406000 },
    { name: 'Sydney', population: 4293000 },
    { name: 'Paris', population: 2244000 },
    { name: 'Beijing', population: 11510000 }
]


let g = d3.select("#vis")// var g becomes an array of 5 svg circles
    .selectAll("circle")
    .data(data)
    .join("rect") //mapping a circle to each array element

// Using "+" convert strings to numeric types
g.attr("fill", "steelblue")
    .attr("width", function (d) { return +d.population / 1000000 })
    .attr("height", function (d) { return +d.population / 1000000 })
    .attr("x", function (d, i) { return 50 * i })
    .attr("y", function (d, i) { return 50 * i })


g.attr('transform', "translate(50,50)")

// activity 2
function getData() { //generate an array of random numbers
    let data = [];
    let itemSize = 0;


    for (let i = 0; i < 10; i++) {
        itemSize = Math.ceil(Math.random() * 5) * 10;
        data.push(itemSize);
    }
    return data;
}

function update(data) {
    d3.select('#vis2')
        .selectAll('circle')
        .data(data)
        .join(
            function (enter) {
                return enter.append('circle')
                    .style('opacity', 0.25);
            },
            function (update) {
                return update.style('opacity', 1);
            }
        )
        .attr('cx', function (d, i) {
            return i * 100;
        })
        .attr('cy', 50)
        .attr('r', function (d) {
            return 0.5 * d;
        })
        .style('fill', 'orange');
}
function updateAll() {
    let myData = getData(); //get new data from random generator
    update(myData); //update the visualization
}
updateAll(); //get new data and visualize (called one time only)

//select button on the page, add a click event to it.  
d3.select("button")
    .on("click", updateAll);