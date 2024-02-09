import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashBox = styled(Box)(() => ({
  backgroundColor: "#2d2d34",
  color: "#d1d3da",

  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

export default DashBox;
