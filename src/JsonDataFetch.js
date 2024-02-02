import React, { useEffect, useState, useCallback } from "react";

const JsonDataFetch = ({ onDataSet }) => {
  const [data, setData] = useState(null);

  const jsonPlotData = [
    //MOBILENETV18

    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_roc.json",
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_pr_curve.json",
    "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_confusion.json",

    //RESNET18
    "/cifar10_example/trained_models/test/resnet18/plots/test_confusion.json",

    // "/cifar10_example/trained_models/test/resnet18/val_results.json",

    // "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_pr_curve.json",
    // "/cifar10_example/trained_models/test/mobilenetv3_small_100/plots/test_roc.json",

    // "/cifar10_example/trained_models/test/mobilenetv3_small_100/val_results.json",
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
  }, [dataSetCallback]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return <div className="uppercase font-bold"></div>;
};

export default JsonDataFetch;
