import layout from "./layout.js";

const update = function (countries) {
  console.log("Data Provided to update module: ", countries);
  const data = layout(countries);
  console.log("Layout data: ", data);

  d3.select("g.countries")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("x", (d, i) => {
      return d.x;
    })
    .attr("y", function (d) {
      return d.y;
    })
    .attr("fill", "#aaa")
    .each(function (d, i) {
      const g = d3.select(this);
      if (g.selectAll("*").empty()) {
        g.append("circle").attr("r", d.radius).attr("cx", d.x).attr("cy", d.y);

        g.append("text")
          .attr("x", d.x - d.radius)
          .attr("y", d.y + 50)
          .text("Label");
      }
    });
};

export default update;
