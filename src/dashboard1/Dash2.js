import React, { useState } from "react";
import JsonDataFetch from "../JsonDataFetch";
import CurvePlot from "../plots/CurvePlot";

const Dash2 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />
      {dataSet && dataSet.length >= 1 && <CurvePlot data={dataSet[1]} />}
    </div>
  );
};

export default Dash2;
