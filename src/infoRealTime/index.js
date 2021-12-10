import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import useStyles from "./style";
import { AccessTime, Today, WbSunny, Opacity } from "@material-ui/icons";
import Thermostat from "../Icons/Thermost";
import Wind from "../Icons/Wind";
import Logo from "../assets/FazendaUrbana.svg";
import { useEffect, useState } from "react";
import { getRealTimeInfo } from "../services";
import Profile from "../Profile";

const InfoRealTime = () => {
  const classes = useStyles();
  const [realTimeInfo, setRealTimeInfo] = useState();

  useEffect(() => {
    const realTimeInfoFunction = async () => {
      try {
        const data = await getRealTimeInfo();
        setRealTimeInfo(data);
      } catch (error) {
        alert(error);
      }
    };

    realTimeInfoFunction();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      className={classes.infoRealTime}
    >
      <img src={Logo} alt="Fazenda Urbana" className={classes.logo} />

      {!!realTimeInfo && (
        <Box display="flex">
          <Box display="flex" ml={3} mr={3}>
            <AccessTime />
            <Typography variant="subtitle1">{realTimeInfo.Time}</Typography>
          </Box>
          <Box display="flex" ml={3} mr={3}>
            <Today />
            <Typography variant="subtitle1">{realTimeInfo.Date}</Typography>
          </Box>
          <Box display="flex" ml={3} mr={3}>
            <Thermostat />
            <Typography variant="subtitle1">
              {realTimeInfo.Temperature}°C
            </Typography>
          </Box>
          <Box display="flex" ml={3} mr={3}>
            <WbSunny />
            <Typography variant="subtitle1">{realTimeInfo.Weather}</Typography>
          </Box>
          <Box display="flex" ml={3} mr={3}>
            <Opacity />
            <Typography variant="subtitle1">{realTimeInfo.Weather}</Typography>
          </Box>
          <Box display="flex" ml={3} mr={3}>
            <Wind />
            <Typography variant="subtitle1">
              {realTimeInfo.WindVelocity}Km/h
            </Typography>
          </Box>
        </Box>
      )}

      <Profile/>
    </Box>
  );
};

export default InfoRealTime;
