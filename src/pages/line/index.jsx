import React from "react";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Bar = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header title="Line CHART" subtitle="simple line chart" />
      <LineChart />
    </Box>
  );
};

export default Bar;
