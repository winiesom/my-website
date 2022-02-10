import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { TabContext, TabList, TabPanel } from "@material-ui/lab/";

import "./portfolio.css";

const Portfolio = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box className="portfolio-box">
          <TabList
            TabIndicatorProps={{ style: { background: "#4b0082" } }}
            onChange={handleChange}
            aria-label="lab API tabs example">
            <Tab label="Portfolio" value="1" className="portfolio-label" />
            <Tab label="Resume" value="2" className="portfolio-label" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="portfolio-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin.
          </div>
          <div className="portfolio-content">
            Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum.
            Maecenas ipsum lacus.
          </div>

          <div className="portfolio-content">
            {/* <Button className="hero-button" style={{ marginRight: 20 }}>
              See Portfolio
            </Button> */}

            <Link to="portfolio" className="portfolio-button">
              See Portfolio
            </Link>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="portfolio-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus. Donec scelerisque sollicitudin.
          </div>
          <div className="portfolio-content">
            Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum.
            Maecenas ipsum lacus.
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Portfolio;
