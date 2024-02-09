import React, { useState } from "react";
import JsonDataFetch from "../JsonDataFetch";

import ConfusionMatrixPlot from "../plots/ConfusionMatrixPlot";

const Dashboard1 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />
      {dataSet && dataSet.length >= 1 && (
        <ConfusionMatrixPlot
          data={dataSet[2].data}
          categories={dataSet[2].categories}
        />
      )}
    </div>
  );
};

export default Dashboard1;
