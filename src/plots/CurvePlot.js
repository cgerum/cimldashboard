import React from "react";
import Plot from "react-plotly.js";

const Curve = ({ data }) => {
  const { precision, recall, categories } = data;

  const plotData = categories.map((category, index) => ({
    x: precision[index],
    y: recall[index],
    type: "scatter",
    mode: "lines",
    name: category,
  }));

  const layout = {
    title: "MultiClassPrecisionRecallCurve",
    font: { color: "#d1d3da" },
    xaxis: {
      title: "Recall",
    },
    yaxis: {
      title: "Precision",
    },
    width: "100%",
    height: "100%",

    // font: {
    //   family: "Arial, sans-serif ",
    //   size: 20,
    //   color: "black",
    // },
    paper_bgcolor: "rgba(0, 0, 0, 0)",
    plot_bgcolor: "rgba(0, 0, 0, 0)",
    margin: {
      l: 55,
      r: 20,
      b: 50,
      t: 80,
    },
  };

  return <Plot data={plotData} layout={layout} />;
};

export default Curve;
