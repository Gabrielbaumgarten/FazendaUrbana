import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const SetorCompostagem = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.compostSection}>
      <Tooltip
        title="Setor Compostagem"
        placement="top"
        arrow
        followCursor
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
        sx={{
          background: "white",
          width: 100,
        }}
      >
        <svg
          width="88"
          height="61"
          viewBox="0 0 88 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer('setorCompostagem')}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M87.8176 26.7287L83.8816 29.0012L37.6441 55.7004L4.83445 36.7558L0.898438 34.4833L51.0719 5.51172L87.8176 26.7287Z"
            fill="#21409A"
            className="changeColor"
          />
          <path
            d="M87.8201 26.7285V31.2735L37.6465 60.2452V55.7002L83.8841 29.001L87.8201 26.7285Z"
            fill="#21409A"
            className="changeColor"
          />
          <path
            d="M37.6441 55.7014V60.2464L0.898438 39.0294V34.4844L4.83445 36.7569L37.6441 55.7014Z"
            fill="#21409A"
            className="changeColor"
          />
          <path
            d="M87.8176 22.1838L83.8816 24.4563L37.6441 51.1554L4.83445 32.2109L0.898438 29.9384L51.0719 0.966797L87.8176 22.1838Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M87.8176 22.1838L83.8816 24.4563L37.6441 51.1554L4.83445 32.2109L0.898438 29.9384L51.0719 0.966797L87.8176 22.1838Z"
            fill="#CCCCCC"
            className="changeColor"
          />
          <path
            d="M87.8176 22.1838L83.8816 24.4563L37.6441 51.1554L4.83445 32.2109L0.898438 29.9384L51.0719 0.966797L87.8176 22.1838Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M87.8181 22.1836V31.2736L37.6445 60.2452V51.1552L83.8821 24.4561L87.8181 22.1836Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M87.8181 22.1836V31.2736L37.6445 60.2452V51.1552L83.8821 24.4561L87.8181 22.1836Z"
            fill="#666666"
            className="changeColor"
          />
          <path
            d="M87.8181 22.1836V31.2736L37.6445 60.2452V51.1552L83.8821 24.4561L87.8181 22.1836Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M37.6441 51.1565V60.2464L0.898438 39.0294V29.9395L4.83445 32.2119L37.6441 51.1565Z"
            fill="#A3A3A3"
            className="changeColor"
          />
        </svg>
      </Tooltip>
    </Box>
  );
};

export default SetorCompostagem;
