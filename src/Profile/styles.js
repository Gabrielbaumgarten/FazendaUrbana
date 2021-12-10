import { makeStyles } from "@material-ui/styles";
import Theme from "../theme";

const useStyles = makeStyles({
  profilePhoto:{
      height: '8vh',
      width: '8vh',
      borderRadius: '50%',
      overflow: 'hidden'
  },
  photo: {
    height: '100%'
  },
  name:{
      color: Theme.palette.secondary.main
  },
  buttons:{
      paddingLeft: 24,
      paddingRight: 24,
      cursor: 'pointer'
  }
});

export default useStyles;
