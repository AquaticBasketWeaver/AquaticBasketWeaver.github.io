import React from "react";
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
    zindex: "1030",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  navButtonText: {
    color: "rgba(255,255,255,.7)",
    fontWeight: "bold",
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.toolbarContainer}>
          <Box className={classes.leftButtonGroup}>
            <Button className={classes.toolbarButton}>
              <Typography className={classes.navButtonText} variant="h6">Welcome</Typography>
            </Button>
          </Box>
          <Box className={classes.rightButtonGroup}>
            <Button className={classes.toolbarButton}>
              <Typography className={classes.navButtonText} variant="body1">About</Typography>
            </Button>
            <Button className={classes.toolbarButton}>
              <Typography className={classes.navButtonText} variant="body1">Work</Typography>
            </Button>
            <Button className={classes.toolbarButton}>
              <Typography className={classes.navButtonText} variant="body1">Photography</Typography>
            </Button>
            <Button className={classes.toolbarButton}>
              <Typography className={classes.navButtonText} variant="body1">Contact</Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
