import "./App.css";
import { Box } from "@material-ui/core";
import Base from "./map/Base.js";
import SetorEstufa from "./map/Setores/SetorEstufa.js";
import useStyles from "./styles";
import SetorEscola from "./map/Setores/SetorEscola";
import SetorAlimentos from "./map/Setores/SetorAlimentos";
import SetorCompostagem from "./map/Setores/SetorCompostagem";
import SetorAnimaisPequenos from "./map/Areas/AreaAnimaisPequenos";
import SetorMultiuso from "./map/Setores/SetorMultiuso";
import Entrada from "./map/Entrada";
import SetorAdministrativo from "./map/Setores/SetorAdministrativo";
import CanteiroTelhasElevadas from "./map/CanteiroTelhasElevadas";
import CanteiroTabuasElevadas from "./map/CanteiroTabuasElevadas";
import PomarCitricos from "./map/Areas/PomarCitricos";
import EstufaMaior from "./map/Areas/EstufaMaior";
import Quadras from "./map/Quadras";
import CanteirosU from "./map/Canteiros/CanteirosU";
import CanteirosCapilaridade from "./map/Canteiros/CanteiroCapilaridade";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Header from "./header/index";
import InfoRealTime from "./infoRealTime";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./theme";
import { useState } from "react";
import CanteirosEscadaria from "./map/Canteiros/CanteiroEscadaria";
import CanteirosGotejamento from "./map/Canteiros/CanteiroGotejamento";
import CanteirosPet from "./map/Canteiros/CanteiroPet";
import CanteirosTijoloWifi from "./map/Canteiros/CanteiroTijoloWifi";
import CanteirosTabuaDeitada from "./map/Canteiros/CanteiroTabuaDeitada";
import CanteirosForrageiras from "./map/Canteiros/CanteiroForragueiras";
import CanteiroTabuasElevadaSetorB from "./map/Canteiros/CanterioTabuaDeitadaSetorB";
import CanteirosCapilaridadeSetorB from "./map/Canteiros/CanteiroCapilaridadeSetorB";
import JardimSencacoes from "./map/Canteiros/JardimSensacoes";
import CanteirosToraEmPe from "./map/Canteiros/CanteiroToraPe";
import CanteirosMandalaGuarani from "./map/Canteiros/CanteiroMandalaGuarani";
import CanteirosDiversos from "./map/Canteiros/CanteiroDiversos";
import CanteiroTelhasMetalicas from "./map/Canteiros/CanteiroTelhasMetalicas";
import CanteiroAgrofloresta from "./map/Canteiros/CanteiroAgrofloresta";
import CanteirosPVC from "./map/Canteiros/CanteiroPVC";
import CanteirosBlocoConcreto from "./map/Canteiros/CanteiroBlocoConcreto";
import CanteirosTelhasBarro from "./map/Canteiros/CanteiroTelhasBarro";
import CanteiroChao from "./map/Canteiros/CanteiroChao";
import CanteirosTorasDeitadas from "./map/Canteiros/CanteirosTorasDeitadas";
import CanteiroCentral from "./map/Canteiros/CanteiroCentral";
import Apiarios from "./map/Apiarios";
import { Informations } from "./Informations";
import db from './db.json'

const App = () => {
  const classes = useStyles();
  const [mapCenter, setMapCenter] = useState(true);
  const [openDrawer, setopenDrawer] = useState(false);
  const [info, setInfo] = useState();

  const handleOpenDrawer = (local) => {
    setInfo(db.Locais[local])
    setopenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setopenDrawer(false);
  };


  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
        <InfoRealTime />

        <Box className={classes.background}>
          <TransformWrapper className={openDrawer ? classes.openDrawer : classes.background}>
            <TransformComponent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={mapCenter ? "center" : "flex-start"}
                className={openDrawer ? classes.openDrawer : classes.wrapperMap}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  className={classes.map}
                >
                  <Base />
                  <Quadras />
                  <SetorEscola openDrawer={handleOpenDrawer} />
                  <SetorAlimentos openDrawer={handleOpenDrawer} />
                  <SetorCompostagem openDrawer={handleOpenDrawer} />
                  <SetorAnimaisPequenos openDrawer={handleOpenDrawer} />
                  <SetorEstufa openDrawer={handleOpenDrawer} />
                  <SetorMultiuso openDrawer={handleOpenDrawer} />
                  <Entrada openDrawer={handleOpenDrawer} />
                  <SetorAdministrativo openDrawer={handleOpenDrawer} />
                  <CanteiroTelhasElevadas openDrawer={handleOpenDrawer} />
                  <CanteiroTabuasElevadas openDrawer={handleOpenDrawer} />
                  <PomarCitricos openDrawer={handleOpenDrawer} />
                  <CanteirosCapilaridade openDrawer={handleOpenDrawer} />
                  <EstufaMaior openDrawer={handleOpenDrawer} />
                  <CanteirosU openDrawer={handleOpenDrawer} />
                  <CanteirosEscadaria openDrawer={handleOpenDrawer} />
                  <CanteirosGotejamento openDrawer={handleOpenDrawer} />
                  <CanteirosPet openDrawer={handleOpenDrawer} />
                  <CanteirosTijoloWifi openDrawer={handleOpenDrawer} />
                  <CanteiroTabuasElevadaSetorB openDrawer={handleOpenDrawer} />
                  <CanteirosTabuaDeitada openDrawer={handleOpenDrawer} />
                  <CanteirosForrageiras openDrawer={handleOpenDrawer} />
                  <CanteirosCapilaridadeSetorB openDrawer={handleOpenDrawer} />
                  <JardimSencacoes openDrawer={handleOpenDrawer} />
                  <CanteirosToraEmPe openDrawer={handleOpenDrawer} />
                  <CanteirosMandalaGuarani openDrawer={handleOpenDrawer} />
                  <CanteirosDiversos openDrawer={handleOpenDrawer} />
                  <CanteiroTelhasMetalicas openDrawer={handleOpenDrawer} />
                  <CanteiroAgrofloresta openDrawer={handleOpenDrawer} />
                  <CanteirosPVC openDrawer={handleOpenDrawer} />
                  <CanteirosBlocoConcreto openDrawer={handleOpenDrawer} />
                  <CanteirosTelhasBarro openDrawer={handleOpenDrawer} />
                  <CanteiroChao openDrawer={handleOpenDrawer} />
                  <CanteirosTorasDeitadas openDrawer={handleOpenDrawer} />
                  <CanteiroCentral openDrawer={handleOpenDrawer} />
                  <Apiarios />
                </Box>

                {/* <Informations/> */}
              </Box>
            </TransformComponent>
          </TransformWrapper>
          {openDrawer && (
            <Informations
              handleOpenDrawer={handleOpenDrawer}
              handleCloseDrawer={handleCloseDrawer}
              openDrawer={openDrawer}
              info={info}
            />
          )}
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
