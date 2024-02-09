import React from "react";
import { useState } from "react";
import LogsDataFetch from "../LogsDataFetch";
import Dash5 from "./Dash5";

const ParentDash5 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <LogsDataFetch onDataLoaded={handleDataSet} />
      {dataSet && dataSet.length >= 0 && <Dash5 data={dataSet} />}
    </div>
  );
};

export default ParentDash5;
