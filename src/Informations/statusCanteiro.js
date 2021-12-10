import { Box, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";
import TwentyFivePerCentIcon from "./../Icons/TwentyFivePerCentIcon";
import MudaIcon from './../Icons/MudaIcon';

const StatusCanteiro = ({ openCard, name, dataPlantio, dataColheita, quantidade }) => {
  const classes = useStyles();

  return (
    <>
      <Box
        display={openCard ? "flex" : "none"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.statusModal}
        p={1}
      >
        <Typography variant="h6">{name}</Typography>
        <Box display="flex" flexDirection="column" mt={3}>
          <Typography>
            <b>Data de Plantio:</b>
          </Typography>
          <Typography>{dataPlantio}</Typography>
          <Typography>
            <b>Data de Colheita:</b>
          </Typography>
          <Typography>{dataColheita}</Typography>
        </Box>

        <Box display="flex" mt={1} justifyContent='space-around'>
          <TwentyFivePerCentIcon />
          <MudaIcon value={quantidade}/>
        </Box>

      </Box>
    </>
  );
};

export default StatusCanteiro;
