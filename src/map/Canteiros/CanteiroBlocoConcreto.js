import useStyles from "../../styles";
import { Box, Tooltip } from "@material-ui/core";
import clsx from "clsx";

const CanteirosBlocoConcreto = ({openDrawer}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.concreteBrickFlowerbed01}>
        <Tooltip
          title="Canteiro Bloco de Concreto - 1"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>openDrawer("canteiroBlocoConcreto")}
            style={{cursor: 'pointer'}}
          >
            <path
              d="M5.83043 18.635V23.177C5.34239 23.2053 4.85579 23.1007 4.42255 22.8742L1.0043 20.906C0.60313 20.6759 0.427522 20.364 0.471423 20.0627V15.6934C0.503213 15.9356 0.680334 16.1748 1.00278 16.361L3.64446 17.8871L4.42104 18.3413C4.85576 18.5645 5.34275 18.666 5.83043 18.635Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.concreteBrickFlowerbed02}>
        <Tooltip
          title="Canteiro Bloco de Concreto - 2"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>openDrawer("canteiroBlocoConcreto")}
            style={{cursor: 'pointer'}}
          >
            <path
              d="M5.83043 18.635V23.177C5.34239 23.2053 4.85579 23.1007 4.42255 22.8742L1.0043 20.906C0.60313 20.6759 0.427522 20.364 0.471423 20.0627V15.6934C0.503213 15.9356 0.680334 16.1748 1.00278 16.361L3.64446 17.8871L4.42104 18.3413C4.85576 18.5645 5.34275 18.666 5.83043 18.635Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.concreteBrickFlowerbed03}>
        <Tooltip
          title="Canteiro Bloco de Concreto - 3"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>openDrawer("canteiroBlocoConcreto")}
            style={{cursor: 'pointer'}}
          >
            <path
              d="M5.83043 18.635V23.177C5.34239 23.2053 4.85579 23.1007 4.42255 22.8742L1.0043 20.906C0.60313 20.6759 0.427522 20.364 0.471423 20.0627V15.6934C0.503213 15.9356 0.680334 16.1748 1.00278 16.361L3.64446 17.8871L4.42104 18.3413C4.85576 18.5645 5.34275 18.666 5.83043 18.635Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.concreteBrickFlowerbed04}>
        <Tooltip
          title="Canteiro Bloco de Concreto - 4"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>openDrawer("canteiroBlocoConcreto")}
            style={{cursor: 'pointer'}}
          >
            <path
              d="M5.83043 18.635V23.177C5.34239 23.2053 4.85579 23.1007 4.42255 22.8742L1.0043 20.906C0.60313 20.6759 0.427522 20.364 0.471423 20.0627V15.6934C0.503213 15.9356 0.680334 16.1748 1.00278 16.361L3.64446 17.8871L4.42104 18.3413C4.85576 18.5645 5.34275 18.666 5.83043 18.635Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.concreteBrickFlowerbed05}>
        <Tooltip
          title="Canteiro Bloco de Concreto - 5"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>openDrawer("canteiroBlocoConcreto")}
            style={{cursor: 'pointer'}}
          >
            <path
              d="M5.83043 18.635V23.177C5.34239 23.2053 4.85579 23.1007 4.42255 22.8742L1.0043 20.906C0.60313 20.6759 0.427522 20.364 0.471423 20.0627V15.6934C0.503213 15.9356 0.680334 16.1748 1.00278 16.361L3.64446 17.8871L4.42104 18.3413C4.85576 18.5645 5.34275 18.666 5.83043 18.635Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
      <Box className={classes.concreteBrickFlowerbed06}>
        <Tooltip
          title="Canteiro Bloco de Concreto - 6"
          placement="top"
          followCursor
          arrow
          classes={{
            tooltip: clsx(classes.tooltip, classes.tooltipTransform),
            arrow: classes.tooltipArrow,
          }}
        >
          <svg
            width="33"
            height="24"
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>openDrawer("canteiroBlocoConcreto")}
            style={{cursor: 'pointer'}}
          >
            <path
              d="M5.83043 18.635V23.177C5.34239 23.2053 4.85579 23.1007 4.42255 22.8742L1.0043 20.906C0.60313 20.6759 0.427522 20.364 0.471423 20.0627V15.6934C0.503213 15.9356 0.680334 16.1748 1.00278 16.361L3.64446 17.8871L4.42104 18.3413C4.85576 18.5645 5.34275 18.666 5.83043 18.635Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="#A26C40"
              className="changeColor"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              fill="black"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0813 3.41406V7.95602C32.0813 8.22551 31.9057 8.49349 31.5514 8.69787L7.00136 22.8733C6.64025 23.067 6.23784 23.1708 5.82812 23.1761V18.6342C6.23733 18.6287 6.63921 18.5248 6.99984 18.3314L28.9007 5.68504L31.5499 4.15592C31.9057 3.95153 32.0813 3.6775 32.0813 3.41406Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="#23B258"
              className="changeColor"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              fill="white"
              className="changeColor"
              fill-opacity="0.25"
            />
            <path
              d="M32.0815 3.4147C32.0815 3.68419 31.9059 3.95217 31.5516 4.15656L28.9024 5.68568L7.00149 18.332C6.64085 18.5255 6.23897 18.6293 5.82977 18.6348C5.34125 18.663 4.8542 18.5584 4.42036 18.332L3.64377 17.8778L1.00207 16.3517C0.679616 16.1655 0.502494 15.9263 0.470703 15.6841V15.516C0.505522 15.2768 0.678132 15.0436 0.994527 14.862L25.5386 0.68801C26.2486 0.277719 27.4052 0.279233 28.1197 0.68801L31.538 2.65619C31.8968 2.87421 32.0815 3.14521 32.0815 3.4147Z"
              stroke="#231F20"
              stroke-opacity="0.1"
            />
          </svg>
        </Tooltip>
      </Box>
    </>
  );
};

export default CanteirosBlocoConcreto;