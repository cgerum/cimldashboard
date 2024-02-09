import React from "react";
import { useState } from "react";
import LogsDataFetch from "../LogsDataFetch";
import Dash2 from "./Dash2";

const ParentDash2 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <LogsDataFetch onDataLoaded={handleDataSet} />
      {dataSet && dataSet.length >= 0 && <Dash2 data={dataSet} />}
    </div>
  );
};

export default ParentDash2;
