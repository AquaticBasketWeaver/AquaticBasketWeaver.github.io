import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  leftButtonGroup: {
    float: "left",
  },
  rightButtonGroup: {
    float: "right",
  },
  toolbarContainer: {
    maxWidth: "1140px",
    width: "100%",
  },
  toolbar: {
    justifyContent: "center",
  },
  toolbarButton: {
    textTransform: "none",
  },
  appBar: {
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    zIndex: "1030",
    boxShadow: "none",
    backgroundColor: "transparent",
    transition: "background-color 200ms linear",
  },
  appBarScroll: {
    backgroundColor: "#fff",
    transition: "background-color 200ms linear",
  },
  navButtonText: {
    color: "rgba(255,255,255,.7)",
    fontWeight: "bold",
  },
  navButtonTextScroll: {
    color: "black",
  }
}));

function Navbar({ scrollAnchors }) {
  const classes = useStyles();

  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "") {
          setScrollState("");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const buttonTextScrollChange = classes.navButtonText + " " + (!scrollState && classes.navButtonTextScroll)

  return (
    <AppBar className={classes.appBar + " " + (!scrollState && classes.appBarScroll)} position="static">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.toolbarContainer}>
          <Box className={classes.leftButtonGroup}>
            <Button
              className={classes.toolbarButton}
              href={`#${scrollAnchors.welcome}`}
            >
              <Typography className={buttonTextScrollChange} variant="h6">
                Welcome
              </Typography>
            </Button>
          </Box>
          <Box className={classes.rightButtonGroup}>
            <Button
              className={classes.toolbarButton}
              href={`#${scrollAnchors.about}`}
            >
              <Typography className={buttonTextScrollChange} variant="body1">
                About
              </Typography>
            </Button>
            <Button
              className={classes.toolbarButton}
              href={`#${scrollAnchors.work}`}
            >
              <Typography className={buttonTextScrollChange} variant="body1">
                Work
              </Typography>
            </Button>
            <Button
              className={classes.toolbarButton}
              href={`#${scrollAnchors.photography}`}
            >
              <Typography className={buttonTextScrollChange} variant="body1">
                Photography
              </Typography>
            </Button>
            <Button
              className={classes.toolbarButton}
              href={`#${scrollAnchors.contact}`}
            >
              <Typography className={buttonTextScrollChange} variant="body1">
                Contact
              </Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
