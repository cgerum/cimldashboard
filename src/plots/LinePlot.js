// import React from "react";
// import Plot from "react-plotly.js";

// const LinePlot = ({ data }) => {
//   console.log(`is Data?${data}`);
//   if (!data || !Array.isArray(data) || data.length === 0) {
//     return <p>keine daten</p>;
//   }

//   const resnetLogsMetrics = data[0].data;

//   const mobilenetvLogsMetrics = data.length > 1 ? data[1].data : [];
//   console.log(mobilenetvLogsMetrics);

//   const epoch0Data = mobilenetvLogsMetrics.filter((entry) => entry.epoch === 0);
//   const epoch1Data = mobilenetvLogsMetrics.filter((entry) => entry.epoch === 1);

//   const epochs = mobilenetvLogsMetrics.map((entry) => entry.epoch);
//   console.log(epochs);
//   const trainLoss = mobilenetvLogsMetrics.map(
//     (entry) => entry.train_classifier_loss
//   );
//   console.log("🚀 ~ LinePlot ~ trainLoss:", trainLoss);
//   const trainAccuracy = mobilenetvLogsMetrics.map(
//     (entry) => entry.train_accuracy
//   );
//   const trainError = mobilenetvLogsMetrics.map((entry) => entry.train_error);
//   const valLoss = mobilenetvLogsMetrics.map(
//     (entry) => entry.val_classifier_loss
//   );
//   const valAccuracy = mobilenetvLogsMetrics.map((entry) => entry.val_accuracy);
//   const valError = mobilenetvLogsMetrics.map((entry) => entry.val_error);

//   const filterResnetLogsMetrics = resnetLogsMetrics.filter(
//     (point) => point.val_accuracy !== undefined && point.epoch !== undefined
//   );

//   console.log(filterResnetLogsMetrics);

//   const filterMobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
//     (point) => point["lr-SGD"] !== undefined && point.step !== undefined
//   );
//   console.log(filterMobilenetvLogsMetrics);
//   const filter1MobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
//     (point) => point.epoch !== undefined && point.val_accuracy !== undefined
//   );

//   console.log(filter1MobilenetvLogsMetrics);

//   const filter2MobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
//     (point) =>
//       point.epoch !== undefined &&
//       point.val_accuracy !== undefined &&
//       point.val_loss !== undefined
//   );
//   console.log(filter2MobilenetvLogsMetrics);

//   const filter3MobilenetvLogsMetrics = mobilenetvLogsMetrics.filter(
//     (point) =>
//       point.epoch !== undefined &&
//       point.train_accuracy !== undefined &&
//       point.train_loss !== undefined
//   );
//   console.log(filter3MobilenetvLogsMetrics);

//   if (filterResnetLogsMetrics.length === 0) {
//     return <p>Keine daten.</p>;
//   }

//   // const layout = {
//   //   title: "ResNet: Validierungsverlust und -genauigkeit im Epochenvergleich",

//   //   xaxis: {
//   //     title: "Epoch",
//   //   },
//   //   yaxis: {
//   //     title: "Validation Accuracy /Loss",
//   //   },
//   //   width: 550,
//   //   height: 600,

//     // font: {
//     //   family: "Arial, sans-serif ",
//     //   size: 20,
//     //   color: "black",
//     // },
//     paper_bgcolor: "rgba(0, 0, 0, 0)",
//     plot_bgcolor: "rgba(0, 0, 0, 0)",
//     color: "#d1d3da",

//     margin: {
//       l: 55,
//       r: 20,
//       b: 50,
//       t: 80,
//     },
//   };

//   const layout2 = {
//     title: " Mobilenetv3: lr-SGD v step",
//     xaxis: {
//       title: "Step",
//     },
//     yaxis: {
//       title: "lr-SGD",
//     },
//   };

//   const layout3 = {
//     title:
//       "Mobilenetv3: Validierungsloss/accuracy und  Trainloss/accuracy  im Epochenvergleich",
//     xaxis: {
//       title: "Epoch",
//     },
//     yaxis: {
//       title: "Validation/Train Accuracy /Loss",
//     },
//   };

//   const resnetPlot = [
//     {
//       x: filterResnetLogsMetrics.map((point) => point.epoch),
//       y: filterResnetLogsMetrics.map((point) => point.val_accuracy),
//       type: "bar",
//       mode: "lines+markers",
//       name: "Validation Accuracy ",
//     },
//     {
//       x: filterResnetLogsMetrics.map((point) => point.epoch),
//       y: filterResnetLogsMetrics.map((point) => point.val_loss),
//       type: "bar",
//       mode: "lines",
//       name: "Validation Loss",
//     },
//   ];

//   const mobilLernRatePlot = [
//     {
//       x: filterMobilenetvLogsMetrics.map((point) => point.step),
//       y: filterMobilenetvLogsMetrics.map((point) => point["lr-SGD"]),
//       type: "bar",
//       mode: "lines",
//       name: "lr-SGD v step",
//     },
//   ];

//   const mobilEpochPlot = [
//     {
//       x: filter2MobilenetvLogsMetrics.map((point) => point.epoch),
//       y: filter2MobilenetvLogsMetrics.map((point) => point.val_accuracy),
//       type: "scatter",
//       mode: "lines",
//       name: "val_accuracy",
//     },
//     {
//       x: filter2MobilenetvLogsMetrics.map((point) => point.epoch),
//       y: filter2MobilenetvLogsMetrics.map((point) => point.val_loss),
//       type: "scatter",
//       mode: "lines",
//       name: "val_loss",
//     },
//     {
//       x: filter3MobilenetvLogsMetrics.map((point) => point.epoch),
//       y: filter3MobilenetvLogsMetrics.map((point) => point.train_accuracy),
//       type: "scatter",
//       mode: "lines",
//       name: "train_accuracy",
//     },
//     {
//       x: filter3MobilenetvLogsMetrics.map((point) => point.epoch),
//       y: filter3MobilenetvLogsMetrics.map((point) => point.train_loss),
//       type: "scatter",
//       mode: "lines",
//       name: "train_loss",
//     },
//   ];

//   return (
//     <div>
//       {/* <Plot data={resnetPlot} layout={layout} /> */}
//       {/* <Plot data={mobilEpochPlot} layout={layout3} />
//       <Plot data={mobilLernRatePlot} layout={layout2} /> */}

//       <Plot
//         data={[
//           {
//             x: epochs,
//             y: trainLoss,
//             type: "bar",
//             name: "Training Loss",
//             marker: { color: "#0b8f78" },
//           },
//           {
//             x: epochs,
//             y: trainAccuracy,
//             type: "bar",
//             name: "Training Accuracy",
//             marker: { color: "#0ebfa0" },
//           },
//           {
//             x: epochs,
//             y: trainError,
//             type: "bar",
//             name: "Training Error",
//             marker: { color: "#12efc8" },
//           },
//           {
//             x: epochs,
//             y: valLoss,
//             type: "bar",
//             name: "Validation Loss",
//             marker: { color: "#6b6d74" },
//           },
//           {
//             x: epochs,
//             y: valAccuracy,
//             type: "bar",
//             name: "Validation Accuracy",
//             marker: { color: "yellow" },
//           },
//           {
//             x: epochs,
//             y: valError,
//             type: "bar",
//             name: "Validation Error",
//             marker: { color: "lightyellow" },
//           },
//         ]}
//         layout={{
//           title: "Metrics Over Epochs",
//           xaxis: { title: "Epochs" },
//           yaxis: { title: "Metrics" },
//           barmode: "stack",
//           width: "100%",
//           height: "100%",
//           responsive: true,

//           // font: {
//           //   family: "Arial, sans-serif ",
//           //   size: 20,
//           //   color: "black",
//           // },
//           paper_bgcolor: "rgba(0, 0, 0, 0)",
//           plot_bgcolor: "rgba(0, 0, 0, 0)",
//           margin: {
//             l: 55,
//             r: 20,
//             b: 50,
//             t: 80,
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default LinePlot;

// // [12:19] Christoph Gerum
// // https://www.datapine.com/blog/dashboard-design-principles-and-best-practices/
// // 25 Dashboard Design Principles, Best Practices & How To's
// // Learn how to design a dashboard with these top 25 dashboard design principles, best practices & guidelines for good dashboard development!
// // [12:19] Christoph Gerum
// // https://www.datapine.com/blog/dashboard-design-principles-and-best-practices/
// // 25 Dashboard Design Principles, Best Practices & How To's
// // Learn how to design a dashboard with these top 25 dashboard design principles, best practices & guidelines for good dashboard development!
// // [12:20] Christoph Gerum
// // https://www.datapine.com/blog/dashboard-design-principles-and-best-practices/
// // 25 Dashboard Design Principles, Best Practices & How To's
// // Learn how to design a dashboard with these top 25 dashboard design principles, best practices & guidelines for good dashboard development!
