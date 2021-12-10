import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from 'clsx'

const CanteirosCapilaridadeSetorB = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.capillarityFlowerbedSectionB}>
      <Tooltip
          title="Canteiro de Capilaridade"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="34"
          height="24"
          viewBox="0 0 34 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer('canteiroCapilaridade')}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M33.2778 15.7479L29.3418 18.0204L27.1361 19.2937L4.16648 6.03115L0.230469 3.75865L6.37215 0.212891L33.2778 15.7479Z"
            fill="#23B258"
            className='changeColor'
          />
          <path
            d="M33.2778 15.7479L29.3418 18.0204L27.1361 19.2937L4.16648 6.03115L0.230469 3.75865L6.37215 0.212891L33.2778 15.7479Z"
            fill="white"
            className='changeColor'
            fill-opacity="0.25"
          />
          <path
            d="M33.2778 15.7479L29.3418 18.0204L27.1361 19.2937L4.16648 6.03115L0.230469 3.75865L6.37215 0.212891L33.2778 15.7479Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M33.2784 15.748V20.293L27.1367 23.8388V19.2938L29.3424 18.0205L33.2784 15.748Z"
            fill="#A26C40"
            className='changeColor'
          />
          <path
            d="M33.2784 15.748V20.293L27.1367 23.8388V19.2938L29.3424 18.0205L33.2784 15.748Z"
            fill="black"
            className='changeColor'
            fill-opacity="0.25"
          />
          <path
            d="M33.2784 15.748V20.293L27.1367 23.8388V19.2938L29.3424 18.0205L33.2784 15.748Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M27.1362 19.2928V23.8378L0.230469 8.30279V3.75781L4.16649 6.0303L27.1362 19.2928Z"
            fill="#A26C40"
            className='changeColor'
          />
        </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosCapilaridadeSetorB;
