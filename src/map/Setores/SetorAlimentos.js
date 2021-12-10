import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";

const SetorAlimentos = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <Box className={classes.foodSection}>
      <Tooltip
        title="Setor Alimentos"
        placement="top"
        arrow
        classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
        followCursor
      >
        <svg
          width="145"
          height="90"
          viewBox="0 0 145 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=>openDrawer('setorAlimentos')}
          style={{cursor: 'pointer'}}
        >
          <path
            d="M144.452 76.3428V76.626C144.397 76.9288 144.165 77.2315 143.757 77.4723L140.223 79.5116L133.367 83.4692C132.841 83.7492 132.252 83.8899 131.657 83.8779C131.053 83.8888 130.457 83.746 129.925 83.4631L4.91237 11.2885L1.38358 9.24761C0.920341 8.98115 0.67964 8.63292 0.666016 8.28318V8.21506C0.67964 7.86836 0.915789 7.52468 1.37297 7.26125L11.7626 1.26286C12.7087 0.716311 14.2498 0.717825 15.205 1.26286L143.746 75.4814C144.162 75.7251 144.397 76.031 144.452 76.3428Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M144.452 76.3428V76.626C144.397 76.9288 144.165 77.2315 143.757 77.4723L140.223 79.5116L133.367 83.4692C132.841 83.7492 132.252 83.8899 131.657 83.8779C131.053 83.8888 130.457 83.746 129.925 83.4631L4.91237 11.2885L1.38358 9.24761C0.920341 8.98115 0.67964 8.63292 0.666016 8.28318V8.21506C0.67964 7.86836 0.915789 7.52468 1.37297 7.26125L11.7626 1.26286C12.7087 0.716311 14.2498 0.717825 15.205 1.26286L143.746 75.4814C144.162 75.7251 144.397 76.031 144.452 76.3428Z"
            fill="#CCCCCC"
            className="changeColor"
          />
          <path
            d="M144.452 76.3428V76.626C144.397 76.9288 144.165 77.2315 143.757 77.4723L140.223 79.5116L133.367 83.4692C132.841 83.7492 132.252 83.8899 131.657 83.8779C131.053 83.8888 130.457 83.746 129.925 83.4631L4.91237 11.2885L1.38358 9.24761C0.920341 8.98115 0.67964 8.63292 0.666016 8.28318V8.21506C0.67964 7.86836 0.915789 7.52468 1.37297 7.26125L11.7626 1.26286C12.7087 0.716311 14.2498 0.717825 15.205 1.26286L143.746 75.4814C144.162 75.7251 144.397 76.031 144.452 76.3428Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M131.656 83.8809V89.9368C131.053 89.9481 130.457 89.8053 129.925 89.522L1.38358 15.3094C0.920341 15.0415 0.67964 14.6932 0.666016 14.345V8.28906C0.67964 8.63879 0.920341 8.98703 1.38358 9.25349L4.91086 11.2883L129.925 83.4721C130.458 83.7533 131.054 83.894 131.656 83.8809Z"
            fill="#A3A3A3"
            className="changeColor"
          />
          <path
            d="M143.757 83.5341L133.369 89.534C132.843 89.8138 132.254 89.9544 131.658 89.9428V83.8869C132.254 83.8985 132.843 83.7578 133.369 83.4781L143.758 77.4782C143.793 77.4588 143.827 77.4376 143.86 77.4147C143.882 77.4018 143.903 77.3876 143.923 77.3723L143.992 77.3208C144.031 77.2915 144.068 77.2602 144.104 77.2269L144.143 77.1876C144.193 77.1386 144.239 77.0848 144.279 77.0271L144.317 76.9726C144.326 76.9596 144.334 76.946 144.341 76.9317C144.396 76.8383 144.434 76.7357 144.453 76.6289V82.4062C144.521 82.8089 144.293 83.2268 143.757 83.5341Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M143.757 83.5341L133.369 89.534C132.843 89.8138 132.254 89.9544 131.658 89.9428V83.8869C132.254 83.8985 132.843 83.7578 133.369 83.4781L143.758 77.4782C143.793 77.4588 143.827 77.4376 143.86 77.4147C143.882 77.4018 143.903 77.3876 143.923 77.3723L143.992 77.3208C144.031 77.2915 144.068 77.2602 144.104 77.2269L144.143 77.1876C144.193 77.1386 144.239 77.0848 144.279 77.0271L144.317 76.9726C144.326 76.9596 144.334 76.946 144.341 76.9317C144.396 76.8383 144.434 76.7357 144.453 76.6289V82.4062C144.521 82.8089 144.293 83.2268 143.757 83.5341Z"
            fill="#666666"
            className="changeColor"
          />
          <path
            d="M143.757 83.5341L133.369 89.534C132.843 89.8138 132.254 89.9544 131.658 89.9428V83.8869C132.254 83.8985 132.843 83.7578 133.369 83.4781L143.758 77.4782C143.793 77.4588 143.827 77.4376 143.86 77.4147C143.882 77.4018 143.903 77.3876 143.923 77.3723L143.992 77.3208C144.031 77.2915 144.068 77.2602 144.104 77.2269L144.143 77.1876C144.193 77.1386 144.239 77.0848 144.279 77.0271L144.317 76.9726C144.326 76.9596 144.334 76.946 144.341 76.9317C144.396 76.8383 144.434 76.7357 144.453 76.6289V82.4062C144.521 82.8089 144.293 83.2268 143.757 83.5341Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
        </svg>
      </Tooltip>
    </Box>
  );
};

export default SetorAlimentos;
