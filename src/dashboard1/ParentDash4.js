import React from "react";
import { useState } from "react";
import LogsDataFetch from "../LogsDataFetch";
import Dash4 from "./Dash4";

const ParentDash4 = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };
  return (
    <div>
      <LogsDataFetch onDataLoaded={handleDataSet} />
      {dataSet && dataSet.length >= 0 && <Dash4 data={dataSet} />}
    </div>
  );
};

export default ParentDash4;
