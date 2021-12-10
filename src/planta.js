import { Paper, Typography, Tooltip, Popover, Box } from "@material-ui/core";
import { useState } from "react";
import AboboraIcon from "./assets/Abobora.png";
import AlfaceIcon from "./assets/Alface.png";
import BerinjelaIcon from "./assets/Berinjela.png";
import BrocoliIcon from "./assets/Brocoli.png";
import EspinafreIcon from "./assets/Espinafre.png";
import TomateIcon from "./assets/Tomate.png";
import StatusCanteiro from "./Informations/statusCanteiro";
import StatusCompleto from './Informations/StatusCompleto';

const Plant = ({ name, onHover, info }) => {
  const plants = new Map([
    ["Abobora", AboboraIcon],
    ["Alface", AlfaceIcon],
    ["Berinjela", BerinjelaIcon],
    ["Brocoli", BrocoliIcon],
    ["Espinafre", EspinafreIcon],
    ["Tomate", TomateIcon],
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openStatusCompleto, setOpenStatusCompleto] = useState(false);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (event) => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenStatusCompleto(true)
  }

  const handleOnCloseModalCompleto = () =>{
    setOpenStatusCompleto(false)
  }

  const open = Boolean(anchorEl);

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          width: 80,
          height: 80,
          borderRadius: 3,
        }}
        onMouseMove={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={handleOpenModal}
      >
        <img src={plants.get(name)} alt="" />
        <Typography>{name}</Typography>
      </Paper>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        sx={{
          pointerEvents: "none",
          background: 'none'
        }}
        // onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <StatusCanteiro
          openCard={true}
          name={name}
          dataPlantio={info.dataPlantio}
          dataColheita={info.dataColheita}
          quantidade={info.quantidade}
        />
      </Popover>

      {openStatusCompleto && (
        <StatusCompleto open={openStatusCompleto} onClose={handleOnCloseModalCompleto} name={name} info={info}/>
      )}
    </>
  );
};

export { Plant };
