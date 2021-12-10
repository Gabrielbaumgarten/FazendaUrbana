import { TabPanel } from "./TabPanel";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
  Divider
} from "@material-ui/core";
import useStyles from "./styles";
import { AddCircleOutline, Edit } from "@material-ui/icons";

const InfoTarefas = ({ index, value, info }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");
  const date = new Date().toLocaleDateString();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <TabPanel value={value} index={index} marginRight={true}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mt={2}
        ml={1}
      >
        <Typography variant="h5">Tarefas</Typography>

        <Typography variant="h6">{date}</Typography>

        <Box className={classes.accordion}>
          {!!info &&
            info.map((task, index) => {
              return (
                <Accordion
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  classes={{ root: classes.accordion }}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>
                      <b>Tarefa a ser Realizada</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Divider />
                    <Box display="flex" justifyContent="space-between" mb={2} mt={2}>
                      <Typography>
                        <b>Tarefa </b>
                      </Typography>
                      <Edit sx={{cursor: 'pointer'}} />
                    </Box>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(2,1fr)"
                      gap={0}
                      mb={2}
                    >
                      <Typography>
                        <b>Data e hora:</b>
                      </Typography>
                      <Typography>{task.date}</Typography>
                      <Typography>
                        <b>Local:</b>
                      </Typography>
                      <Typography>{task.local}</Typography>
                      <Typography>
                        <b>Responsável:</b>
                      </Typography>
                      <Typography>{task.responsavel}</Typography>
                      <Typography>
                        <b>Prioridade:</b>
                      </Typography>
                      <Typography>{task.status}</Typography>
                      <Typography>
                        <b>Descrição:</b>
                      </Typography>
                      <Typography>{task.descricao}</Typography>
                    </Box>
                    <Button variant="contained" sx={{background: '#23B258'}} >Feito</Button>
                  </AccordionDetails>
                </Accordion>
              );
            })}

          <Accordion expanded={false}>
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <AddCircleOutline sx={{ color: "#23B258" }} />
              </Box>
            </AccordionSummary>
          </Accordion>
        </Box>
      </Box>
    </TabPanel>
  );
};

export { InfoTarefas };
