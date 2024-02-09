import { Box, useMediaQuery } from "@mui/material";
import DashBox from "../layout/DashBox";
import Dash1 from "../dashboard2/Dash1";
import ParentDash2 from "../dashboard2/ParentDash2";
import ParentDash3 from "../dashboard2/ParentDash3";

const gridTemplate = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"


`;

const gridTemplateSmall = `
"a "
"a "
"a"
"a "
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d "
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"


`;
const Resnet = () => {
  const isSmallScreen = useMediaQuery("(min-width:800px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="0.8rem"
      sx={
        isSmallScreen
          ? {
              gridTemplateColumns: "repeat(2 ,minmax(370px,1fr))",
              gridTemplateRows: "repeat(10 ,minmax(60px,1fr))",
              gridTemplateAreas: gridTemplate,
            }
          : {
              gridTemplateAreas: gridTemplateSmall,
              gridTemplateColumns: "1fr",
              gridTemplateRows: "80px",
            }
      }
    >
      <DashBox />
      <DashBox gridArea="a"></DashBox>
      <DashBox gridArea="b">
        <Dash1 />
      </DashBox>
      <DashBox gridArea="c"></DashBox>
      <DashBox gridArea="d">
        <ParentDash3 />
      </DashBox>
      <DashBox gridArea="e"></DashBox>
      <DashBox gridArea="f"></DashBox>
      <DashBox gridArea="g"> </DashBox>
      <DashBox gridArea="h">
        {" "}
        <ParentDash2 />
      </DashBox>
      <DashBox gridArea="i"></DashBox>
      <DashBox gridArea="j"></DashBox>
    </Box>
  );
};

export default Resnet;
