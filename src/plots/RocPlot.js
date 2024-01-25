import React from "react";
import Plot from "react-plotly.js";

const RocPlot = ({ data }) => {
  const { fpr, tpr, categories } = data;

  const chartData = categories.map((category, index) => ({
    x: fpr[index],
    y: tpr[index],
    type: "scatter",
    mode: "lines",
    name: category,
  }));

  const layout = {
    title: "MultiClassROC",
    xaxis: {
      title: "Recall",
    },
    yaxis: {
      title: "Precision",
    },
  };

  return <Plot data={chartData} layout={layout} />;
};

export default RocPlot;
