import React from "react";
import Plot from "react-plotly.js";

const Dash5 = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Keine Daten </p>;
  }

  const mobilenetvLogsMetrics = data.length > 1 ? data[1].data : [];

  const filterMobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
    (point) => point["lr-SGD"] !== undefined && point.step !== undefined
  );
  console.log(filterMobilenetvLogsMetrics);
  const learningRates = filterMobilenetvLogsMetrics.map(
    (point) => point["lr-SGD"]
  );
  const dates = filterMobilenetvLogsMetrics.map((point) => point.date);

  return (
    <div>
      <Plot
        data={[
          {
            x: dates,
            y: learningRates,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "blue" },
            line: { color: "blue" },
            name: "Learning Rate",
          },
        ]}
        layout={{
          title: "Learning Rate mit data ",
          font: { color: "#d1d3da" },
          xaxis: { title: "Date" },
          yaxis: { title: "Learning Rate" },
          width: "100%",
          height: "100%",
          responsive: true,
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          plot_bgcolor: "rgba(0, 0, 0, 0)",
          margin: {
            l: 55,
            r: 20,
            b: 50,
            t: 80,
          },
        }}
      />
    </div>
  );
};

export default Dash5;
