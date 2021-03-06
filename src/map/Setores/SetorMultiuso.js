import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const SetorMultiuso = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.multiUseSection}>
      <Tooltip
        title="Setor Multiuso"
        placement="top"
        arrow
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
        followCursor
      >
      <svg
        width="121"
        height="77"
        viewBox="0 0 121 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer('setorMultiuso')}
        style={{cursor: 'pointer'}}
      >
        <path
          d="M120.883 45.5673L115.635 48.5983L78.465 70.0591L5.86374 28.1384L0.615234 25.1089L43.0333 0.617188L120.883 45.5673Z"
          fill="#23B258"
          className='changeColor'
        />
        <path
          d="M120.883 45.5673L115.635 48.5983L78.465 70.0591L5.86374 28.1384L0.615234 25.1089L43.0333 0.617188L120.883 45.5673Z"
          fill="#CCCCCC"
          className='changeColor'
        />
        <path
          d="M120.883 45.5673L115.635 48.5983L78.465 70.0591L5.86374 28.1384L0.615234 25.1089L43.0333 0.617188L120.883 45.5673Z"
          stroke="#231F20"
          stroke-opacity="0.1"
        />
        <path
          d="M78.4645 70.0595L78.463 76.12L0.613281 31.1699L0.614797 25.1094L5.8633 28.1389L78.4645 70.0595Z"
          fill="#A3A3A3"
          className='changeColor'
        />
        <path
          d="M120.883 45.5684V51.6289L78.4629 76.1206L78.4644 70.0601L115.634 48.5994L120.883 45.5684Z"
          fill="#23B258"
          className='changeColor'
        />
        <path
          d="M120.883 45.5684V51.6289L78.4629 76.1206L78.4644 70.0601L115.634 48.5994L120.883 45.5684Z"
          fill="#666666"
          className='changeColor'
        />
        <path
          d="M120.883 45.5684V51.6289L78.4629 76.1206L78.4644 70.0601L115.634 48.5994L120.883 45.5684Z"
          stroke="#231F20"
          stroke-opacity="0.1"
        />
      </svg>
      </Tooltip>
    </Box>
  );
};

export default SetorMultiuso;
