## Awesome D3.js Learning Resources

**Unleash the power of data visualization with D3.js!** This library empowers you to create dynamic and interactive web graphics using JavaScript.

This curated list of resources and code examples will guide you on your D3.js journey, from fundamentals to advanced techniques.

**Learning Resources**

- **D3.js In-Depth:** Delve deep into D3.js, covering everything from fundamental concepts to advanced techniques. (https://d3indepth.com/)
- **D3: Start to Finish:** Master D3.js step-by-step, taking you from the basics to real-world data visualization projects.
- **Official D3.js Documentation:** Stay up-to-date with the latest features and reference materials: (https://d3js.org/)

**D3.js Fundamentals**

D3.js empowers you to manipulate the Document Object Model (DOM) using data. The core concepts include:

**1. Selecting DOM Elements**

- `d3.select(selector)`: Selects the first matching element (e.g., `d3.select("svg")`).
- `d3.selectAll(selector)`: Selects all matching elements (e.g., `d3.selectAll("circle")`).

```javascript
// Select the first SVG element and append a circle:
d3.select("svg")
  .append("circle")
  .attr("cx", 50) // Set center X coordinate
  .attr("cy", 50) // Set center Y coordinate
  .attr("r", 40) // Set radius
  .style("fill", "steelblue"); // Set fill color
```
