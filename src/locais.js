import SetorEscola from "./assets/SetorEscola.svg";
import SetorAlimentos from "./assets/SetorAlimentos.svg";
import SetorMultiuso from "./assets/SetorMultiUso.svg";
import SetorAdministrativo from "./assets/SetorMultiUso.svg";
import SetorCompostagem from "./assets/SetorCompostagem.svg";
import SetorEstufa from "./assets/SetorEstufa.svg";
import AreaAnimaisPequanos from "./assets/AreaAnimaisPequenos.svg";
import EstufaMaior from "./assets/AreaEstufaMaior.svg";
import Agrofloresta from "./assets/CanteiroAgrofloresta.svg";
import PomarCitricos from "./assets/PomarCitricos.svg";
import CanteiroBlocoConcreto from "./assets/CanteiroConcreto.svg";
import CanteiroCapilaridade from "./assets/CanteiroCapilaridadeModelo1.svg";
import useStyles from "./styles";

const ImagemLocais = ({value}) =>{

    const classes = useStyles()

    const Locais = new Map([
        ["Setor Escola", SetorEscola],
        ["Setor Alimentos", SetorAlimentos],
        ["Setor Multiuso", SetorMultiuso],
        ["Setor Administrativo", SetorAdministrativo],
        ["Setor Compostagem", SetorCompostagem],
        ["Setor Estufa", SetorEstufa],
        ["Área Animais Pequanos", AreaAnimaisPequanos],
        ["Estufa Maior", EstufaMaior],
        ["Agrofloresta", Agrofloresta],
        ["Pomar Citricos", PomarCitricos],
        ["Canteiro de Concreto", CanteiroBlocoConcreto],
        ["Canteiro de Capilaridade", CanteiroCapilaridade],

    ]);

    return(
        <img src={Locais.get(value)} alt={value} className={classes.imageSection} />
    )
}


export default ImagemLocais;
