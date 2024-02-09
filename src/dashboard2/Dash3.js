import React from "react";
import Plot from "react-plotly.js";

const Dash3 = ({ data }) => {
  console.log("🚀 🚀 🚀 🚀 🚀 🚀 ~ Dash3 ~ data:", data);
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Keine Daten </p>;
  }

  const resnetLogsMetrics = data[0].data;

  const filterResnetLogsMetrics = resnetLogsMetrics.filter(
    (point) => point.val_accuracy !== undefined && point.epoch !== undefined
  );
  const resnetPlot = [
    {
      x: filterResnetLogsMetrics.map((point) => point.epoch),
      y: filterResnetLogsMetrics.map((point) => point.val_accuracy),
      type: "scatter",
      mode: "lines+markers",
      name: "Validation Accuracy ",
      marker: { color: "#191D88" },
    },
    {
      x: filterResnetLogsMetrics.map((point) => point.epoch),
      y: filterResnetLogsMetrics.map((point) => point.val_loss),
      type: "scatter",
      mode: "lines+markers",
      name: "Validation Loss",
      marker: { color: "#337CCF" },
    },
  ];
  const layout = {
    title: "ResNet: Validierungsverlust und -genauigkeit im Epochenvergleich",
    font: { color: "#d1d3da" },
    xaxis: {
      title: "Epoch",
    },
    yaxis: {
      title: "Validation Accuracy /Loss",
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

  return (
    <div>
      <Plot data={resnetPlot} layout={layout} />
    </div>
  );
};

export default Dash3;
