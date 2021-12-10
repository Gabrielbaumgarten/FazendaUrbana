import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from "clsx";

const CanteirosU = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.uFlowerbed01}>
        <Tooltip
          title="Canteiro em U - 1"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M19.8075 5.16602V9.69433C19.8075 11.0448 18.8992 12.3363 17.2476 13.287L13.1602 15.6504V11.1084L15.5672 9.71705L17.2521 8.74508C17.8646 8.40219 18.4165 7.96076 18.8856 7.43851C19.485 6.73905 19.8075 5.95632 19.8075 5.16602Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M19.8075 5.16602V9.69433C19.8075 11.0448 18.8992 12.3363 17.2476 13.287L13.1602 15.6504V11.1084L15.5672 9.71705L17.2521 8.74508C17.8646 8.40219 18.4165 7.96076 18.8856 7.43851C19.485 6.73905 19.8075 5.95632 19.8075 5.16602Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M13.1552 11.1049V15.6499L10.9707 14.3887V9.84375L13.1552 11.1049Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M2.82976 5.14528V9.68874L0.654297 8.43516V3.88867L2.82976 5.14528Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M14.1808 7.98978H14.1718H14.1612L14.093 8.02913C14.0507 8.00036 14.0067 7.97464 13.9628 7.9489C13.7035 7.79959 13.4332 7.67002 13.1544 7.56132C12.1591 7.17971 11.1034 6.97973 10.0375 6.97086C8.56148 6.94815 7.13239 7.25246 6.04243 7.82323H6.03186H6.02126L2.83008 9.66575V5.12381L6.02126 3.28129H6.03186H6.04243C7.13239 2.71052 8.56148 2.40621 10.0375 2.42892C11.5135 2.45163 12.9137 2.80289 13.9628 3.40696C14.8711 3.93534 15.457 4.61815 15.6144 5.35545C15.6369 5.46015 15.6511 5.56646 15.6568 5.67339C15.6962 6.53484 15.1694 7.35997 14.1808 7.98978Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M14.1808 7.98978H14.1718H14.1612L14.093 8.02913C14.0507 8.00036 14.0067 7.97464 13.9628 7.9489C13.7035 7.79959 13.4332 7.67002 13.1544 7.56132C12.1591 7.17971 11.1034 6.97973 10.0375 6.97086C8.56148 6.94815 7.13239 7.25246 6.04243 7.82323H6.03186H6.02126L2.83008 9.66575V5.12381L6.02126 3.28129H6.03186H6.04243C7.13239 2.71052 8.56148 2.40621 10.0375 2.42892C11.5135 2.45163 12.9137 2.80289 13.9628 3.40696C14.8711 3.93534 15.457 4.61815 15.6144 5.35545C15.6369 5.46015 15.6511 5.56646 15.6568 5.67339C15.6962 6.53484 15.1694 7.35997 14.1808 7.98978Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.uFlowerbed02}>
        <Tooltip
          title="Canteiro em U - 2"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M19.8075 5.16602V9.69433C19.8075 11.0448 18.8992 12.3363 17.2476 13.287L13.1602 15.6504V11.1084L15.5672 9.71705L17.2521 8.74508C17.8646 8.40219 18.4165 7.96076 18.8856 7.43851C19.485 6.73905 19.8075 5.95632 19.8075 5.16602Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M19.8075 5.16602V9.69433C19.8075 11.0448 18.8992 12.3363 17.2476 13.287L13.1602 15.6504V11.1084L15.5672 9.71705L17.2521 8.74508C17.8646 8.40219 18.4165 7.96076 18.8856 7.43851C19.485 6.73905 19.8075 5.95632 19.8075 5.16602Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M13.1552 11.1049V15.6499L10.9707 14.3887V9.84375L13.1552 11.1049Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M2.82976 5.14528V9.68874L0.654297 8.43516V3.88867L2.82976 5.14528Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M14.1808 7.98978H14.1718H14.1612L14.093 8.02913C14.0507 8.00036 14.0067 7.97464 13.9628 7.9489C13.7035 7.79959 13.4332 7.67002 13.1544 7.56132C12.1591 7.17971 11.1034 6.97973 10.0375 6.97086C8.56148 6.94815 7.13239 7.25246 6.04243 7.82323H6.03186H6.02126L2.83008 9.66575V5.12381L6.02126 3.28129H6.03186H6.04243C7.13239 2.71052 8.56148 2.40621 10.0375 2.42892C11.5135 2.45163 12.9137 2.80289 13.9628 3.40696C14.8711 3.93534 15.457 4.61815 15.6144 5.35545C15.6369 5.46015 15.6511 5.56646 15.6568 5.67339C15.6962 6.53484 15.1694 7.35997 14.1808 7.98978Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M14.1808 7.98978H14.1718H14.1612L14.093 8.02913C14.0507 8.00036 14.0067 7.97464 13.9628 7.9489C13.7035 7.79959 13.4332 7.67002 13.1544 7.56132C12.1591 7.17971 11.1034 6.97973 10.0375 6.97086C8.56148 6.94815 7.13239 7.25246 6.04243 7.82323H6.03186H6.02126L2.83008 9.66575V5.12381L6.02126 3.28129H6.03186H6.04243C7.13239 2.71052 8.56148 2.40621 10.0375 2.42892C11.5135 2.45163 12.9137 2.80289 13.9628 3.40696C14.8711 3.93534 15.457 4.61815 15.6144 5.35545C15.6369 5.46015 15.6511 5.56646 15.6568 5.67339C15.6962 6.53484 15.1694 7.35997 14.1808 7.98978Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.uFlowerbed03}>
        <Tooltip
          title="Canteiro em U - 3"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => openDrawer()}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M19.8075 5.16602V9.69433C19.8075 11.0448 18.8992 12.3363 17.2476 13.287L13.1602 15.6504V11.1084L15.5672 9.71705L17.2521 8.74508C17.8646 8.40219 18.4165 7.96076 18.8856 7.43851C19.485 6.73905 19.8075 5.95632 19.8075 5.16602Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M19.8075 5.16602V9.69433C19.8075 11.0448 18.8992 12.3363 17.2476 13.287L13.1602 15.6504V11.1084L15.5672 9.71705L17.2521 8.74508C17.8646 8.40219 18.4165 7.96076 18.8856 7.43851C19.485 6.73905 19.8075 5.95632 19.8075 5.16602Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M13.1552 11.1049V15.6499L10.9707 14.3887V9.84375L13.1552 11.1049Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M2.82976 5.14528V9.68874L0.654297 8.43516V3.88867L2.82976 5.14528Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M14.1808 7.98978H14.1718H14.1612L14.093 8.02913C14.0507 8.00036 14.0067 7.97464 13.9628 7.9489C13.7035 7.79959 13.4332 7.67002 13.1544 7.56132C12.1591 7.17971 11.1034 6.97973 10.0375 6.97086C8.56148 6.94815 7.13239 7.25246 6.04243 7.82323H6.03186H6.02126L2.83008 9.66575V5.12381L6.02126 3.28129H6.03186H6.04243C7.13239 2.71052 8.56148 2.40621 10.0375 2.42892C11.5135 2.45163 12.9137 2.80289 13.9628 3.40696C14.8711 3.93534 15.457 4.61815 15.6144 5.35545C15.6369 5.46015 15.6511 5.56646 15.6568 5.67339C15.6962 6.53484 15.1694 7.35997 14.1808 7.98978Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M14.1808 7.98978H14.1718H14.1612L14.093 8.02913C14.0507 8.00036 14.0067 7.97464 13.9628 7.9489C13.7035 7.79959 13.4332 7.67002 13.1544 7.56132C12.1591 7.17971 11.1034 6.97973 10.0375 6.97086C8.56148 6.94815 7.13239 7.25246 6.04243 7.82323H6.03186H6.02126L2.83008 9.66575V5.12381L6.02126 3.28129H6.03186H6.04243C7.13239 2.71052 8.56148 2.40621 10.0375 2.42892C11.5135 2.45163 12.9137 2.80289 13.9628 3.40696C14.8711 3.93534 15.457 4.61815 15.6144 5.35545C15.6369 5.46015 15.6511 5.56646 15.6568 5.67339C15.6962 6.53484 15.1694 7.35997 14.1808 7.98978Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M19.8061 5.14946V5.16611C19.8061 5.96246 19.4836 6.73913 18.8796 7.43708C18.4105 7.95933 17.8586 8.40075 17.2461 8.74364L15.5612 9.7156L13.1542 11.107L10.9697 9.8458L13.1542 8.58466L14.0928 8.04267L14.1609 8.0033H14.1715H14.1806C15.1691 7.37349 15.6944 6.54837 15.6566 5.696C15.6509 5.58907 15.6367 5.48277 15.6142 5.37807C15.4628 4.6453 14.877 3.95796 13.9626 3.42958C12.9165 2.82399 11.5102 2.47576 10.0372 2.45154C8.56419 2.42732 7.13206 2.73314 6.04208 3.30391H6.03151H6.02091L2.82969 5.14643L0.654297 3.88982L4.74171 1.52802C6.38878 0.575724 8.62624 0.0443151 10.9636 0.048857C13.301 0.0533989 15.5446 0.59238 17.2023 1.54921C18.8599 2.50605 19.7985 3.8005 19.8061 5.14946Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosU;
