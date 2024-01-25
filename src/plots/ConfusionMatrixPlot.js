import React from "react";
import Plot from "react-plotly.js";
const color = [
  [0, "rgb(187, 222, 251)"],
  [0.5, "rgb(77, 208, 225)"],
  [1, "rgb(0, 66, 255)"],
];

const ConfusionMatrixPlot = ({ data, categories, title }) => {
  const layout = {
    title: title || "Confusion Matrix",
    xaxis: {
      title: "Predicted",
      tickvals: [...Array(categories.length).keys()],
      ticktext: categories,
    },
    yaxis: {
      title: "Actual",
      tickvals: [...Array(categories.length).keys()],
      ticktext: categories,
    },
  };

  return (
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
  );
};

export default ConfusionMatrixPlot;
