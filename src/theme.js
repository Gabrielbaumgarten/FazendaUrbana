import { createTheme } from "@material-ui/core/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#23B258",
    },
    secondary: {
      main: "#FFFFFF",
    },
    textNeutral: {
      main: '#292929',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontStyle: "normal",
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
    },
  },
});

export default Theme;
