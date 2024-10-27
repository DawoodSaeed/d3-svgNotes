import config from "./config.js";

function layout(data) {
  const cellWidth = config.width / config.numColumns;
  const cellHeight = cellWidth;

  const maxRadius = 0.35 * cellWidth;
  let radiusScale = d3.scaleSqrt().domain([0, 100]).range([0, maxRadius]);

  let layoutData = data.map(function (d, i) {
    const column = i % config.numColumns;
    const row = Math.floor(i / config.numColumns);

    let item = {};
    item.x = column * cellWidth + 0.5 * cellWidth;
    item.y = row * cellHeight + 0.5 * cellHeight;
    item.radius = radiusScale(d.renewable);
    return item;
  });
  return layoutData;
}

export default layout;
