import React, { useState } from "react";
import RocPlot from "./plots/RocPlot";
import ConfusionMatrixPlot from "./plots/ConfusionMatrixPlot";
import CurvePlot from "./plots/CurvePlot";
import JsonDataFetch from "./JsonDataFetch";

const JsonParentData = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };

  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />

      {dataSet && dataSet.length >= 1 && <RocPlot data={dataSet[0]} />}
      {dataSet && dataSet.length >= 1 && <CurvePlot data={dataSet[1]} />}

      {dataSet && dataSet.length >= 1 && (
        <ConfusionMatrixPlot
          data={dataSet[2].data}
          categories={dataSet[2].categories}
        />
      )}
      {dataSet && dataSet.length >= 1 && (
        <ConfusionMatrixPlot
          data={dataSet[3].data}
          categories={dataSet[3].categories}
        />
      )}
    </div>
  );
};

export default JsonParentData;
