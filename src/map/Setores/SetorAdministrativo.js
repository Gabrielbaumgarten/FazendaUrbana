import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const SetorAdministrativo = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.admSection}>
      <Tooltip
        title="Setor Administrativo"
        placement="top"
        arrow
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
        followCursor
      >
      <svg
        width="114"
        height="72"
        viewBox="0 0 114 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer('setorAdministrativo')}
        style={{cursor: 'pointer'}}
      >
        <path
          d="M70.5481 65.7964L70.5466 71.8569L0.328125 31.3124V25.252L5.57663 28.2814L70.5481 65.7964Z"
          fill="#666666"
          className="changeColor"
        />
        <path
          d="M113.025 41.2695V47.33L70.5449 71.8565L70.5464 65.7961L107.777 44.3005L113.025 41.2695Z"
          fill="#23B258"
          className="changeColor"
        />
        <path
          d="M113.025 41.2695V47.33L70.5449 71.8565L70.5464 65.7961L107.777 44.3005L113.025 41.2695Z"
          fill="#666666"
          className="changeColor"
        />
        <path
          d="M113.025 41.2695V47.33L70.5449 71.8565L70.5464 65.7961L107.777 44.3005L113.025 41.2695Z"
          stroke="#231F20"
          stroke-opacity="0.1"
        />
        <path
          d="M113.029 41.2711L107.78 44.3021L70.5501 65.7977L5.57859 28.2826L0.330078 25.2531L42.8087 0.726562L113.029 41.2711Z"
          fill="#23B258"
          className="changeColor"
        />
        <path
          d="M113.029 41.2711L107.78 44.3021L70.5501 65.7977L5.57859 28.2826L0.330078 25.2531L42.8087 0.726562L113.029 41.2711Z"
          fill="#CCCCCC"
          className="changeColor"
        />
        <path
          d="M113.029 41.2711L107.78 44.3021L70.5501 65.7977L5.57859 28.2826L0.330078 25.2531L42.8087 0.726562L113.029 41.2711Z"
          stroke="#231F20"
          stroke-opacity="0.1"
        />
      </svg>
      </Tooltip>
    </Box>
  );
};

export default SetorAdministrativo;
