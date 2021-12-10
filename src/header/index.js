import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system"
import useStyles from './style';
import Theme from '../theme';


const Header = () =>{

    const classes = useStyles()

    return(
        <Box display='flex' alignItems='center' className={classes.header}>
            <Typography variant='body1' typography={Theme.typography.button} className={classes.buttonsSelected}>
                Mapa
            </Typography>
            <Typography variant='button' typography={Theme.typography.button} className={classes.buttons}>
                Calendário
            </Typography>
            <Typography variant='button' typography={Theme.typography.button} className={classes.buttons}>
                Glossário
            </Typography>
            <Typography variant='button' typography={Theme.typography.button} className={classes.buttons}>
                Tarefas
            </Typography>
        </Box>
    )
}

export default Header