import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from "clsx";

const CanteirosPet = ({ openDrawer }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.petFlowerbed01}>
        <Tooltip
          title="Canteiro Pet - 1"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="29"
            height="13"
            viewBox="0 0 29 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M28.2709 8.03583V12.5778C18.3521 12.6156 8.59081 11.0835 0.0390625 8.14938V3.60742C8.58779 6.54153 18.3521 8.07368 28.2709 8.03583Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M28.2709 8.03628C18.3521 8.07413 8.59081 6.54198 0.0390625 3.60787L4.70022 0.916016C11.9258 3.20365 20.034 4.38759 28.2512 4.35882L28.2709 8.03628Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M28.2709 8.03628C18.3521 8.07413 8.59081 6.54198 0.0390625 3.60787L4.70022 0.916016C11.9258 3.20365 20.034 4.38759 28.2512 4.35882L28.2709 8.03628Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M28.2709 8.03628C18.3521 8.07413 8.59081 6.54198 0.0390625 3.60787L4.70022 0.916016C11.9258 3.20365 20.034 4.38759 28.2512 4.35882L28.2709 8.03628Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.petFlowerbed02}>
        <Tooltip
          title="Canteiro Pet - 2"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="29"
            height="14"
            viewBox="0 0 29 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M28.764 4.95409L26.8701 9.29623H26.802V9.45822C19.4447 8.70122 12.3614 7.2387 5.83219 5.15393C4.16392 4.62202 2.53303 4.04923 0.939453 3.43556L6.72386 0.0957031C13.4484 2.53626 20.9404 4.18953 28.764 4.95409Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M28.764 4.95409L26.8701 9.29623H26.802V9.45822C19.4447 8.70122 12.3614 7.2387 5.83219 5.15393C4.16392 4.62202 2.53303 4.04923 0.939453 3.43556L6.72386 0.0957031C13.4484 2.53626 20.9404 4.18953 28.764 4.95409Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M28.764 4.95409L26.8701 9.29623H26.802V9.45822C19.4447 8.70122 12.3614 7.2387 5.83219 5.15393C4.16392 4.62202 2.53303 4.04923 0.939453 3.43556L6.72386 0.0957031C13.4484 2.53626 20.9404 4.18953 28.764 4.95409Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M28.7647 4.95508V9.50006L26.8027 13.9966V9.45161L26.8709 9.29719L28.7647 4.95508Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M28.7647 4.95508V9.50006L26.8027 13.9966V9.45161L26.8709 9.29719L28.7647 4.95508Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M28.7647 4.95508V9.50006L26.8027 13.9966V9.45161L26.8709 9.29719L28.7647 4.95508Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M26.8099 9.45187V13.9938C17.5754 13.0355 8.76631 10.984 0.947266 7.96969V3.42773C2.53883 4.04039 4.16976 4.61318 5.84004 5.1461C12.3632 7.23238 19.4465 8.68882 26.8099 9.45187Z"
              fill="#A26C40"
              className="changeColor"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.petFlowerbed03}>
        <Tooltip
          title="Canteiro Pet - 3"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="26"
            height="15"
            viewBox="0 0 26 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M24.2203 10.1885V14.7304C15.6368 13.2785 7.53008 11.006 0.236328 8.00681V3.46484C1.78248 4.09971 3.36292 4.70176 4.9777 5.27102C6.6934 5.87662 8.44998 6.44487 10.2474 6.97578H10.255C14.8421 8.32326 19.5055 9.39606 24.2203 10.1885Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M25.7663 6.29297V10.8379L24.2207 14.7334V10.1884L25.7663 6.29297Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M25.7663 6.29297V10.8379L24.2207 14.7334V10.1884L25.7663 6.29297Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M25.7663 6.29297V10.8379L24.2207 14.7334V10.1884L25.7663 6.29297Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M25.7659 6.29346L24.2203 10.1889C19.5055 9.39753 14.8422 8.32576 10.255 6.9793H10.2474C8.45602 6.4484 6.69944 5.88015 4.97769 5.27455C3.36291 4.70731 1.78248 4.10525 0.236328 3.46836L5.20628 0.591797C11.5069 3.10198 18.4449 5.02474 25.7659 6.29346Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M25.7659 6.29346L24.2203 10.1889C19.5055 9.39753 14.8422 8.32576 10.255 6.9793H10.2474C8.45602 6.4484 6.69944 5.88015 4.97769 5.27455C3.36291 4.70731 1.78248 4.10525 0.236328 3.46836L5.20628 0.591797C11.5069 3.10198 18.4449 5.02474 25.7659 6.29346Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M25.7659 6.29346L24.2203 10.1889C19.5055 9.39753 14.8422 8.32576 10.255 6.9793H10.2474C8.45602 6.4484 6.69944 5.88015 4.97769 5.27455C3.36291 4.70731 1.78248 4.10525 0.236328 3.46836L5.20628 0.591797C11.5069 3.10198 18.4449 5.02474 25.7659 6.29346Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.petFlowerbed04}>
        <Tooltip
          title="Canteiro Pet - 4"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M25.0021 10.5525V15.0944C21.7504 14.4131 18.5749 13.6304 15.4755 12.7463L15.0637 12.6282C10.1755 11.2271 5.38151 9.51584 0.710938 7.50484V2.96289C2.21873 3.61592 3.75832 4.24171 5.32969 4.84023C9.55276 6.44378 13.8594 7.81795 18.2307 8.95675C20.449 9.54013 22.7061 10.0721 25.0021 10.5525Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M27.2455 6.6543V11.1993L25.002 15.0993V10.5543L27.2455 6.6543Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M27.2455 6.6543V11.1993L25.002 15.0993V10.5543L27.2455 6.6543Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M27.2455 6.6543V11.1993L25.002 15.0993V10.5543L27.2455 6.6543Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M27.2477 6.65432L25.0041 10.5544C22.7091 10.0729 20.452 9.54099 18.2327 8.95861C13.8613 7.81981 9.55472 6.44563 5.33165 4.84208C3.76027 4.24355 2.22069 3.61776 0.712891 2.96472L5.78732 0.0351562C12.3665 2.81484 19.5921 5.04343 27.2477 6.65432Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M27.2477 6.65432L25.0041 10.5544C22.7091 10.0729 20.452 9.54099 18.2327 8.95861C13.8613 7.81981 9.55472 6.44563 5.33165 4.84208C3.76027 4.24355 2.22069 3.61776 0.712891 2.96472L5.78732 0.0351562C12.3665 2.81484 19.5921 5.04343 27.2477 6.65432Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M27.2477 6.65432L25.0041 10.5544C22.7091 10.0729 20.452 9.54099 18.2327 8.95861C13.8613 7.81981 9.55472 6.44563 5.33165 4.84208C3.76027 4.24355 2.22069 3.61776 0.712891 2.96472L5.78732 0.0351562C12.3665 2.81484 19.5921 5.04343 27.2477 6.65432Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.petFlowerbed05}>
        <Tooltip
          title="Canteiro Pet - 5"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="22"
            height="17"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M18.7774 11.6043V16.1493L0.914062 5.83601V1.29102L15.6014 9.77238L18.7774 11.6043Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M21.475 6.91602L21.4735 11.461L18.7773 16.1468V11.6018L19.2149 10.8418L21.0633 7.63061L21.475 6.91602Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M21.475 6.91602L21.4735 11.461L18.7773 16.1468V11.6018L19.2149 10.8418L21.0633 7.63061L21.475 6.91602Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M21.475 6.91602L21.4735 11.461L18.7773 16.1468V11.6018L19.2149 10.8418L21.0633 7.63061L21.475 6.91602Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M21.4751 6.91621L21.0634 7.63081L19.215 10.842L18.7774 11.599L15.5984 9.76705L0.914062 1.28871L2.5369 0.351562C3.90239 0.957158 5.29312 1.53701 6.70907 2.09113C11.5323 3.98749 16.4628 5.59863 21.4751 6.91621Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M21.4751 6.91621L21.0634 7.63081L19.215 10.842L18.7774 11.599L15.5984 9.76705L0.914062 1.28871L2.5369 0.351562C3.90239 0.957158 5.29312 1.53701 6.70907 2.09113C11.5323 3.98749 16.4628 5.59863 21.4751 6.91621Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M21.4751 6.91621L21.0634 7.63081L19.215 10.842L18.7774 11.599L15.5984 9.76705L0.914062 1.28871L2.5369 0.351562C3.90239 0.957158 5.29312 1.53701 6.70907 2.09113C11.5323 3.98749 16.4628 5.59863 21.4751 6.91621Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosPet;
