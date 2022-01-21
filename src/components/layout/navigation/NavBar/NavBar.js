import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            SegmentationFault
          </Typography>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Log In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
