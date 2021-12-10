import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const TabPanel = (props) => {
  const { children, value, index, marginRight, ...other } = props;

  console.log(marginRight)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box ml={2} my={2} mr={marginRight ? 0 : 2 }>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export { TabPanel };
