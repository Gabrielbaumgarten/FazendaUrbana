import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from "clsx";

const CanteirosMandalaGuarani = ({ openDrawer }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.MandalaGuaraniFlowerbed}>
        <Tooltip
          title="Canteiro Madandala Guarani"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="116"
            height="68"
            viewBox="0 0 116 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M112.494 31.6835C113.827 32.4533 113.827 34.3777 112.494 35.1475L111.558 35.688L58.6256 66.2517C58.0067 66.609 57.2443 66.609 56.6254 66.2517L4.53172 36.1725L3.59465 35.6314C2.26155 34.8618 2.26127 32.9377 3.59415 32.1676L4.53172 31.626L57.4641 1.06375C58.083 0.706443 58.8454 0.706449 59.4642 1.06376L111.558 31.143L112.494 31.6835Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M112.494 31.6835C113.827 32.4533 113.827 34.3777 112.494 35.1475L111.558 35.688L58.6256 66.2517C58.0067 66.609 57.2443 66.609 56.6254 66.2517L4.53172 36.1725L3.59465 35.6314C2.26155 34.8618 2.26127 32.9377 3.59415 32.1676L4.53172 31.626L57.4641 1.06375C58.083 0.706443 58.8454 0.706449 59.4642 1.06376L111.558 31.143L112.494 31.6835Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M112.494 31.6835C113.827 32.4533 113.827 34.3777 112.494 35.1475L111.558 35.688L58.6256 66.2517C58.0067 66.609 57.2443 66.609 56.6254 66.2517L4.53172 36.1725L3.59465 35.6314C2.26155 34.8618 2.26127 32.9377 3.59415 32.1676L4.53172 31.626L57.4641 1.06375C58.083 0.706443 58.8454 0.706449 59.4642 1.06376L111.558 31.143L112.494 31.6835Z"
              stroke="#A26C40"
              className="changeColor"
              stroke-miterlimit="10"
            />
            <path
              d="M112.494 31.6835C113.827 32.4533 113.827 34.3777 112.494 35.1475L111.558 35.688L58.6256 66.2517C58.0067 66.609 57.2443 66.609 56.6254 66.2517L4.53172 36.1725L3.59465 35.6314C2.26155 34.8618 2.26127 32.9377 3.59415 32.1676L4.53172 31.626L57.4641 1.06375C58.083 0.706443 58.8454 0.706449 59.4642 1.06376L111.558 31.143L112.494 31.6835Z"
              stroke="black"
              stroke-opacity="0.25"
              stroke-miterlimit="10"
            />
          </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosMandalaGuarani;
