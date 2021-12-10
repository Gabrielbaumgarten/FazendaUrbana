import { makeStyles } from "@material-ui/styles";
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles({
  drawer: {
    width: "25vw",
    height: 'calc(100vh - 40px - 64px)',
    marginTop: 104,
    "& .MuiDrawer-paper": {
      width: "25vw",
      height: 'calc(100vh - 40px - 64px)',
      marginTop: 104,
      maxWidth: 325,
      background: "white",
      boxShadow: "0px 4px 8px rgba(36, 35, 32, 0.25)",
    },
  },
  tab: {
      color: '#CCCCCC !important'
  },
  tabSelected: {
      fontWeight: 'bold !important',
      color: '#292929 !important',
  },
  tabSelectedModal: {
      fontWeight: 'bold !important',
      color: '#23B258 !important',
  },
  buttonEdit: {
      background: '#FFFFFF !important',
      color: 'black !important',
      textTransform: 'none !important'
  },
  imageSection: {
    width: '50%',
  },
  statusModal: {
    width: 160,
    height: 260,
    border: '2px solid #8953A1',
    background: '#FFFFFF',
    borderRadius: 12,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusCompletoModal: {
    width: 720,
    height:600,
    background: '#FFFFFF',
    borderRadius: 12,
    border: '2px solid #23B258'
  },
  permanentInfo:{
    width: 200,
    height: '100%'
  },
  accordion:{
    '& .MuiPaper-root': {
      borderTopLeftRadius: '25px !important',
      borderBottomLeftRadius: '25px !important',
      marginTop: 10,
      marginBottom: 10,
    }
  },
});

export default useStyles;
