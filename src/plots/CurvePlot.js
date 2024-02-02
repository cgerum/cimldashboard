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
    xaxis: {
      title: "Recall",
    },
    yaxis: {
      title: "Precision",
    },
  };

  return <Plot data={plotData} layout={layout} />;
};

export default Curve;
