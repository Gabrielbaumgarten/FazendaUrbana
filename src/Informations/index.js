import {
  Drawer,
  Button,
  Box,
  Tabs,
  Tab,
  Typography,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import { TabPanel } from "./TabPanel";
import { Close, Edit } from "@material-ui/icons";
import SetorEscola from "../assets/SetorEscola.svg";
import ZeroPerCentIcon from "../Icons/NinetyNinePerCentIcon";
import AdubationIcon from "./../Icons/AdubationIcon";
import CalagemIcon from "./../Icons/CalagemIcon";
import NumberPlantsIcon from "./../Icons/NumberPlantsIcon";
import SoloConditionIcon from "./../Icons/SoloConditionIcon";
import { Plant } from "../planta";
import { InfoCanteiro } from "./infoCanteiro";
import { InfoCultivo } from "./infoCultivo";
import { InfoTarefas } from "./infoTarefas";

const Informations = ({openDrawer, handleOpenDrawer, handleCloseDrawer, info}) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  console.log(info)

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        variant="persistent"
        transitionDuration={2}
        className={classes.drawer}
      >
        <Box display='flex' alignItems='center' sx={{ borderBottom: 1, borderColor: "divider" }} mx={2}>
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            variant="fullWidth"
            indicatorColor="none"
          >
            <Tab
              label="Canteiro"
              classes={{ root: classes.tab, selected: classes.tabSelected }}
            />
            <Tab
              label="Cultivo"
              classes={{ root: classes.tab, selected: classes.tabSelected }}
            />
            <Tab
              label="Tarefas"
              classes={{ root: classes.tab, selected: classes.tabSelected }}
            />
          </Tabs>
          <Close sx={{cursor: 'pointer'}} onClick={()=>handleCloseDrawer()} />
        </Box>
        
        <InfoCanteiro index={0} value={activeTab} info={info.Canteiro}/>
        <InfoCultivo  index={1} value={activeTab} info={info.Cultivo}/>
        <InfoTarefas  index={2} value={activeTab} info={info.Tarefas}/>
        
      </Drawer>
    </>
  );
};

export { Informations };
