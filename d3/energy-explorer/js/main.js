import update from "./update.js";

d3.selectAll("circle")
  .style("stroke", "blue")
  .style("fill", "none")
  .style("stroke-width", 4)
  .attr("r", function (_, i) {
    return (i + 1) * 10;
  });

let myData = [10, 40, 30];

d3.select("g.chart")
  .selectAll("circle")
  .data(myData)
  .join("circle")
  .attr("r", function (d) {
    return d;
  })
  .attr("cx", function (_, i) {
    return (i + 1) * 100;
  })
  .attr("cy", 50)
  .style("fill", function (d) {
    if (d > 30) {
      return "lightgreen";
    } else {
      return "orange";
    }
  });

const circlesAre = d3.select("g.chart").selectAll("circle").nodes();

console.log("Total circle are: ", circlesAre);

//  For the bar chart

let barChartData = [...[50, 40, 30]];

const barScale = d3.scaleLinear().domain([0, 100]).range([0, 400]);
const barColorScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range(["pink", "orange"]);

d3.select("g.barChart")
  .selectAll("rect")
  .data(barChartData)
  .join("rect")
  .style("fill", function (d, i) {
    return barColorScale(d);
  })
  //   For the spacing...
  .attr("y", function (_, i) {
    return i * 80;
  })
  .attr("x", 0)
  .attr("height", 50)
  .attr("width", function (d) {
    return barScale(d);
  });

//   Energy Explorer

function transformRow(d) {
  return {
    name: d.name,
    id: d.id,
    hydroelectric: parseFloat(d.hydroelectric),
    nuclear: parseFloat(d.nuclear),
    oilgascoal: parseFloat(d.oilgascoal),
    renewable: parseFloat(d.renewable),
  };
}
d3.csv("data/data.csv", transformRow).then(update);

// let data = [];
// function updateData() {
//   let maxItems = 5,
//     maxValue = 25;
//   data = [];
//   let numItems = Math.ceil(Math.random() * maxItems);
//   for (let i = 0; i < numItems; i++) {
//     data.push({
//       renewable: Math.random() * maxValue,
//     });
//   }
// }

// window.addEventListener("load", function () {
//   updateData();
//   update(data);
// });

// setInterval(() => {
//   updateData();
//   update(data);
// }, 4000);
