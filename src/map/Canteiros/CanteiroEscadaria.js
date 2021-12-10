import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from 'clsx'

const CanteirosEscadaria = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.stairFlowerbed}>
      <Tooltip
          title="Canteiro Escadaria"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="27"
          height="21"
          viewBox="0 0 27 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer()}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M5.80837 15.534V20.079L0.974609 17.2872V12.7422L4.90914 15.0147L5.80837 15.534Z"
            fill="#A26C40"
            className='changeColor'
          />
          <path
            d="M26.7981 3.41211V7.9571L5.80859 20.0781V15.5331L22.8636 5.68612L26.7981 3.41211Z"
            fill="#A26C40"
            className='changeColor'
          />
          <path
            d="M26.7981 3.41211V7.9571L5.80859 20.0781V15.5331L22.8636 5.68612L26.7981 3.41211Z"
            fill="black"
            fill-opacity="0.25"
          />
          <path
            d="M26.7981 3.41211V7.9571L5.80859 20.0781V15.5331L22.8636 5.68612L26.7981 3.41211Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M26.7979 3.41135L22.8634 5.68536L5.80833 15.5323L4.90911 15.013L0.974609 12.7405L21.9642 0.621094L26.7979 3.41135Z"
            fill="#23B258"
            className='changeColor'
          />
          <path
            d="M26.7979 3.41135L22.8634 5.68536L5.80833 15.5323L4.90911 15.013L0.974609 12.7405L21.9642 0.621094L26.7979 3.41135Z"
            fill="white"
            className='changeColor'
            fill-opacity="0.25"
          />
          <path
            d="M26.7979 3.41135L22.8634 5.68536L5.80833 15.5323L4.90911 15.013L0.974609 12.7405L21.9642 0.621094L26.7979 3.41135Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
        </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosEscadaria;
