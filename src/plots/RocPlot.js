import React from "react";
import Plot from "react-plotly.js";

const RocPlot = ({ data }) => {
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
    xaxis: {
      title: "Recall",
    },
    yaxis: {
      title: "Precision",
    },

    width: 800,
    height: 600,

    // font: {
    //   family: "Arial, sans-serif ",
    //   size: 20,
    //   color: "black",
    // },
    // paper_bgcolor: "blue",
    // plot_bgcolor: "lightgrey",
  };

  return (
    <div>
      <Plot data={plotData} layout={layout} />
    </div>
  );
};

export default RocPlot;
