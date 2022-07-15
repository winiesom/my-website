import React, { useState } from "react";
import {
  Button,
  Dialog,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "../landingPage/landingpage.css";
import "./skills.css";

import html5 from "../../assets/images/html5.png";
import css3 from "../../assets/images/css3.png";
import js from "../../assets/images/js.png";
import ts from "../../assets/images/ts.png";
import bootstrap from "../../assets/images/bootstrap.png";
import sass from "../../assets/images/sass.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.svg";
import reactnative from "../../assets/images/reactnative.png";
import vue from "../../assets/images/vue.png";
import vuex from "../../assets/images/vuex.png";
import next from "../../assets/images/next.png";
import nuxt from "../../assets/images/nuxt.png";
import jquery from "../../assets/images/jquery.png";
import json from "../../assets/images/json.png";
import ajax from "../../assets/images/ajax.png";
import unittest from "../../assets/images/unittest.png";
import nodejs from "../../assets/images/nodejs.png";
import xd from "../../assets/images/xd.png";
import figma from "../../assets/images/figma.png";

const Skills = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Button
          className="hero-button"
          style={{ marginRight: 20 }}
          onClick={handleOpen}>
          See Skills
        </Button>
      </div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        sx={{ zIndex: 100000 }}
        PaperProps={{
          sx: {
            width: "100%",
            "@media only screen and (min-width: 960px)": {
              width: "100%",
              height: "100%",
              maxWidth: 500,
              position: "absolute",
              right: 0,
              top: 0,
            },
          },
        }}>
        <Fab
          size="small"
          aria-label="add"
          sx={{
            boxShadow: "none",
            color: "#000000",
            margin: 0,
            top: 20,
            right: 16,
            bottom: 20,
            left: "auto",
            position: "absolute",
            minWidth: 5,
            minHeight: 5,
            width: 6,
            height: 6,
            padding: 2,
            backgroundColor: "#ffffff",
            "@media only screen and (min-width: 600px)": {
              boxShadow: "inset -3px 0px 6px #00000029",
              margin: 0,
              top: 30,
              right: 485,
              bottom: 20,
              left: "auto",
              position: "fixed",
              minWidth: 5,
              minHeight: 5,
              width: 6,
              height: 6,
              padding: 2,
              backgroundColor: "#ffffff",
            },
          }}
          onClick={handleClose}>
          <CloseOutlinedIcon width={18} height={18} />
        </Fab>

        <div className="dialogTitle">My Skills</div>
        <Divider />

        <List
          sx={{
            width: "100%",
            marginTop: 3,
            bgcolor: "background.paper",
            paddingLeft: "20px",
          }}>
          <Grid container spacing={2}>
            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="HTML" src={html5} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        HTML5
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="CSS" src={css3} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        CSS3
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="JavaScript" src={js} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        JavaScript
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={ts} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Typescript
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={bootstrap} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Bootstrap
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={sass} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Sass
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>
            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={react} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        React
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={redux} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Redux
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={reactnative} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        React Native
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={vue} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Vue
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={vuex} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Vue X
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={next} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Next JS
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={nuxt} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Nuxt
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={jquery} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        JQuery
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={json} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        JSON
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={ajax} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        AJAX
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={unittest} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Unit Test
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={nodejs} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Node JS
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={xd} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Adobe XD
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>

            <Grid xs={6} sm={6} md={4}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Typescript" src={figma} />
                </ListItemAvatar>
                {/* <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        Figma
                      </Typography>
                    </React.Fragment>
                  }
                /> */}
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Dialog>
    </div>
  );
};

export default Skills;
