import React from "react";
import Plot from "react-plotly.js";

const RocPlot = ({ data }) => {
  console.log("🚀 ~ RocPlot ~ data:", data);
  const { fpr, tpr, categories } = data;

  const plotData = categories.map((category, index) => ({
    x: fpr[index],
    y: tpr[index],
    type: "scatter",
    mode: "lines",
    name: category,
    marker: {
      size: 800,
    },
  }));

  const layout = {
    title: "MultiClassROC",
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
      l: 25,
      r: 20,
      b: 50,
      t: 80,
    },
  };

  return (
    <div>
      <Plot data={plotData} layout={layout} />
    </div>
  );
};

export default RocPlot;
