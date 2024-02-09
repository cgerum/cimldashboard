import React from "react";
import { useState } from "react";
import LogsDataFetch from "../LogsDataFetch";
import Dash3 from "./Dash3";

const ParentDash3 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <LogsDataFetch onDataLoaded={handleDataSet} />
      {dataSet && dataSet.length >= 0 && <Dash3 data={dataSet} />}
    </div>
  );
};

export default ParentDash3;
