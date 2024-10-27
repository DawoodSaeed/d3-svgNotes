## Awesome D3.js Learning Resources

**Unleash the power of data visualization with D3.js!** This library empowers you to create dynamic and interactive web graphics using JavaScript.

This curated list of resources and code examples will guide you on your D3.js journey, from fundamentals to advanced techniques.

**Learning Resources**

- **D3.js In-Depth:** Delve deep into D3.js, covering everything from fundamental concepts to advanced techniques. (https://d3indepth.com/)
- **D3: Start to Finish:** Master D3.js step-by-step, taking you from the basics to real-world data visualization projects.
- **Official D3.js Documentation:** Stay up-to-date with the latest features and reference materials: (https://d3js.org/)

**D3.js Fundamentals**

D3.js empowers you to manipulate the Document Object Model (DOM) using data. The core concepts include:

## 1. Selecting DOM Elements

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

## Modifying Selections

After you've selected elements using `d3.select` or `d3.selectAll`, you can modify their appearance and behavior using various methods:

| Method                           | Description                                                                                                                                                          | Example                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `.attr(attribute, value)`        | Sets an attribute on the selected elements. Attributes define specific characteristics of the element, like the radius of a circle (`r`).                            | `.attr("r", 30)` (Sets the radius of all selected circles to 30)                           |
| `.classed(className, condition)` | Adds or removes a class name from the elements based on a condition (optional). This allows you to style elements differently based on their data or other criteria. | `.classed("selected", true)` (Adds the "selected" class to all elements)                   |
| `.property(propertyName, value)` | Gets or sets a property on the elements. Properties are similar to attributes, but they can also represent dynamic values.                                           | `.property("title", "My Circle")` (Sets the title property of all elements to "My Circle") |
| `.style(styleName, value)`       | Applies CSS styles to the elements. This allows you to control the visual appearance of the elements.                                                                | `.style("fill", "teal")` (Sets the fill color of all elements to teal)                     |
| `.text(textContent)`             | Sets the text content of the elements. This is useful for displaying data labels or other text information.                                                          | `.text("Hello, World!")` (Sets the text content of all elements to "Hello, World!")        |
| `.html(htmlContent)`             | Sets the HTML content of the elements. This allows you to embed more complex HTML structures within your visualization.                                              | `.html("<b>Hello, World!</b>")` (Sets the HTML content of all elements to bold text)       |

## Dynamic Customizations

These methods can also take a callback function with parameters `d` (data) and `i` (index) for dynamic customization based on your data. This allows you to modify the elements' appearance or behavior based on the specific data associated with each element.

```javascript
// Change fill color and set opacity for circles conditionally:
d3.selectAll("circle")
  .attr("r", 30) // Set radius for all circles
  .style("fill", function (d) {
    return d.value > 10 ? "teal" : "steelblue";
  }) // Conditional fill based on data
  .style("opacity", function (d) {
    return d.value > 10 ? 1 : 0.5;
  }); // Conditional opacity based on data
```

## D3 Selection Methods

The following table summarizes essential D3 selection methods used for interacting with DOM elements in D3.js:

| Method      | Description                                         | Example Usage             |
| ----------- | --------------------------------------------------- | ------------------------- |
| `.size()`   | Returns the number of elements in the selection.    | `selection.size()`        |
| `.nodes()`  | Provides a list of DOM nodes in the selection.      | `selection.nodes()`       |
| `.append()` | Appends a new element to each item in the selection | `selection.append("div")` |
| `.remove()` | Removes selected elements from the DOM.             | `selection.remove()`      |

Use these methods to dynamically interact with elements, enabling you to modify, add, or remove elements within the DOM in a declarative and data-driven way.

## D3 Scale Functions

In D3.js, scale functions are essential for mapping data values to visual attributes like position, size, and color, making it easier to transform raw data into meaningful visuals. Scales operate by defining a **domain** (the range of input data values) and a **range** (the corresponding range of visual output values). Here are some commonly used scale functions:

| Scale Function | Description                                                                                                                                                                                                                     | Example                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `scaleLinear`  | A linear scale, frequently used for positioning and sizing SVG elements proportionally. Linear scales are ideal for continuous quantitative data, mapping each data value linearly between the domain and range.                | ```javascript                           |
|                |                                                                                                                                                                                                                                 | const barLengthScale = d3.scaleLinear() |
|                |                                                                                                                                                                                                                                 | .domain([0, 100])                       |
|                |                                                                                                                                                                                                                                 | .range([0, 500]);                       |
| `scaleSqrt`    | A square root scale, useful for scaling the size of SVG elements according to quantities. This scale is helpful when representing area (e.g., for circles) since it makes visual size appear more proportionate to data values. | ```javascript                           |
|                |                                                                                                                                                                                                                                 | const circleSize = d3.scaleSqrt()       |
|                |                                                                                                                                                                                                                                 | .domain([0, 100])                       |
|                |                                                                                                                                                                                                                                 | .range([0, maxRadius]);                 |

### More about D3 Scales

D3 includes many other scales, such as:

- **`scaleLog`**: Useful for data that spans several orders of magnitude, such as population growth or financial data.
- **`scaleTime`**: Specialized for mapping time-based data (e.g., dates).
- **`scaleBand`**: Often used for discrete data, such as categorical data, especially in bar charts.

### Key Terms:

- **Domain**: The input range of data values that you want to map (e.g., `[0, 100]`).
- **Range**: The output range that maps to visual properties (e.g., `[0, 500]`).

By using these scale functions, you can create responsive and dynamic data visualizations that are consistent and visually proportional across a variety of datasets.
