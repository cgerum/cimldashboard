import React from "react";
import { Box, Typography } from "@mui/material";
import TopMenu from "./TopMenu";
import InsightsTwoToneIcon from "@mui/icons-material/InsightsTwoTone";
import Selector from "./Selector";

const Menu = ({
  selectedExperiment,
  setSelectedExperiment,
  experimentsConfig,
}) => {
  return (
    <TopMenu mb="0.1rem" p="0.2rem 0rem" color="#d1d3da">
      <TopMenu gap="0.75rem">
        <InsightsTwoToneIcon sx={{ fontSize: "60px" }} />
        <Typography variant="h4" fontSize="26px" fontWeight="bold">
          Hannah Dashboard
        </Typography>
      </TopMenu>

      <TopMenu gap="2rem">
        <Box mr="10rem">
          <Selector
            selectedExperiment={selectedExperiment}
            setSelectedExperiment={setSelectedExperiment}
            experimentsConfig={experimentsConfig}
          />
        </Box>
      </TopMenu>
    </TopMenu>
  );
};

export default Menu;
