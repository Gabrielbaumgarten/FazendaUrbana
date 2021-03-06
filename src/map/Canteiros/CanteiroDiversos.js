import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from 'clsx'

const CanteirosDiversos = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.diversityFlowerbed}>
      <Tooltip
          title="Canteiro Diversos"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="71"
          height="44"
          viewBox="0 0 71 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer()}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M68.7782 32.4766C70.1114 33.2465 70.1114 35.1709 68.7781 35.9407L67.8419 36.4812L57.7045 42.3338C57.0857 42.691 56.3233 42.691 55.7045 42.3337L2.73875 11.7503L1.80274 11.2099C0.469412 10.44 0.46943 8.51553 1.80278 7.74575L12.8761 1.35275C13.4949 0.995481 14.2574 0.995505 14.8762 1.35281L68.7782 32.4766Z"
            fill="#23B258"
            className='changeColor'
          />
          <path
            d="M68.7782 32.4766C70.1114 33.2465 70.1114 35.1709 68.7781 35.9407L67.8419 36.4812L57.7045 42.3338C57.0857 42.691 56.3233 42.691 55.7045 42.3337L2.73875 11.7503L1.80274 11.2099C0.469412 10.44 0.46943 8.51553 1.80278 7.74575L12.8761 1.35275C13.4949 0.995481 14.2574 0.995505 14.8762 1.35281L68.7782 32.4766Z"
            fill="white"
            className='changeColor'
            fill-opacity="0.25"
          />
          <path
            d="M68.7782 32.4766C70.1114 33.2465 70.1114 35.1709 68.7781 35.9407L67.8419 36.4812L57.7045 42.3338C57.0857 42.691 56.3233 42.691 55.7045 42.3337L2.73875 11.7503L1.80274 11.2099C0.469412 10.44 0.46943 8.51553 1.80278 7.74575L12.8761 1.35275C13.4949 0.995481 14.2574 0.995505 14.8762 1.35281L68.7782 32.4766Z"
            stroke="#A26C40"
            stroke-miterlimit="10"
          />
          <path
            d="M68.7782 32.4766C70.1114 33.2465 70.1114 35.1709 68.7781 35.9407L67.8419 36.4812L57.7045 42.3338C57.0857 42.691 56.3233 42.691 55.7045 42.3337L2.73875 11.7503L1.80274 11.2099C0.469412 10.44 0.46943 8.51553 1.80278 7.74575L12.8761 1.35275C13.4949 0.995481 14.2574 0.995505 14.8762 1.35281L68.7782 32.4766Z"
            stroke="black"
            stroke-opacity="0.25"
            stroke-miterlimit="10"
          />
        </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosDiversos;
