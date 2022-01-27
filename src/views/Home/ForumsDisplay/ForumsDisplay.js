import React from "react";
import { Paper } from "@mui/material";

const ForumsDisplay = (props) => {
  const { children } = props;

  return (
    <Paper elevation={0} sx={{ width: "80%", border: "2px solid black" }}>
      {children}
    </Paper>
  );
};

export default ForumsDisplay;
