import Plot from "react-plotly.js";

const Dash2 = ({ data }) => {
  console.log("🚀 🚀 🚀 🚀 🚀 🚀 ~ Dash2 ~ data:", data);
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Keine Daten </p>;
  }
  const history = data.length > 1 ? data[2].data : [];
  console.log(history);

  const model = history.map((point) => point.model);
  const classifier_loss = history.map((point) => point.val_classifier_loss);
  const val_accuracy = history.map((point) => point.val_accuracy);
  const val_f1 = history.map((point) => point.val_f1);

  return (
    <div>
      <Plot
        data={[
          {
            x: model,
            y: classifier_loss,
            type: "bar",
            name: "Classifier Loss",
            marker: {
              color: "#191D88",
            },
          },
          {
            x: model,
            y: val_accuracy,
            type: "bar",
            name: "Val-accuracy",
            marker: {
              color: "#1450A3",
            },
          },
          {
            x: model,
            y: val_f1,
            type: "bar",
            name: "F1 Score",
            marker: {
              color: "#337CCF",
            },
          },
        ]}
        layout={{
          barmode: "group",
          title: "Model Vergleich",
          font: { color: "#d1d3da" },
          xaxis: {
            title: "Models",
          },
          yaxis: {
            title: "Values",
          },
          width: "100%",
          height: "100%",
          color: "#d1d3da",
          margin: {
            l: 100,
            r: 0,
            b: 50,
            t: 50,
          },
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          plot_bgcolor: "rgba(0, 0, 0, 0)",
          responsive: true,
        }}
      />
    </div>
  );
};

export default Dash2;
