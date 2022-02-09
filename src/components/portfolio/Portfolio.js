// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// const Portfolio = () => {
//   const theme = useTheme();
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ bgcolor: "background.paper", width: 500 }}>
//       <AppBar
//         position="static"
//         sx={{
//           bgcolor: "background.paper",
//           boxShadow: "none",
//           color: "#ff6347",
//         }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           TabIndicatorProps={{ style: { background: "#ff6347" } }}
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example">
//           <Tab label="Portfolio" {...a11yProps(0)} />
//           <Tab label="Resume" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={value}
//         onChangeIndex={handleChangeIndex}>
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Portfolio
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Resume
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// };

// export default Portfolio;

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

// const Portfolio = () => {
//   const [value, setValue] = useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Portfolio" value="1" />
//             <Tab label="Resume" value="2" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Portfolio</TabPanel>
//         <TabPanel value="2">Resume</TabPanel>
//       </TabContext>
//     </Box>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Portfolio" />
        <Tab label="Resume" />
      </Tabs>
    </Box>
  );
};
export default Portfolio;
