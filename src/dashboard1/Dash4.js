import Plot from "react-plotly.js";

const Dash4 = ({ data }) => {
  console.log("🚀 ~ Dash4 ~ data:", data);
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>keine daten</p>;
  }

  const mobilenetvLogsMetrics = data.length > 1 ? data[1].data : [];
  console.log(mobilenetvLogsMetrics);
  const epochs = mobilenetvLogsMetrics.map((point) => point.epoch);
  console.log(epochs);
  const trainLoss = mobilenetvLogsMetrics.map(
    (point) => point.train_classifier_loss
  );
  console.log("🚀 ~ LinePlot ~ trainLoss:", trainLoss);
  const trainAccuracy = mobilenetvLogsMetrics.map(
    (point) => point.train_accuracy
  );
  const trainError = mobilenetvLogsMetrics.map((point) => point.train_error);
  const valLoss = mobilenetvLogsMetrics.map(
    (point) => point.val_classifier_loss
  );
  const valAccuracy = mobilenetvLogsMetrics.map((point) => point.val_accuracy);
  const valError = mobilenetvLogsMetrics.map((point) => point.val_error);

  return (
    <div>
      <Plot
        data={[
          {
            x: epochs,
            y: trainLoss,
            type: "bar",
            name: "Training Loss",
            marker: { color: "#4F6F52" },
          },
          {
            x: epochs,
            y: trainAccuracy,
            type: "bar",
            name: "Training Accuracy",
            marker: { color: "#739072" },
          },
          {
            x: epochs,
            y: trainError,
            type: "bar",
            name: "Training Error",
            marker: { color: "#86A789" },
          },
          {
            x: epochs,
            y: valLoss,
            type: "bar",
            name: "Validation Loss",
            marker: { color: "#191D88" },
          },
          {
            x: epochs,
            y: valAccuracy,
            type: "bar",
            name: "Validation Accuracy",
            marker: { color: "#1450A3" },
          },
          {
            x: epochs,
            y: valError,
            type: "bar",
            name: "Validation Error",
            marker: { color: "#337CCF" },
          },
        ]}
        layout={{
          title: "Metrics Epochs",
          xaxis: { title: "Epochs" },
          yaxis: { title: "Metrics" },
          font: { color: "#d1d3da" },
          barmode: "stack",
          width: "100%",
          height: "100%",
          responsive: true,

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
        }}
      />
    </div>
  );
};

export default Dash4;
