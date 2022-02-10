import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

import { Container, Grid } from "@mui/material";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";

import qcoga from "../../assets/images/qcoga.png";
import memories from "../../assets/images/memories.png";
import spmWebsite from "../../assets/images/spmWebsite.png";
import spmApp from "../../assets/images/spmApp.png";

const urls = [
  {
    url: "https://www.qcoga.org",
    id: 1,
    pic: qcoga,
    desc: "Queens College Old Girls' Association",
  },
  {
    url: "https://my-memories-app.netlify.app",
    id: 2,
    pic: memories,
    desc: "Memories App",
  },
  {
    url: "https://smartperforma.com",
    id: 3,
    pic: spmWebsite,
    desc: "Smart Performa Appraisal System",
  },
  {
    url: "https://smartperformanceappraisal.com",
    id: 4,
    pic: spmApp,
    desc: "Smart performance appraisal",
  },
];

const Jobs = () => {
  return (
    <div>
      <Container maxWidth="xl" className="jobs-container">
        <Grid container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid item xs={6} className="jobs-title">
            {" "}
            Projects
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to="/">
              <SettingsBackupRestoreIcon
                sx={{ fontSize: 30, color: "#4c008267" }}
              />
            </Link>
          </Grid>
        </Grid>
        {/* <div className="jobs-title">Projects</div> */}
        <Grid container spacing={2} className="jobs-box">
          {urls &&
            urls.map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3} key={item.id}>
                <div className="jobs-content">
                  <img src={item.pic} alt={item.desc} />
                  <a
                    className="jobs-btn"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer">
                    View project
                  </a>
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Jobs;
