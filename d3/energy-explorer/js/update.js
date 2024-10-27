import layout from "./layout.js";

const update = function (countries) {
  console.log("Data Provided to update module: ", countries);
  const data = layout(countries);
  console.log("Layout data: ", data);

  d3.select("g.countries")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .style("fill", "#aaa")
    .attr("cx", (d, i) => {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .attr("r", function (d) {
      return d.radius;
    });
};

export default update;
