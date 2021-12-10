import { makeStyles } from "@material-ui/styles";
import Theme from "../theme";

const useStyles = makeStyles({
  infoRealTime: {
    width: "100vw",
    height: "10vh",
    maxHeight: 64,
    background: Theme.palette.primary.main,
    paddingLeft: 40,
    color: Theme.palette.textNeutral.main
  },
  logo:{
      height: '70%'
  },
  buttons:{
      paddingLeft: 24,
      paddingRight: 24,
      cursor: 'pointer'
  }
});

export default useStyles;
