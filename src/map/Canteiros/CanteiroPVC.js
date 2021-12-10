import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from 'clsx'

const CanteirosPVC = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.pvcFlowerbed01}>
      <Tooltip
          title="Canteiro de PVC - 1"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer()}
        style={{cursor: 'pointer'}}
        >
          <path
            d="M11.0077 14.676V19.218C8.56287 15.0833 5.0038 11.159 0.466797 7.59664V3.05469C1.58805 3.93381 2.64775 4.83564 3.64588 5.76018C6.69477 8.56862 9.1669 11.5618 11.0077 14.676Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M17.3244 14.0159L14.4587 14.3187L11.0086 14.679C9.16777 11.5648 6.69564 8.57164 3.64978 5.76168C2.64963 4.83916 1.58994 3.93733 0.470703 3.0562L4.93049 0.482422C10.3319 4.59743 14.5222 9.17722 17.3244 14.0159Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M17.3244 14.0159L14.4587 14.3187L11.0086 14.679C9.16777 11.5648 6.69564 8.57164 3.64978 5.76168C2.64963 4.83916 1.58994 3.93733 0.470703 3.0562L4.93049 0.482422C10.3319 4.59743 14.5222 9.17722 17.3244 14.0159Z"
            fill="white"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.3244 14.0159L14.4587 14.3187L11.0086 14.679C9.16777 11.5648 6.69564 8.57164 3.64978 5.76168C2.64963 4.83916 1.58994 3.93733 0.470703 3.0562L4.93049 0.482422C10.3319 4.59743 14.5222 9.17722 17.3244 14.0159Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M17.325 14.0156V18.5606L11.0078 19.2192V14.6757L14.4593 14.3154L17.325 14.0156Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M17.325 14.0156V18.5606L11.0078 19.2192V14.6757L14.4593 14.3154L17.325 14.0156Z"
            fill="black"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.325 14.0156V18.5606L11.0078 19.2192V14.6757L14.4593 14.3154L17.325 14.0156Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
        </svg>
        </Tooltip>
      </Box>
      <Box className={classes.pvcFlowerbed02}>
      <Tooltip
          title="Canteiro de PVC - 2"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer()}
        style={{cursor: 'pointer'}}
        >
          <path
            d="M10.7444 15.3287V19.8706C8.38431 15.5391 4.8328 11.4498 0.224609 7.75875V3.2168C1.33477 4.10601 2.38237 5.0144 3.36738 5.94197C6.47382 8.89423 8.95201 12.0433 10.7444 15.3287Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M17.5538 14.5059L14.9211 14.8253L10.7444 15.331C8.95199 12.0426 6.47381 8.89354 3.36738 5.9549C2.38135 5.02229 1.33376 4.1139 0.224609 3.22973L5.16283 0.378906C10.6687 4.64077 14.8606 9.42343 17.5538 14.5059Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M17.5538 14.5059L14.9211 14.8253L10.7444 15.331C8.95199 12.0426 6.47381 8.89354 3.36738 5.9549C2.38135 5.02229 1.33376 4.1139 0.224609 3.22973L5.16283 0.378906C10.6687 4.64077 14.8606 9.42343 17.5538 14.5059Z"
            fill="white"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.5538 14.5059L14.9211 14.8253L10.7444 15.331C8.95199 12.0426 6.47381 8.89354 3.36738 5.9549C2.38135 5.02229 1.33376 4.1139 0.224609 3.22973L5.16283 0.378906C10.6687 4.64077 14.8606 9.42343 17.5538 14.5059Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M17.5534 14.5078V19.0528L10.7441 19.8779V15.3329L14.9208 14.8273L17.5534 14.5078Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M17.5534 14.5078V19.0528L10.7441 19.8779V15.3329L14.9208 14.8273L17.5534 14.5078Z"
            fill="black"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.5534 14.5078V19.0528L10.7441 19.8779V15.3329L14.9208 14.8273L17.5534 14.5078Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
        </svg>
        </Tooltip>
      </Box>
      <Box className={classes.pvcFlowerbed03}>
      <Tooltip
          title="Canteiro de PVC - 3"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer()}
        style={{cursor: 'pointer'}}
        >
          <path
            d="M9.92414 16.628V21.1699C8.41938 16.5477 5.30087 12.1451 0.757812 8.23141V3.68945C1.79585 4.58046 2.7848 5.52708 3.72039 6.52514C6.67694 9.68331 8.77362 13.0913 9.92414 16.628Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M17.8318 15.8689L15.9728 16.0476L9.91742 16.6274C8.7669 13.0908 6.67022 9.68277 3.71065 6.52459C2.77507 5.52652 1.78608 4.5799 0.748047 3.68889L6.50066 0.367188C12.1776 5.00757 16.0394 10.2959 17.8318 15.8689Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M17.8318 15.8689L15.9728 16.0476L9.91742 16.6274C8.7669 13.0908 6.67022 9.68277 3.71065 6.52459C2.77507 5.52652 1.78608 4.5799 0.748047 3.68889L6.50066 0.367188C12.1776 5.00757 16.0394 10.2959 17.8318 15.8689Z"
            fill="white"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.8318 15.8689L15.9728 16.0476L9.91742 16.6274C8.7669 13.0908 6.67022 9.68277 3.71065 6.52459C2.77507 5.52652 1.78608 4.5799 0.748047 3.68889L6.50066 0.367188C12.1776 5.00757 16.0394 10.2959 17.8318 15.8689Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M17.8322 15.8711V20.4161L9.92383 21.1746V16.6296L15.9732 16.0498L17.8322 15.8711Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M17.8322 15.8711V20.4161L9.92383 21.1746V16.6296L15.9732 16.0498L17.8322 15.8711Z"
            fill="black"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M17.8322 15.8711V20.4161L9.92383 21.1746V16.6296L15.9732 16.0498L17.8322 15.8711Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
        </svg>
        </Tooltip>
      </Box>
      <Box className={classes.pvcFlowerbed04}>
      <Tooltip
          title="Canteiro de PVC - 4"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
        <svg
          width="15"
          height="22"
          viewBox="0 0 15 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        onClick={()=>openDrawer()}
        style={{cursor: 'pointer'}}
        >
          <path
            d="M14.0481 16.8088V17.2887H13.4879L7.66415 17.266C7.66415 17.1146 7.66415 16.9768 7.66415 16.8315C7.60965 13.0707 6.22751 9.36298 3.62368 5.93078L3.54344 5.82632C2.72397 4.76267 1.82683 3.7612 0.859375 2.83014L5.50084 0.150391C10.9977 5.142 13.9557 10.9163 14.0481 16.8088Z"
            fill="#23B258"
            className="changeColor"
          />
          <path
            d="M14.0481 16.8088V17.2887H13.4879L7.66415 17.266C7.66415 17.1146 7.66415 16.9768 7.66415 16.8315C7.60965 13.0707 6.22751 9.36298 3.62368 5.93078L3.54344 5.82632C2.72397 4.76267 1.82683 3.7612 0.859375 2.83014L5.50084 0.150391C10.9977 5.142 13.9557 10.9163 14.0481 16.8088Z"
            fill="white"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M14.0481 16.8088V17.2887H13.4879L7.66415 17.266C7.66415 17.1146 7.66415 16.9768 7.66415 16.8315C7.60965 13.0707 6.22751 9.36298 3.62368 5.93078L3.54344 5.82632C2.72397 4.76267 1.82683 3.7612 0.859375 2.83014L5.50084 0.150391C10.9977 5.142 13.9557 10.9163 14.0481 16.8088Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M14.0473 17.2894V21.8314L7.66797 21.8071C7.66797 21.7632 7.66797 21.7208 7.66797 21.6769C7.66797 21.5755 7.66797 21.4741 7.66797 21.3741V17.2637L13.4917 17.2864H14.0503L14.0473 17.2894Z"
            fill="#A26C40"
            className="changeColor"
          />
          <path
            d="M14.0473 17.2894V21.8314L7.66797 21.8071C7.66797 21.7632 7.66797 21.7208 7.66797 21.6769C7.66797 21.5755 7.66797 21.4741 7.66797 21.3741V17.2637L13.4917 17.2864H14.0503L14.0473 17.2894Z"
            fill="black"
            className="changeColor"
            fill-opacity="0.25"
          />
          <path
            d="M14.0473 17.2894V21.8314L7.66797 21.8071C7.66797 21.7632 7.66797 21.7208 7.66797 21.6769C7.66797 21.5755 7.66797 21.4741 7.66797 21.3741V17.2637L13.4917 17.2864H14.0503L14.0473 17.2894Z"
            stroke="#231F20"
            stroke-opacity="0.1"
          />
          <path
            d="M7.66612 16.829V21.3709C7.59497 16.4838 5.2833 11.6815 0.958199 7.4635L0.861328 7.36812V2.82617C1.82879 3.75723 2.72593 4.7587 3.5454 5.82235L3.62564 5.92682C6.22948 9.36054 7.61163 13.0683 7.66612 16.829Z"
            fill="#A26C40"
            className="changeColor"
          />
        </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosPVC;
