import { useState } from "react";
import LinePlot from "./plots/LinePlot";
import LogsDataFetch from "./LogsDataFetch";
const LogsParentData = () => {
  const [dataSet, setDataSet] = useState(null);

  const handleDataSet = (data) => {
    setDataSet(data);
  };

  return (
    <div>
      <LogsDataFetch onDataLoaded={handleDataSet} />

      {dataSet && dataSet.length >= 0 && <LinePlot data={dataSet} />}
    </div>
  );
};
export default LogsParentData;
