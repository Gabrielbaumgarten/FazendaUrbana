import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from 'clsx'

const CanteirosForrageiras = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.forageFlowerbed}>
      <Tooltip
          title="Canteiro das Forrageiras"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="135"
          height="85"
          viewBox="0 0 135 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer()}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M55.7555 78.38V84.4132C55.7556 84.4153 55.755 84.4174 55.754 84.4193C55.7529 84.4211 55.7514 84.4227 55.7495 84.4237C55.7477 84.4248 55.7456 84.4254 55.7435 84.4254C55.7413 84.4254 55.7392 84.4248 55.7374 84.4238L0.448485 52.4999C0.447682 52.4982 0.447266 52.4964 0.447266 52.4946C0.447266 52.4928 0.447682 52.491 0.448485 52.4893V46.4561C0.448712 46.4541 0.449436 46.4521 0.450592 46.4505C0.451748 46.4488 0.453296 46.4475 0.455101 46.4466C0.456906 46.4457 0.458905 46.4453 0.460922 46.4453C0.462939 46.4454 0.464911 46.446 0.466651 46.447L5.69702 49.4659L55.7555 78.3693C55.7563 78.371 55.7568 78.3728 55.7568 78.3746C55.7568 78.3765 55.7563 78.3783 55.7555 78.38Z"
            fill="#A26C40"
            className='changeColor'
          />
          <path
            d="M134.446 32.9169C134.448 32.9179 134.449 32.9195 134.45 32.9213C134.451 32.9232 134.452 32.9253 134.452 32.9275C134.452 32.9296 134.451 32.9318 134.45 32.9336C134.449 32.9355 134.448 32.937 134.446 32.9381L129.217 35.9569L55.7647 78.3682C55.763 78.3697 55.7609 78.3705 55.7586 78.3705C55.7564 78.3705 55.7543 78.3697 55.7526 78.3682L5.69559 49.4647L0.46523 46.4458C0.463338 46.4448 0.461765 46.4433 0.460666 46.4414C0.459567 46.4395 0.458984 46.4374 0.458984 46.4353C0.458984 46.4331 0.459567 46.431 0.460666 46.4291C0.461765 46.4272 0.463338 46.4257 0.46523 46.4246L79.1477 0.994498C79.1493 0.993008 79.1515 0.992188 79.1537 0.992188C79.1559 0.992188 79.1581 0.993008 79.1598 0.994498L134.446 32.9169Z"
            fill="#23B258"
            className='changeColor'
          />
          <path
            d="M134.446 32.9169C134.448 32.9179 134.449 32.9195 134.45 32.9213C134.451 32.9232 134.452 32.9253 134.452 32.9275C134.452 32.9296 134.451 32.9318 134.45 32.9336C134.449 32.9355 134.448 32.937 134.446 32.9381L129.217 35.9569L55.7647 78.3682C55.763 78.3697 55.7609 78.3705 55.7586 78.3705C55.7564 78.3705 55.7543 78.3697 55.7526 78.3682L5.69559 49.4647L0.46523 46.4458C0.463338 46.4448 0.461765 46.4433 0.460666 46.4414C0.459567 46.4395 0.458984 46.4374 0.458984 46.4353C0.458984 46.4331 0.459567 46.431 0.460666 46.4291C0.461765 46.4272 0.463338 46.4257 0.46523 46.4246L79.1477 0.994498C79.1493 0.993008 79.1515 0.992188 79.1537 0.992188C79.1559 0.992188 79.1581 0.993008 79.1598 0.994498L134.446 32.9169Z"
            fill="white"
            className='changeColor'
            fill-opacity="0.25"
          />
          <path
            d="M134.446 32.9169C134.448 32.9179 134.449 32.9195 134.45 32.9213C134.451 32.9232 134.452 32.9253 134.452 32.9275C134.452 32.9296 134.451 32.9318 134.45 32.9336C134.449 32.9355 134.448 32.937 134.446 32.9381L129.217 35.9569L55.7647 78.3682C55.763 78.3697 55.7609 78.3705 55.7586 78.3705C55.7564 78.3705 55.7543 78.3697 55.7526 78.3682L5.69559 49.4647L0.46523 46.4458C0.463338 46.4448 0.461765 46.4433 0.460666 46.4414C0.459567 46.4395 0.458984 46.4374 0.458984 46.4353C0.458984 46.4331 0.459567 46.431 0.460666 46.4291C0.461765 46.4272 0.463338 46.4257 0.46523 46.4246L79.1477 0.994498C79.1493 0.993008 79.1515 0.992188 79.1537 0.992188C79.1559 0.992188 79.1581 0.993008 79.1598 0.994498L134.446 32.9169Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M134.462 32.9497V38.9814C134.463 38.9849 134.463 38.9886 134.462 38.992L55.7808 84.4237C55.779 84.4248 55.7769 84.4253 55.7748 84.4253C55.7726 84.4253 55.7705 84.4247 55.7687 84.4237C55.7668 84.4226 55.7653 84.421 55.7643 84.4192C55.7632 84.4173 55.7627 84.4152 55.7627 84.4131V78.3799C55.7614 78.3765 55.7614 78.3727 55.7627 78.3693L129.215 35.958L134.444 32.9391C134.445 32.9381 134.447 32.9375 134.45 32.9375C134.452 32.9375 134.454 32.9381 134.456 32.9391C134.458 32.9402 134.459 32.9418 134.46 32.9436C134.461 32.9455 134.462 32.9476 134.462 32.9497Z"
            fill="#A26C40"
            className='changeColor'
          />
          <path
            d="M134.462 32.9497V38.9814C134.463 38.9849 134.463 38.9886 134.462 38.992L55.7808 84.4237C55.779 84.4248 55.7769 84.4253 55.7748 84.4253C55.7726 84.4253 55.7705 84.4247 55.7687 84.4237C55.7668 84.4226 55.7653 84.421 55.7643 84.4192C55.7632 84.4173 55.7627 84.4152 55.7627 84.4131V78.3799C55.7614 78.3765 55.7614 78.3727 55.7627 78.3693L129.215 35.958L134.444 32.9391C134.445 32.9381 134.447 32.9375 134.45 32.9375C134.452 32.9375 134.454 32.9381 134.456 32.9391C134.458 32.9402 134.459 32.9418 134.46 32.9436C134.461 32.9455 134.462 32.9476 134.462 32.9497Z"
            fill="black"
            className='changeColor'
            fill-opacity="0.25"
          />
          <path
            d="M134.462 32.9497V38.9814C134.463 38.9849 134.463 38.9886 134.462 38.992L55.7808 84.4237C55.779 84.4248 55.7769 84.4253 55.7748 84.4253C55.7726 84.4253 55.7705 84.4247 55.7687 84.4237C55.7668 84.4226 55.7653 84.421 55.7643 84.4192C55.7632 84.4173 55.7627 84.4152 55.7627 84.4131V78.3799C55.7614 78.3765 55.7614 78.3727 55.7627 78.3693L129.215 35.958L134.444 32.9391C134.445 32.9381 134.447 32.9375 134.45 32.9375C134.452 32.9375 134.454 32.9381 134.456 32.9391C134.458 32.9402 134.459 32.9418 134.46 32.9436C134.461 32.9455 134.462 32.9476 134.462 32.9497Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
        </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosForrageiras;