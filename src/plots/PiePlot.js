import React from "react";
import Plot from "react-plotly.js";

const PiePlot = ({ data }) => {
  //const categories = data.categories;
  const fpr = data.fpr;
  const tpr = data.tpr;

  const avgFpr =
    fpr.reduce((acc, currCategory) => {
      const categoryFprSum = currCategory.reduce(
        (sum, fprValue) => sum + fprValue,
        0
      );
      const categoryAvgFpr = categoryFprSum / currCategory.length;
      return acc + categoryAvgFpr;
    }, 0) / fpr.length;
  const avgTpr =
    tpr.reduce((acc, currCategory) => {
      const categoryTprSum = currCategory.reduce(
        (sum, tprValue) => sum + tprValue,
        0
      );
      const categoryAvgTpr = categoryTprSum / currCategory.length;
      return acc + categoryAvgTpr;
    }, 0) / tpr.length;

  const pieData = [
    {
      labels: ["Avg FPR", "Avg TPR"],
      values: [avgFpr, avgTpr],
      type: "pie",
      hoverinfo: "label+percent",
      marker: {
        colors: ["#1450A3", "#191D88"],
      },
    },
  ];

  return (
    <Plot
      data={pieData}
      layout={{
        title: " FPR und TPR für Alle Categories",
        font: { color: "#d1d3da" },
        showlegend: true,
        width: 500,
        height: 300,
        responsive: true,
        paper_bgcolor: "rgba(0, 0, 0, 0)",
        plot_bgcolor: "rgba(0, 0, 0, 0)",
        margin: {
          l: 150,
          r: 20,
          b: 50,
          t: 80,
        },
      }}
    />
  );
};

export default PiePlot;
