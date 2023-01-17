import Header from "components/Header";
import React from "react";
import BreakdownChart from "components/BreakdownChart";
import { Box } from "@mui/material";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of sales by category" />
      <Box m="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
