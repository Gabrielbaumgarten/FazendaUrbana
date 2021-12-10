import { makeStyles } from "@material-ui/styles";
import Theme from "./theme";

const useStyles = makeStyles({
  background: {
    background: "#C4C4C4",
    width: "100vw",
    height: "calc(100vh - 40px - 64px)",
  },
  openDrawer: {
    background: "#C4C4C4",
    width: "75vw",
    height: "calc(100vh - 40px - 64px)",
  },
  wrapperMap: {
    width: "100vw",
    height: "calc(100vh - 40px - 64px)",
    background: "#C4C4C4",
  },
  map: {
    width: 820,
    height: 531,
    position: "relative",
    background: "#C4C4C4",
  },
  imageSection: {
    width: '50%',
  },
 
  baseSection: {
    position: "absolute",
    height: "100%",
    "& svg": {
      height: "100%",
    },
  },
  schoolSection: {
    position: "absolute",
    bottom: "15%",
    left: "45%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  foodSection: {
    position: "absolute",
    bottom: "12%",
    left: "45.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  compostSection: {
    position: "absolute",
    bottom: "34.3%",
    left: "53%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  smallAnimalsSection: {
    position: "absolute",
    bottom: "41.2%",
    left: "60%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  greenhouseSection: {
    position: "absolute",
    bottom: "49%",
    left: "68%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  multiUseSection: {
    position: "absolute",
    bottom: "32%",
    left: "32%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  entrance01: {
    position: "absolute",
    bottom: "46%",
    left: "25.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  entrance02: {
    position: "absolute",
    bottom: "43%",
    left: "28.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  admSection: {
    position: "absolute",
    bottom: "49.4%",
    left: "14.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  highTilesEntrance01: {
    position: "absolute",
    bottom: "50%",
    left: "16.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  highTilesEntrance02: {
    position: "absolute",
    bottom: "47%",
    left: "20%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards01: {
    position: "absolute",
    bottom: "40%",
    left: "43.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards02: {
    position: "absolute",
    bottom: "37.1%",
    left: "47%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  citrusOrchard: {
    position: "absolute",
    bottom: "40.5%",
    left: "34.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  largerGreenhouse: {
    position: "absolute",
    bottom: "47%",
    left: "53%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  squareA: {
    position: "absolute",
    bottom: "40.6%",
    left: "35.2%",
  },
  squareB: {
    position: "absolute",
    bottom: "53%",
    left: "17%",
  },
  squareC: {
    position: "absolute",
    bottom: "72%",
    left: "35.1%",
  },
  squareD: {
    position: "absolute",
    bottom: "54.8%",
    left: "55.5%",
  },
  squareCenter: {
    position: "absolute",
    bottom: "64.5%",
    left: "47.5%",
  },
  uFlowerbed01: {
    position: "absolute",
    bottom: "55.5%",
    left: "41.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  uFlowerbed02: {
    position: "absolute",
    bottom: "53.9%",
    left: "43.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  uFlowerbed03: {
    position: "absolute",
    bottom: "52.1%",
    left: "45.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  capillarityFlowerbed01: {
    position: "absolute",
    bottom: "53.4%",
    left: "51.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  capillarityFlowerbed02: {
    position: "absolute",
    bottom: "52.8%",
    left: "51.8%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  capillarityFlowerbed03: {
    position: "absolute",
    bottom: "52%",
    left: "52.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  capillarityFlowerbed04: {
    position: "absolute",
    bottom: "58.8%",
    left: "57.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  capillarityFlowerbed05: {
    position: "absolute",
    bottom: "58.2%",
    left: "58%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  stairFlowerbed: {
    position: "absolute",
    bottom: "48.7%",
    left: "47.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  dripFlowerbed01: {
    position: "absolute",
    bottom: "55.7%",
    left: "46.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  dripFlowerbed02: {
    position: "absolute",
    bottom: "54.6%",
    left: "47.4%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  dripFlowerbed03: {
    position: "absolute",
    bottom: "53.4%",
    left: "48.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  dripFlowerbed04: {
    position: "absolute",
    bottom: "59.6%",
    left: "50.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  dripFlowerbed05: {
    position: "absolute",
    bottom: "58.5%",
    left: "51.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  dripFlowerbed06: {
    position: "absolute",
    bottom: "57.5%",
    left: "52.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  petFlowerbed01: {
    position: "absolute",
    bottom: "61.4%",
    left: "47.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  petFlowerbed02: {
    position: "absolute",
    bottom: "60%",
    left: "45.8%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  petFlowerbed03: {
    position: "absolute",
    bottom: "59%",
    left: "45%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  petFlowerbed04: {
    position: "absolute",
    bottom: "57.9%",
    left: "44%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  petFlowerbed05: {
    position: "absolute",
    bottom: "56.7%",
    left: "43.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed01: {
    position: "absolute",
    bottom: "64.2%",
    left: "44.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed02: {
    position: "absolute",
    bottom: "69.5%",
    left: "42.8%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed03: {
    position: "absolute",
    bottom: "69.9%",
    left: "41%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed04: {
    position: "absolute",
    bottom: "65.9%",
    left: "42.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed05: {
    position: "absolute",
    bottom: "63.2%",
    left: "43.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed06: {
    position: "absolute",
    bottom: "62.1%",
    left: "41.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed07: {
    position: "absolute",
    bottom: "70.7%",
    left: "39.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed08: {
    position: "absolute",
    bottom: "65.3%",
    left: "39.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed09: {
    position: "absolute",
    bottom: "62.5%",
    left: "40.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed10: {
    position: "absolute",
    bottom: "65%",
    left: "36.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  brickWifiFlowerbed11: {
    position: "absolute",
    bottom: "65.5%",
    left: "40.8%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  boardLyingDownFlowerbed01: {
    position: "absolute",
    bottom: "63.8%",
    left: "34%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  boardLyingDownFlowerbed02: {
    position: "absolute",
    bottom: "62%",
    left: "32%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  boardLyingDownFlowerbed03: {
    position: "absolute",
    bottom: "60%",
    left: "30.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  forageFlowerbed: {
    position: "absolute",
    bottom: "63%",
    left: "23%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards01SectionB: {
    position: "absolute",
    bottom: "77.1%",
    left: "33.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards02SectionB: {
    position: "absolute",
    bottom: "76%",
    left: "35%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards03SectionB: {
    position: "absolute",
    bottom: "75%",
    left: "36%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards04SectionB: {
    position: "absolute",
    bottom: "74.1%",
    left: "36.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards05SectionB: {
    position: "absolute",
    bottom: "73%",
    left: "37.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  raisedBoards06SectionB: {
    position: "absolute",
    bottom: "72%",
    left: "39%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  capillarityFlowerbedSectionB: {
    position: "absolute",
    bottom: "56.5%",
    left: "26%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden01: {
    position: "absolute",
    bottom: "72%",
    left: "48.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden02: {
    position: "absolute",
    bottom: "71.7%",
    left: "45.4%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden03: {
    position: "absolute",
    bottom: "76%",
    left: "46.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden04: {
    position: "absolute",
    bottom: "74.3%",
    left: "51.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden05: {
    position: "absolute",
    bottom: "76.5%",
    left: "52%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden06: {
    position: "absolute",
    bottom: "77%",
    left: "53%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden07: {
    position: "absolute",
    bottom: "75.4%",
    left: "50%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  sensationGarden08: {
    position: "absolute",
    bottom: "77.5%",
    left: "50.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  standWoodFlowerbed01: {
    position: "absolute",
    bottom: "78%",
    left: "56%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  standWoodFlowerbed02: {
    position: "absolute",
    bottom: "80%",
    left: "53.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  standWoodFlowerbed03: {
    position: "absolute",
    bottom: "81.5%",
    left: "53%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  standWoodFlowerbed04: {
    position: "absolute",
    bottom: "77.5%",
    left: "57.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  standWoodFlowerbed05: {
    position: "absolute",
    bottom: "82.8%",
    left: "54.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  standWoodFlowerbed06: {
    position: "absolute",
    bottom: "79%",
    left: "58.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  MandalaGuaraniFlowerbed: {
    position: "absolute",
    bottom: "83%",
    left: "44.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  diversityFlowerbed: {
    position: "absolute",
    bottom: "81%",
    left: "42.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed01: {
    position: "absolute",
    bottom: "82.5%",
    left: "42.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed02: {
    position: "absolute",
    bottom: "81.5%",
    left: "43%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed03: {
    position: "absolute",
    bottom: "80.5%",
    left: "44%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed04: {
    position: "absolute",
    bottom: "79.5%",
    left: "45%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed05: {
    position: "absolute",
    bottom: "78.5%",
    left: "46%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed06: {
    position: "absolute",
    bottom: "80%",
    left: "39.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed07: {
    position: "absolute",
    bottom: "79%",
    left: "40.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed08: {
    position: "absolute",
    bottom: "78%",
    left: "41.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed09: {
    position: "absolute",
    bottom: "77%",
    left: "42.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  metalTileFlowerbed10: {
    position: "absolute",
    bottom: "76%",
    left: "43.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  agroforestryFlowerbed: {
    position: "absolute",
    bottom: "63.4%",
    left: "64.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  pvcFlowerbed01: {
    position: "absolute",
    bottom: "71%",
    left: "59.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  pvcFlowerbed02: {
    position: "absolute",
    bottom: "70%",
    left: "58.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  pvcFlowerbed03: {
    position: "absolute",
    bottom: "68.5%",
    left: "57%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  pvcFlowerbed04: {
    position: "absolute",
    bottom: "67.3%",
    left: "55.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  concreteBrickFlowerbed01: {
    position: "absolute",
    bottom: "67.4%",
    left: "59.3%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  concreteBrickFlowerbed02: {
    position: "absolute",
    bottom: "66%",
    left: "60.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  concreteBrickFlowerbed03: {
    position: "absolute",
    bottom: "64.7%",
    left: "62%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  concreteBrickFlowerbed04: {
    position: "absolute",
    bottom: "63.7%",
    left: "55.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  concreteBrickFlowerbed05: {
    position: "absolute",
    bottom: "62.6%",
    left: "56.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  concreteBrickFlowerbed06: {
    position: "absolute",
    bottom: "61.4%",
    left: "58.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  clayTileFlowerbed01: {
    position: "absolute",
    bottom: "60%",
    left: "60%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  clayTileFlowerbed02: {
    position: "absolute",
    bottom: "59.1%",
    left: "61%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  clayTileFlowerbed03: {
    position: "absolute",
    bottom: "58.2%",
    left: "61.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  clayTileFlowerbed04: {
    position: "absolute",
    bottom: "57.3%",
    left: "62.9%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  clayTileFlowerbed05: {
    position: "absolute",
    bottom: "56.4%",
    left: "64%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  floorFlowerbed: {
    position: "absolute",
    bottom: "54.9%",
    left: "65.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed01: {
    position: "absolute",
    bottom: "66.2%",
    left: "67.7%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed02: {
    position: "absolute",
    bottom: "64.6%",
    left: "66%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed03: {
    position: "absolute",
    bottom: "62.9%",
    left: "64.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed04: {
    position: "absolute",
    bottom: "61.2%",
    left: "62.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed05: {
    position: "absolute",
    bottom: "58.9%",
    left: "65.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed06: {
    position: "absolute",
    bottom: "62.4%",
    left: "70.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed07: {
    position: "absolute",
    bottom: "61.3%",
    left: "69.2%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed08: {
    position: "absolute",
    bottom: "60%",
    left: "68%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  lyingLogFlowerbed09: {
    position: "absolute",
    bottom: "58.9%",
    left: "66.8%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  centralFlowerbed01: {
    position: "absolute",
    bottom: "66.5%",
    left: "50%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  centralFlowerbed02: {
    position: "absolute",
    bottom: "64.2%",
    left: "49%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  centralFlowerbed03: {
    position: "absolute",
    bottom: "65.5%",
    left: "47.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  centralFlowerbed04: {
    position: "absolute",
    bottom: "69.3%",
    left: "48.8%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  centralFlowerbed05: {
    position: "absolute",
    bottom: "65.7%",
    left: "53.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  apiary01: {
    position: "absolute",
    bottom: "65.7%",
    left: "21.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  apiary02: {
    position: "absolute",
    bottom: "51.7%",
    left: "42.6%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  apiary03: {
    position: "absolute",
    bottom: "48.7%",
    left: "49.5%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  apiary04: {
    position: "absolute",
    bottom: "73.7%",
    left: "65.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  apiary05: {
    position: "absolute",
    bottom: "84.7%",
    left: "61.1%",
    "& svg:hover .changeColor": {
      transition: "0.5s ease-in",
      fill: "#8953A1",
    },
  },
  tooltip: {
    display: "flex",
    alignItens: "center",
    justifyContent: "center",
    backgroundColor: `${Theme.palette.secondary.main} !important`,
    color: "#23B258 !important",
    fontWeight: "bold !important",
    width: "100% !important",
    borderRadius: "25px !important",
  },
  tooltipTransform: {
    transform: "translateY(15px) !important",
  },
  tooltipArrow: {
    color: `${Theme.palette.secondary.main} !important`,
  },
});

export default useStyles;
