// import JsonParentData from "./JsonParentData";
// import LogsParentData from "./LogsParentData";
// import { Box } from "@mui/material";
// import D from "./mui/D";
// import Menu from "./mui/Menu";
// function App({ data }) {
//   return (
//     // <div>
//     //   <JsonParentData />
//     //   <LogsParentData />
//     // </div>

//     <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
//       <Menu />
//       <D />
//     </Box>
//   );
// }

// export default App;
import React, { useState } from "react";
import Resnet from "./experminte/Resnet";
import Mobil from "./experminte/Mobil";
import Menu from "./layout/Design";
import { Box } from "@mui/material";

const experimentsConfig = [
  { id: "resnet", name: "resnet", component: Resnet },
  { id: "mobil", name: "mobil", component: Mobil },
];

const App = () => {
  const [selectedExperiment, setSelectedExperiment] = useState("mobil");

  const renderExperimentComponent = () => {
    if (!selectedExperiment) {
      return null;
    }

    const selectedComponent = experimentsConfig.find(
      (exp) => exp.id === selectedExperiment
    );

    return selectedComponent
      ? React.createElement(selectedComponent.component)
      : null;
  };

  return (
    <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
      <Menu
        selectedExperiment={selectedExperiment}
        setSelectedExperiment={setSelectedExperiment}
        experimentsConfig={experimentsConfig}
      />
      {renderExperimentComponent()}
    </Box>
  );
};

export default App;
