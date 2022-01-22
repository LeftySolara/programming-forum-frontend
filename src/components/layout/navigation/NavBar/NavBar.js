import React, { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavBarLink from "./NavBarLink";

/**
 * A responsive navigation bar. On mobile, navigation buttons are
 * replaced with a menu drawer.
 *
 * @returns A responsive navigation bar component.
 */
const NavBar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const navBarLinks = (
    <>
      <NavBarLink primary="Sign Up" to="/signup" />
      <NavBarLink primary="Log In" to="/login" />
    </>
  );

  const drawer = (
    <div>
      <List>{navBarLinks}</List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleDrawerToggle = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          )}
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            SegmentationFault
          </Typography>
          {!isMobile && (
            <List
              sx={{ display: "flex", flexDirection: "row", width: "180px" }}
            >
              {navBarLinks}
            </List>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: 120 }, flexShrink: { sm: 0 } }}>
        <Drawer
          container={container}
          variant="temporary"
          open={drawerIsOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 120 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
