import { Button, Box, Typography, Divider } from "@material-ui/core";
import useStyles from "./styles";
import { TabPanel } from "./TabPanel";
import { Edit } from "@material-ui/icons";
import SetorEscola from "../assets/SetorEscola.svg";
import NinetyNinePerCentIcon from "../Icons/NinetyNinePerCentIcon";
import FiftyPerCentIcon from "../Icons/FiftyPerCentIcon";
import HundredPerCentIcon from "../Icons/HundredPerCentIcon";
import TwentyFivePerCentIcon from "../Icons/TwentyFivePerCentIcon";
import ZeroPerCentIcon from "../Icons/ZeroPerCentIcon";
import AdubationIcon from "./../Icons/AdubationIcon";
import CalagemIcon from "./../Icons/CalagemIcon";
import NumberPlantsIcon from "./../Icons/NumberPlantsIcon";
import SoloConditionIcon from "./../Icons/SoloConditionIcon";
import { Plant } from "../planta";
import ImagemLocais from "../locais";

const InfoCanteiro = ({ index, value, info }) => {
  const classes = useStyles();
  
  const status = new Map([
    ["Ativo", <HundredPerCentIcon />],
    ["Fechado", <ZeroPerCentIcon/>],
    ["0%", <ZeroPerCentIcon/>],
    ["25%", <TwentyFivePerCentIcon/>],
    ["50%", <FiftyPerCentIcon/>],
    ["99%", <NinetyNinePerCentIcon/>],
    ["100%", <HundredPerCentIcon/>],
  ]);

  return (
    <TabPanel value={value} index={index}>
      <Box display="flex" justifyContent="space-between" mx={1} mb={1}>
        <Typography variant="h6">Informações</Typography>
        <Button variant="contained" className={classes.buttonEdit}>
          <Edit />
          Editar
        </Button>
      </Box>
      <Box mx={1} display="flex">
        <ImagemLocais value={info.name} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          ml={1}
          pt={1}
        >
          <Typography>
            <b>Nome:</b> {info.name}
          </Typography>
          <Typography>
            <b> Número:</b> {info.numero}
          </Typography>
          <Typography>
            {" "}
            <b>Setor:</b> {info.setor}
          </Typography>
          <Typography>
            {" "}
            <b>Área:</b> {info.area}
          </Typography>
        </Box>
      </Box>
      <Box mt={2} display="flex" justifyContent="flex-start" ml={1}>
        <Typography variant="h6">Situação</Typography>
      </Box>

      <Box mt={2} ml={1} mb={3}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mb={1}
        >
          {status.get(info.status)}
          <Typography>
            <b>Status:</b>
          </Typography>
          <Typography>{info.status}</Typography>
        </Box>
        {!!info.adubacao && (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={1}
          >
            <AdubationIcon />
            <Typography>
              <b>Última adubação:</b>
            </Typography>
            <Typography>{info.adubacao}</Typography>
          </Box>
        )}

        {!!info.calagem && (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={1}
          >
            <CalagemIcon />
            <Typography>
              <b>Última calagem:</b>
            </Typography>
            <Typography>{info.calagem}</Typography>
          </Box>
        )}
        {!!info.qntMudas && (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={1}
          >
            <NumberPlantsIcon />
            <Typography>
              <b>Quantidade de mudas:</b>
            </Typography>
            <Typography>{info.qntMudas}</Typography>
          </Box>
        )}
        {!!info.qntEspecies && (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={1}
          >
            <NumberPlantsIcon />
            <Typography>
              <b>Quantidade de espécies:</b>
            </Typography>
            <Typography>{info.qntEspecies}</Typography>
          </Box>
        )}
        {!!info.condSolo && (
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mb={1}
          >
            <SoloConditionIcon />
            <Typography>
              <b>Condição do solo:</b>
            </Typography>
            <Typography>{info.condSolo}</Typography>
          </Box>
        )}
      </Box>
      {!!info.history && (
        <>
          <Divider />

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            mt={2}
            ml={1}
          >
            <Typography variant="h6">Histórico de Colheitas</Typography>
            <Box display="flex" justifyContent="center" width="100%">
              <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap={2}>
                {info.history.map((el)=>{
                  return(
                    <Plant name={el.name} onHover={true} info={el}/>
                  )
                })}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </TabPanel>
  );
};

export { InfoCanteiro };
