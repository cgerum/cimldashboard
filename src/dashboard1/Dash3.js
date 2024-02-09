import React, { useState } from "react";
import JsonDataFetch from "../JsonDataFetch";
import RocPlot from "../plots/RocPlot";
const Dash3 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />
      {dataSet && dataSet.length >= 1 && <RocPlot data={dataSet[0]} />}
    </div>
  );
};

export default Dash3;
