import React, { useState } from "react";
import JsonDataFetch from "../JsonDataFetch";
import PiePlot from "../plots/PiePlot";
const Dash6 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <JsonDataFetch onDataSet={handleDataSet} />
      {dataSet && dataSet.length >= 1 && <PiePlot data={dataSet[0]} />}
    </div>
  );
};

export default Dash6;
