# Awesome D3.js Learning Resources

## Introduction

D3.js (Data-Driven Documents) is a powerful JavaScript library for visualizing data using web standards. This README provides useful resources and code examples to help you get started with D3.js.

## Learning Resources

- **D3.js In-Depth**: A comprehensive resource for learning D3.js.
  - [D3 In-Depth](https://www.d3indepth.com/)
- **D3: Start to Finish**: A complete guide to mastering D3.js.

---

## Scales in D3.js

### Linear Scale

A linear scale maps input domain values to output range values. Here’s an example of creating a linear scale:

```javascript
const degreeScale = d3.scaleLinear().domain([0, 100]).range([0, 360]);

degreeScale(50); // Output: 180
```
