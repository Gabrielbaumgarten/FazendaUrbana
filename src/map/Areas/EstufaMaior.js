import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const EstufaMaior = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.largerGreenhouse}>
      <Tooltip
        title="Estufa Maior"
        placement="top"
        arrow
        followCursor
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
      >
      <svg
        width="95"
        height="56"
        viewBox="0 0 95 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer('estufaMaior')}
        style={{cursor: 'pointer'}}
      >
        <path
          d="M35.8594 49.2216V55.2821L0.0371094 34.598V28.5391L5.28411 31.5685L35.8594 49.2216Z"
          fill="#A3A3A3"
          className="changeColor"
        />
        <path
          d="M94.6191 15.2932L89.3706 18.3242L35.8574 49.2216L5.28215 31.5685L0.0351562 28.539L48.1514 0.755859L65.6455 10.8572L65.862 10.9828L66.0754 10.8587L76.5074 4.83606L94.6191 15.2932Z"
          fill="#CCCCCC"
          className="changeColor"
        />
        <path
          d="M94.621 15.293V21.3535L35.8594 55.282V49.2215L89.3725 18.324L94.621 15.293Z"
          fill="#666666"
          className="changeColor"
        />
      </svg>
      </Tooltip>
    </Box>
  );
};

export default EstufaMaior;
