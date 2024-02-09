import React, { useState } from "react";
import JsonDataFetch from "../JsonDataFetch";

import ConfusionMatrixPlot from "../plots/ConfusionMatrixPlot";
const Dash1 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />
      {dataSet && dataSet.length >= 1 && (
        <ConfusionMatrixPlot
          data={dataSet[3].data}
          categories={dataSet[3].categories}
        />
      )}
    </div>
  );
};

export default Dash1;
