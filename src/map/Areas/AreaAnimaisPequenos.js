import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const SetorAnimaisPequenos = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.smallAnimalsSection}>
      <Tooltip
        title="Área de Animais Pequenos"
        placement="top"
        arrow
        followCursor
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
      >
        <svg
          width="90"
          height="53"
          viewBox="0 0 90 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer('areaAnimaisPequanos')}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M59.5121 38.9473L59.5115 38.9476L59.3502 39.0411L59.3495 39.0415L38.4918 51.0843C38.0276 51.3522 37.4558 51.3522 36.9917 51.0843L4.41455 32.2736L4.41453 32.2736L3.47833 31.7331C2.47836 31.1557 2.47833 29.7124 3.47828 29.135L25.2715 16.5514C25.7356 16.2835 26.3074 16.2834 26.7715 16.5514L60.287 35.9016C61.2869 36.4788 61.2871 37.9219 60.2873 38.4995L59.5121 38.9473Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M59.5121 38.9473L59.5115 38.9476L59.3502 39.0411L59.3495 39.0415L38.4918 51.0843C38.0276 51.3522 37.4558 51.3522 36.9917 51.0843L4.41455 32.2736L4.41453 32.2736L3.47833 31.7331C2.47836 31.1557 2.47833 29.7124 3.47828 29.135L25.2715 16.5514C25.7356 16.2835 26.3074 16.2834 26.7715 16.5514L60.287 35.9016C61.2869 36.4788 61.2871 37.9219 60.2873 38.4995L59.5121 38.9473Z"
            fill="white"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M59.5121 38.9473L59.5115 38.9476L59.3502 39.0411L59.3495 39.0415L38.4918 51.0843C38.0276 51.3522 37.4558 51.3522 36.9917 51.0843L4.41455 32.2736L4.41453 32.2736L3.47833 31.7331C2.47836 31.1557 2.47833 29.7124 3.47828 29.135L25.2715 16.5514C25.7356 16.2835 26.3074 16.2834 26.7715 16.5514L60.287 35.9016C61.2869 36.4788 61.2871 37.9219 60.2873 38.4995L59.5121 38.9473Z"
            stroke="#A26C40"
            className="changeColor"
            stroke-miterlimit="10"
          />
          <path
            d="M59.5121 38.9473L59.5115 38.9476L59.3502 39.0411L59.3495 39.0415L38.4918 51.0843C38.0276 51.3522 37.4558 51.3522 36.9917 51.0843L4.41455 32.2736L4.41453 32.2736L3.47833 31.7331C2.47836 31.1557 2.47833 29.7124 3.47828 29.135L25.2715 16.5514C25.7356 16.2835 26.3074 16.2834 26.7715 16.5514L60.287 35.9016C61.2869 36.4788 61.2871 37.9219 60.2873 38.4995L59.5121 38.9473Z"
            stroke="black"
            stroke-opacity="0.25"
            stroke-miterlimit="10"
          />
          <path
            d="M86.2454 20.9162C87.2453 21.4936 87.2453 22.9369 86.2453 23.5143L85.3092 24.0548L64.4493 36.098C63.9851 36.3659 63.4133 36.3659 62.9492 36.0979L29.437 16.7468C28.4371 16.1694 28.4372 14.7262 29.4371 14.1488L51.2304 1.56513C51.6945 1.29714 52.2664 1.29714 52.7305 1.56512L86.2454 20.9162Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M86.2454 20.9162C87.2453 21.4936 87.2453 22.9369 86.2453 23.5143L85.3092 24.0548L64.4493 36.098C63.9851 36.3659 63.4133 36.3659 62.9492 36.0979L29.437 16.7468C28.4371 16.1694 28.4372 14.7262 29.4371 14.1488L51.2304 1.56513C51.6945 1.29714 52.2664 1.29714 52.7305 1.56512L86.2454 20.9162Z"
            fill="white"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M86.2454 20.9162C87.2453 21.4936 87.2453 22.9369 86.2453 23.5143L85.3092 24.0548L64.4493 36.098C63.9851 36.3659 63.4133 36.3659 62.9492 36.0979L29.437 16.7468C28.4371 16.1694 28.4372 14.7262 29.4371 14.1488L51.2304 1.56513C51.6945 1.29714 52.2664 1.29714 52.7305 1.56512L86.2454 20.9162Z"
            stroke="#A26C40"
          />
          <path
            d="M86.2454 20.9162C87.2453 21.4936 87.2453 22.9369 86.2453 23.5143L85.3092 24.0548L64.4493 36.098C63.9851 36.3659 63.4133 36.3659 62.9492 36.0979L29.437 16.7468C28.4371 16.1694 28.4372 14.7262 29.4371 14.1488L51.2304 1.56513C51.6945 1.29714 52.2664 1.29714 52.7305 1.56512L86.2454 20.9162Z"
            stroke="black"
            className="changeColor"
            stroke-opacity="0.25"
          />
        </svg>
      </Tooltip>
    </Box>
  );
};

export default SetorAnimaisPequenos;