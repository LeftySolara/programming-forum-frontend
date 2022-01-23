import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fec89a",
    },
    secondary: {
      main: "#d8e2dc",
    },
    error: {
      main: "#fd765e",
    },
    warning: {
      main: "#fd7d0d",
    },
  },
});

export default theme;
