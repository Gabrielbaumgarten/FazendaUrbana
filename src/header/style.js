import { makeStyles } from "@material-ui/styles";
import Theme from './../theme';

const useStyles = makeStyles({
  header: {
    width: "100vw",
    height: "10vh",
    maxHeight: 40,
    background: Theme.palette.secondary.main,
    paddingLeft: 32
  },
  buttons:{
      paddingLeft: 24,
      paddingRight: 24,
      cursor: 'pointer',
      font: Theme.typography.button
  },
  buttonsSelected:{
      paddingLeft: 24,
      paddingRight: 24,
      cursor: 'pointer',
      fontWeight: 'bold !important',
      color:  Theme.palette.primary.main
  }
});

export default useStyles;
