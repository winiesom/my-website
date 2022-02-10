import React, { useState } from "react";
import "./landingpage.css";

import Portfolio from "../portfolio/Portfolio";
import ParallaxSection from "../parallax/ParallaxSection";

import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import blobFour from "../../assets/images/blobFour.svg";
import resume from "../../assets/files/resume.pdf";

const pages = [
  { name: "About", icon: <InfoIcon />, section: "s2" },
  { name: "Portfolio", icon: <WorkIcon />, section: "s2" },
  { name: "Resume", icon: <ArticleIcon />, section: "s2" },
  { name: "Contact", icon: <PhoneIcon />, section: "s3" },
];

const LandingPage = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <Container className="main-container">
        <Box className="inner-container">
          <AppBar position="static" className="appbar">
            <Container maxWidth="xl" className="appbar-container">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  className="logo"
                  component="div"
                  sx={{ mr: 0, display: { xs: "none", md: "flex" } }}>
                  WE
                </Typography>

                <Box
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  className="mobile-menu">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}>
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}>
                    {pages.map((page) => (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <a
                          href={`#${page.section}`}
                          className="appbar-links-style">
                          <div>{page.name}</div>
                        </a>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  className="logo"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  WE
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                  }}>
                  {pages.map((page) => (
                    <Button
                      className="appbar-links"
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}>
                      <a
                        href={`#${page.section}`}
                        className="appbar-links-style">
                        <div>
                          <div>{page.icon}</div>
                        </div>
                        {page.name}
                      </a>
                    </Button>
                  ))}
                </Box>

                <div className="appbar-socials">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer">
                    <FacebookIcon
                      fontSize="small"
                      sx={{ color: "#4b0082", marginRight: 2 }}
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer">
                    <InstagramIcon
                      fontSize="small"
                      sx={{ color: "#4b0082", marginRight: 2 }}
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer">
                    <TwitterIcon fontSize="small" sx={{ color: "#4b0082" }} />
                  </a>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="lg" className="carousel-container">
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="my-intro">
                <div className="headline">
                  <div className="title">
                    Providing creative design and web solutions
                  </div>
                  <div className="red-underline"></div>
                  <div className="author">Frontend Developer</div>

                  <div className="desc">
                    Hi, I am Winifred. UI/UX designer and web developer. Lorem
                    ipsum dolor sit amet. Adipiscing consectetur.
                  </div>
                  <div className="hero-button-box">
                    <Button
                      className="hero-button"
                      style={{ marginRight: 20 }}
                      href={resume}
                      download>
                      Download CV
                    </Button>
                    <Button className="hero-button" href="#s3">
                      Hire Me
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="carousel-grid">
                <div className="carousel-box">
                  <img
                    src={blobFour}
                    alt="Front end development"
                    className="carousel-img"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Grid container spacing={2} className="section-two" id="s2">
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className="about-container">
              <div className="about-title">What I do</div>
              <div className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin.
              </div>
              <div className="about">
                Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                vestibulum. Maecenas ipsum lacus.
              </div>
              <div className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin.
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Portfolio />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" className="parallax-container">
          <ParallaxSection />
        </Container>

        <Container maxWidth="lg" className="contact-container" id="s3">
          <Grid container spacing={2} className="contact-box">
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              className="contact-item">
              <a href="tel:+233263105085" className="contact-links">
                <PhoneIphoneIcon
                  sx={{ fontSize: 70, color: "#ffffffb0", marginBottom: 3 }}
                />
                +233 26 310 5085
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              className="contact-item">
              <a href="mailto:winiesom@gmail.com" className="contact-links">
                <MailIcon
                  sx={{ fontSize: 70, color: "#ffffffb0", marginBottom: 3 }}
                />
                winiesom@gmail.com
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              className="contact-item">
              <a
                href="https://www.linkedin.com/in/winifred-esomonu-358502196/"
                target="_blank"
                rel="noreferrer"
                className="contact-links">
                <LinkedInIcon
                  sx={{ fontSize: 70, color: "#ffffffb0", marginBottom: 3 }}
                />
                LinkedIn
              </a>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" className="footer-container">
          <Grid container spacing={2} className="footer-box">
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="footer-title">Explore</div>
              <div className="footer-links-box">
                <a href="#s2" className="footer-link">
                  About
                </a>
                <a href="#s2" className="footer-link">
                  portfolio
                </a>
                <a href="#s2" className="footer-link">
                  resume
                </a>
                <a href="#s3" className="footer-link">
                  contact
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="footer-title">Connect</div>
              <div className="footer-links-box">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link">
                  facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link">
                  instagram
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link">
                  twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/winifred-esomonu-358502196/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link">
                  LinkedIn
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="footer-title">Contact Info</div>
              <div className="footer-links-box">
                <a href="tel:+233263105085" className="footer-link">
                  <div className="footer-link-icon">
                    <PhoneIcon
                      sx={{ fontSize: 20, marginRight: 1, marginTop: 0.5 }}
                    />

                    <div>+233 26 310 5085</div>
                  </div>
                </a>
                <a href="mailto:winiesom@gmail.com" className="footer-link">
                  <div className="footer-link-icon">
                    <MailIcon
                      sx={{ fontSize: 20, marginRight: 1, marginTop: 0.5 }}
                    />
                    <div style={{ textTransform: "lowercase" }}>
                      winiesom@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default LandingPage;
