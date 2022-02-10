import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@material-ui/lab/";

import resume from "../../assets/files/resume.pdf";

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
            Here you will find a list containing projects I've worked on using a
            range of technologies.
          </div>
          <div className="portfolio-content">
            From UI/UX to fully responsive, well optimized websites and web
            applications, kindly checkout some of my latest projects.
          </div>

          <div className="portfolio-content">
            <Link to="portfolio" className="portfolio-button">
              See Portfolio
            </Link>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="portfolio-content">
            <iframe
              src={resume}
              title="Winifred Esomonu Resume"
              width="100%"
              height="300"
              style={{
                borderBottom: "2px solid #333",
                borderRadius: 5,
              }}></iframe>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Portfolio;
