import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

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
    seperator: "#ececec",
  },
  typography: {
    link: {
      color: blue[500],
    },
  },
});

export default theme;
