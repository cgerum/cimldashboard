import React from "react";
import Plot from "react-plotly.js";
const color = [
  [0, "rgb(187, 222, 251)"],
  [0.5, "#191D88"],
  [1, "rgb(0, 66, 255)"],
];

const ConfusionMatrixPlot = ({ data, categories, title }) => {
  const layout = {
    title: title || "Confusion Matrix",
    font: { color: "#d1d3da" },
    xaxis: {
      title: "Predicted",
      font: { color: "#d1d3da" },
      tickvals: [...Array(categories.length).keys()],
      ticktext: categories,
      tickfont: { color: "#d1d3da" },
    },
    yaxis: {
      title: "Actual",
      font: { color: "#d1d3da" },
      tickvals: [...Array(categories.length).keys()],
      ticktext: categories,
      tickfont: { color: "#d1d3da" },
    },
    width: "100%",
    height: "100%",
    color: "#d1d3da",
    margin: {
      l: 100,
      r: 0,
      b: 50,
      t: 50,
    },
    paper_bgcolor: "rgba(0, 0, 0, 0)",
    plot_bgcolor: "rgba(0, 0, 0, 0)",
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Plot
        data={[
          {
            z: data,
            type: "heatmap",
            colorscale: color,
          },
        ]}
        layout={layout}
      />
    </div>
  );
};

export default ConfusionMatrixPlot;
