import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const SetorEstufa = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.greenhouseSection}>
      <Tooltip
        title="Setor Estufa"
        placement="top"
        arrow
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
        followCursor
      >
      <svg
        width="160"
        height="98"
        viewBox="0 0 160 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer('setorEstufa')}
        style={{cursor: 'pointer'}}
      >
        <path
          d="M156.023 26.38L41.0916 92.7425L4.89844 71.8449L119.832 5.48242L156.023 26.38Z"
          fill="#BE1E2D"
          className='changeColor'
        />
        <path
          d="M159.962 24.1075L156.026 26.38L41.094 92.7426L4.90086 71.845L0.964844 69.5725L119.834 0.9375L159.962 24.1075Z"
          fill="#23B258"
          className='changeColor'
        />
        <path
          d="M159.962 24.1075L156.026 26.38L41.094 92.7426L4.90086 71.845L0.964844 69.5725L119.834 0.9375L159.962 24.1075Z"
          fill="#CCCCCC"
          className='changeColor'
        />
        <path
          d="M41.0917 92.7443V97.2893L0.960938 74.1192L0.962453 69.5742L4.89847 71.8467L41.0917 92.7443Z"
          fill="#A3A3A3"
          className='changeColor'
        />
        <path
          d="M159.959 24.1074V28.6524L41.0918 97.2874V92.7424L156.023 26.3799L159.959 24.1074Z"
          fill="#23B258"
          className='changeColor'
        />
        <path
          d="M159.959 24.1074V28.6524L41.0918 97.2874V92.7424L156.023 26.3799L159.959 24.1074Z"
          fill="#666666"
          className='changeColor'
        />
        <path
          d="M159.959 24.1074V28.6524L41.0918 97.2874V92.7424L156.023 26.3799L159.959 24.1074Z"
          stroke="#231F20"
          stroke-opacity="0.1"
        />
      </svg>
      </Tooltip>
    </Box>
  );
};

export default SetorEstufa;
