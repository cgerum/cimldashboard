import React, { useEffect, useState, useCallback } from "react";

const JsonDataFetch = ({ onDataSet }) => {
  const [data, setData] = useState(null);

  const jsonPlotData = [
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_roc.json",

    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_pr_curve.json",

    //RESNET18
    "/cifar10_example/trained_models/test/resnet18/plots/test_confusion.json",
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_confusion.json",

    // "/cifar10_example/trained_models/test/resnet18/logs/metrics.jsonl",
    "/cifar10_example/trained_models/test/resnet18/val_results.json",

    //MOBILENETV18
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_pr_curve.json",
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_roc.json",
    // "/cifar10_example/trained_models/test/mobilenetv3_small_100/logs/metrics.jsonl",
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/val_results.json",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataSetCallback = useCallback(onDataSet, []);

  const fetchPlotData = async (path) => {
    try {
      const response = await fetch(path, {
        headers: {
          Accept: "application/json",
        },
      });

      const textContent = await response.text();
      console.log(`Response Text Content from ${path}:`, textContent);

      const jsonData = JSON.parse(textContent);
      return jsonData;
    } catch (error) {
      console.error(`Error loading JSON data from ${path}: ${error.message}`);
      return null;
    }
  };

  const fetchPlotEachData = async () => {
    const promises = jsonPlotData.map(fetchPlotData);
    const response = await Promise.all(promises);

    setData(response);
    dataSetCallback(response);
  };

  useEffect(() => {
    fetchPlotEachData();
  }, [dataSetCallback, fetchPlotEachData]);

  if (!data) {
    return <h1>Lade...</h1>;
  }

  return <div className="uppercase font-bold">ok</div>;
};

export default JsonDataFetch;
