import { TabPanel } from "./TabPanel";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Plant } from "../planta";
import { AddCircleOutline } from "@material-ui/icons";

const InfoCultivo = ({ index, value, info }) => {
  return (
    <TabPanel value={value} index={index}>
      {!!info ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            ml={1}
          >
            <Typography variant="h6">Cultivo</Typography>
            <AddCircleOutline sx={{ cursor: "pointer" }} />
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
          {info.map((el)=>{
                  return(
                    <Plant name={el.name} onHover={true} info={el}/>
                  )
                })}
          </Box>
        </>
      ) : (
        <Box>Sem informação sobre cultivo</Box>
      )}
    </TabPanel>
  );
};

export { InfoCultivo };
