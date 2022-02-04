import React from "react";
import { Paper } from "@mui/material";

const ForumsDisplay = (props) => {
  const { children } = props;

  return (
    <Paper elevation={6} sx={{ width: "80%" }}>
      {children}
    </Paper>
  );
};

export default ForumsDisplay;
