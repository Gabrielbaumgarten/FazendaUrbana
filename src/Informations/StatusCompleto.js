import { Box, Modal, Tabs, Tab, Divider, Typography, Button } from "@material-ui/core";
import { Close, Edit } from "@material-ui/icons";
import { useState } from "react";
import useStyles from "./styles";
import { TabPanel } from "./TabPanel";
import AboboraIcon from "../assets/Abobora.png";
import AlfaceIcon from "../assets/Alface.png";
import BerinjelaIcon from "../assets/Berinjela.png";
import BrocoliIcon from "../assets/Brocoli.png";
import EspinafreIcon from "../assets/Espinafre.png";
import TomateIcon from "../assets/Tomate.png";
import NinetyNinePerCentIcon from "../Icons/NinetyNinePerCentIcon";
import MudaIcon from "./../Icons/MudaIcon";
import RegarIcon from "../Icons/RegarIcon";

const StatusCompleto = ({ open, onClose, name, info }) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const plants = new Map([
    ["Abobora", AboboraIcon],
    ["Alface", AlfaceIcon],
    ["Berinjela", BerinjelaIcon],
    ["Brocoli", BrocoliIcon],
    ["Espinafre", EspinafreIcon],
    ["Tomate", TomateIcon],
  ]);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Modal open={open} onClose={() => onClose()} className={classes.modal}>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.statusCompletoModal}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={1}
        >
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            indicatorColor="none"
          >
            <Tab
              label="Cultivo"
              classes={{
                root: classes.tab,
                selected: classes.tabSelectedModal,
              }}
            />
            <Tab
              label="Canteiro"
              classes={{
                root: classes.tab,
                selected: classes.tabSelectedModal,
              }}
            />
            <Tab
              label="Colheita"
              classes={{
                root: classes.tab,
                selected: classes.tabSelectedModal,
              }}
            />
          </Tabs>

          <Close onClick={() => onClose()} sx={{ cursor: "pointer" }} />
        </Box>
        <Divider />
        <Box display="flex" mx={2}>
          <Box className={classes.permanentInfo} mt={2}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: "2px solid #23B258",
                width: 144,
                height: 144,
                borderRadius: 6,
              }}
              p={2}
              mb={1}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 144, height: "90%" }}
              >
                <img src={plants.get(name)} alt="" />
              </Box>
              <Typography variant="h6">{name}</Typography>
            </Box>

            <Typography variant="h5">Cultivo</Typography>
            <Typography>
              <b>Data da colheita:</b>
            </Typography>
            <Typography>{info.dataColheita}</Typography>
            <Typography>
              <b>Data da plantio:</b>
            </Typography>
            <Typography>{info.dataPlantio}</Typography>
            <Typography>
              <b>Localiza????o:</b>
            </Typography>
            <Typography>{info.localizacao}</Typography>
            <Typography>
              <b>Respos??vel:</b>
            </Typography>
            <Typography>{info.responsavel}</Typography>

            <Typography variant="h5">Avisos:</Typography>
            <Box display="flex" mb={2}>
              <NinetyNinePerCentIcon />
              <MudaIcon value={info.quantidade} />
              <RegarIcon value={info.regar} />
            </Box>
            <Button variant="contained" className={classes.buttonEdit}>
              <Edit />
              Editar
            </Button>
          </Box>

          <TabPanel index={0} value={activeTab}>
            <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={10}>
              <Box>
                <Typography variant="h5">Informa????es</Typography>
                <Typography>
                  <b>Nome popular:</b>
                </Typography>
                <Typography>{info.cultivo.nomePopular}</Typography>
                <Typography>
                  <b>Nome cient??fico:</b>
                </Typography>
                <Typography>{info.cultivo.nomeCientifico}</Typography>
                <Typography>
                  <b>Categoria:</b>
                </Typography>
                <Typography>{info.cultivo.categoria}</Typography>
                <Typography>
                  <b>Grupo:</b>
                </Typography>
                <Typography>{info.cultivo.grupo}</Typography>
                <Typography>
                  <b>Ciclo:</b>
                </Typography>
                <Typography>{info.cultivo.ciclo}</Typography>
                <Typography>
                  <b>??poda de plantio:</b>
                </Typography>
                <Typography>{info.cultivo.epoca}</Typography>
                <Typography>
                  <b>Altura m??dia:</b>
                </Typography>
                <Typography>{info.cultivo.altura}</Typography>
                <Typography>
                  <b>Fase de crescimento:</b>
                </Typography>
                <Typography>{info.cultivo.faseCrescimento}</Typography>
                <Typography>
                  <b>Observa????o:</b>
                </Typography>
                <Typography>{info.cultivo.observacao}</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Fertiliza????o</Typography>
                <Typography>
                  <b>Fertilizante:</b>
                </Typography>
                <Typography>{info.cultivo.fertilizante}</Typography>
                <Typography>
                  <b>Quantidade:</b>
                </Typography>
                <Typography>{info.cultivo.fertilizanteQuant}</Typography>
                <Typography>
                  <b>Quando/Tempo:</b>
                </Typography>
                <Typography>{info.cultivo.fertilizanteDate}</Typography>
                <Typography>
                  <b>Cuidados/Aten????o:</b>
                </Typography>
                <Typography>{info.cultivo.cuidados}</Typography>
                <Typography>
                  <b>Observa????es:</b>
                </Typography>
                <Typography>{info.cultivo.fetilizanteObs}</Typography>

                <Box mt={1}>
                  <Typography variant="h5">Solo</Typography>
                  <Typography>
                    <b>Tipo:</b>
                  </Typography>
                  <Typography>{info.cultivo.tipoSolo}</Typography>
                  <Typography>
                    <b>pH:</b>
                  </Typography>
                  <Typography>{info.cultivo.ph}</Typography>
                  <Typography>
                    <b>Umidade:</b>
                  </Typography>
                  <Typography>{info.cultivo.umidade}</Typography>
                  <Typography>
                    <b>Observa????o:</b>
                  </Typography>
                  <Typography>{info.cultivo.soloObs}</Typography>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel index={1} value={activeTab}>
            <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={10}>
              <Box>
                <Typography variant="h5">Canteiro</Typography>
                <Typography>
                  <b>Nome:</b>
                </Typography>
                <Typography>{info.canteiro.nome}</Typography>
                <Typography>
                  <b>N??mero:</b>
                </Typography>
                <Typography>{info.canteiro.numero}</Typography>
                <Typography>
                  <b>Setor:</b>
                </Typography>
                <Typography>{info.canteiro.setor}</Typography>
                <Typography>
                  <b>Material:</b>
                </Typography>
                <Typography>{info.canteiro.material}</Typography>
                <Typography>
                  <b>Localiza????o:</b>
                </Typography>
                <Typography>{info.canteiro.localizacao}</Typography>
                <Typography>
                  <b>Dimens??o:</b>
                </Typography>
                <Typography>{info.canteiro.dimensao}</Typography>
                <Typography>
                  <b>Volume:</b>
                </Typography>
                <Typography>{info.canteiro.volume}</Typography>
                <Typography>
                  <b>Profundidade:</b>
                </Typography>
                <Typography>{info.canteiro.profundidade}</Typography>
                <Typography>
                  <b>Tipo de plantio:</b>
                </Typography>
                <Typography>{info.canteiro.tipo}</Typography>
                <Typography>
                  <b>Observa????o:</b>
                </Typography>
                <Typography>{info.canteiro.observacao}</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Status</Typography>
                <Typography>
                  <b>Status:</b>
                </Typography>
                <Typography>{info.canteiro.status}</Typography>
                <Typography>
                  <b>??ltima aduba????o:</b>
                </Typography>
                <Typography>{info.canteiro.aduba????o}</Typography>
                <Typography>
                  <b>??ltima calagem:</b>
                </Typography>
                <Typography>{info.canteiro.calagem}</Typography>
                <Typography>
                  <b>Quantidade de mudas:</b>
                </Typography>
                <Typography>{info.canteiro.qntMudas}</Typography>
                <Typography>
                  <b>Quantidade de esp??cies:</b>
                </Typography>
                <Typography>{info.canteiro.qntEspecies}</Typography>
                <Typography>
                  <b>Condi????o do solo:</b>
                </Typography>
                <Typography>{info.canteiro.condSolo}</Typography>
                <Typography>
                  <b>Dist??ncia entre plantas:</b>
                </Typography>
                <Typography>{info.canteiro.distanciaMudas}</Typography>
                <Typography>
                  <b>Dist??ncia entre fileiras:</b>
                </Typography>
                <Typography>{info.canteiro.distanciaFileiras}</Typography>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel index={2} value={activeTab}>
            <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={10}>
              <Box>
                <Typography variant="h5">Produ????o</Typography>
                <Typography>
                  <b>Canteiro:</b>
                </Typography>
                <Typography>{info.colheita.canteiro}</Typography>
                <Typography>
                  <b>Produ????o (m??):</b>
                </Typography>
                <Typography>{info.colheita.producao}</Typography>
                <Typography>
                  <b>Peso estimado:</b>
                </Typography>
                <Typography>{info.colheita.peso}</Typography>
                <Typography>
                  <b>Peso m??dio unit??rio:</b>
                </Typography>
                <Typography>{info.colheita.pesoUnitario}</Typography>
                <Typography>
                  <b>Quantidade de mudas:</b>
                </Typography>
                <Typography>{info.colheita.quantidade}</Typography>
                <Typography>
                  <b>Rendimento:</b>
                </Typography>
                <Typography>{info.colheita.rendidmento}</Typography>
              </Box>
              <Box>
                <Typography variant="h5">Destina????o</Typography>
                <Typography>
                  <b>Entidade/Armaz??m:</b>
                </Typography>
                <Typography>{info.colheita.destino}</Typography>
                <Typography>
                  <b>Respons??vel:</b>
                </Typography>
                <Typography>{info.colheita.responsavel}</Typography>
                <Typography>
                  <b>Quantidade:</b>
                </Typography>
                <Typography>{info.colheita.qnt}</Typography>
                <Typography>
                  <b>Data:</b>
                </Typography>
                <Typography>{info.colheita.data}</Typography>
                <Typography>
                  <b>Observa????es:</b>
                </Typography>
                <Typography>{info.colheita.observacao}</Typography>
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </Modal>
  );
};

export default StatusCompleto;
