import React, { useState } from "react";

import { useWindowWidth } from "@react-hook/window-size";

import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// TODO: Make these into links once routing is implemented
const LoginButton = <Button color="inherit">Log In</Button>;
const SignUpButton = <Button color="inherit">Sign Up</Button>;

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

  const handleDrawerToggle = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem>{SignUpButton}</ListItem>
        <ListItem>{LoginButton}</ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

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
          {!isMobile && SignUpButton}
          {!isMobile && LoginButton}
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
