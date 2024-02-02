import React from "react";
import Plot from "react-plotly.js";

const LinePlot = ({ data }) => {
  console.log(`is Data?${data}`);
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>keine daten</p>;
  }

  const resnetLogsMetrics = data[0].data;

  const mobilenetvLogsMetrics = data.length > 1 ? data[1].data : [];
  console.log(mobilenetvLogsMetrics);

  const filterResnetLogsMetrics = resnetLogsMetrics.filter(
    (point) => point.val_accuracy !== undefined && point.epoch !== undefined
  );

  console.log(filterResnetLogsMetrics);

  const filterMobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
    (point) => point["lr-SGD"] !== undefined && point.step !== undefined
  );
  console.log(filterMobilenetvLogsMetrics);
  const filter1MobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
    (point) => point.epoch !== undefined && point.val_accuracy !== undefined
  );

  console.log(filter1MobilenetvLogsMetrics);

  const filter2MobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
    (point) =>
      point.epoch !== undefined &&
      point.val_accuracy !== undefined &&
      point.val_loss !== undefined
  );
  console.log(filter2MobilenetvLogsMetrics);

  const filter3MobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
    (point) =>
      point.epoch !== undefined &&
      point.train_accuracy !== undefined &&
      point.train_loss !== undefined
  );
  console.log(filter3MobilenetvLogsMetrics);

  if (filterResnetLogsMetrics.length === 0) {
    return <p>Keine daten.</p>;
  }

  const layout = {
    title: "ResNet: Validierungsverlust und -genauigkeit im Epochenvergleich",

    xaxis: {
      title: "Epoch",
    },
    yaxis: {
      title: "Validation Accuracy /Loss",
    },
  };

  const layout2 = {
    title: " Mobilenetv3: lr-SGD v step",
    xaxis: {
      title: "Step",
    },
    yaxis: {
      title: "lr-SGD",
    },
  };

  const layout3 = {
    title:
      "Mobilenetv3: Validierungsloss/accuracy und  Trainloss/accuracy  im Epochenvergleich",
    xaxis: {
      title: "Epoch",
    },
    yaxis: {
      title: "Validation Accuracy /Loss",
    },
  };

  const resnetPlot = [
    {
      x: filterResnetLogsMetrics.map((point) => point.epoch),
      y: filterResnetLogsMetrics.map((point) => point.val_accuracy),
      type: "scatter",
      mode: "lines",
      name: "Validation Accuracy ",
    },
    {
      x: filterResnetLogsMetrics.map((point) => point.epoch),
      y: filterResnetLogsMetrics.map((point) => point.val_loss),
      type: "scatter",
      mode: "lines",
      name: "Validation Loss",
    },
  ];

  const mobilLernRatePlot = [
    {
      x: filterMobilenetvLogsMetrics.map((point) => point.step),
      y: filterMobilenetvLogsMetrics.map((point) => point["lr-SGD"]),
      type: "scatter",
      mode: "lines",
      name: "lr-SGD v step",
    },
  ];

  const mobilEpochPlot = [
    {
      x: filter2MobilenetvLogsMetrics.map((point) => point.epoch),
      y: filter2MobilenetvLogsMetrics.map((point) => point.val_accuracy),
      type: "scatter",
      mode: "lines",
      name: "val_accuracy",
    },
    {
      x: filter2MobilenetvLogsMetrics.map((point) => point.epoch),
      y: filter2MobilenetvLogsMetrics.map((point) => point.val_loss),
      type: "scatter",
      mode: "lines",
      name: "val_loss",
    },
    {
      x: filter3MobilenetvLogsMetrics.map((point) => point.epoch),
      y: filter3MobilenetvLogsMetrics.map((point) => point.train_accuracy),
      type: "scatter",
      mode: "lines",
      name: "train_accuracy",
    },
    {
      x: filter3MobilenetvLogsMetrics.map((point) => point.epoch),
      y: filter3MobilenetvLogsMetrics.map((point) => point.train_loss),
      type: "scatter",
      mode: "lines",
      name: "train_loss",
    },
  ];

  return (
    <div>
      <Plot data={resnetPlot} layout={layout} />
      <Plot data={mobilEpochPlot} layout={layout3} />
      <Plot data={mobilLernRatePlot} layout={layout2} />
    </div>
  );
};

export default LinePlot;
