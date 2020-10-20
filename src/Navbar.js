import React, { useState, useEffect } from "react";
import { scroller, animateScroll } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  makeStyles,
  IconButton,
  Hidden,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const navBarHeight = 64;

const useStyles = makeStyles(() => ({
  rightButtonGroup: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  toolbarContainer: {
    display: "flex",
    alignItems: "center",
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
    zIndex: "1430",
    boxShadow: "none",
    backgroundColor: "transparent",
    transition: "background-color 200ms linear",
    height: `${navBarHeight}px`,
  },
  appBarScroll: {
    backgroundColor: "#fff",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    transition: "background-color 200ms linear",
    display: "flex",
    justifyContent: "center",
  },
  appBarNoBoxShadow: {
    boxShadow: "none",
  },
  navButtonText: {
    color: "rgba(255,255,255,.7)",
    fontWeight: "bold",
  },
  navButtonTextScroll: {
    color: "black",
  },
  menuButton: {
    color: "black",
  },
  list: {
    paddingTop: `${navBarHeight}px`,
    paddingLeft: `${45}px`,
  },
}));

function Navbar({ sections }) {
  const classes = useStyles();
  const theme = useTheme();

  const [scrollState, setScrollState] = useState("top");
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Only runs once and determines the initial window size
  useEffect(() => {
    if (window.innerWidth < theme.breakpoints.values.sm) {
      setMobileNavBar(true);
    } else {
      setMobileNavBar(false);
    }
  }, [theme.breakpoints.values.sm]);

  useEffect(() => {
    const scrollListener = document.addEventListener("scroll", (e) => {
      const scrolled = document.scrollingElement.scrollTop;
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

    const mobileSizeListener = window.addEventListener("resize", (e) => {
      if (window.innerWidth < theme.breakpoints.values.sm) {
        setMobileNavBar(true);
      } else {
        setMobileNavBar(false);
        setOpenDrawer(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", scrollListener);
      document.removeEventListener("resize", mobileSizeListener);
    };
  }, [scrollState, mobileNavBar, theme.breakpoints.values.sm]);

  const smoothScroll = (anchor) => {
    if (anchor) {
      scroller.scrollTo(anchor, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutCubic",
        offset: -navBarHeight,
      });
    } else {
      animateScroll.scrollToTop({
        duration: 800,
        delay: 0,
        smooth: "easeInOutCubic",
      });
    }
  };

  const dynamicNavBar = (firstClass, secondClass) =>
    `${firstClass} ${(!scrollState || mobileNavBar) && secondClass}`;

  const createNavBar = () => {
    return (
      <Box className={classes.rightButtonGroup}>
        {Object.entries(sections).map(([key, value]) => {
          return (
            <Button
              key={key}
              className={classes.toolbarButton}
              onClick={() => {
                smoothScroll(value);
              }}
            >
              <Typography
                className={dynamicNavBar(
                  classes.navButtonText,
                  classes.navButtonTextScroll
                )}
                variant="body1"
              >
                {value}
              </Typography>
            </Button>
          );
        })}
      </Box>
    );
  };

  const createSandwichBar = () => {
    return (
      <List className={classes.list}>
        {Object.entries(sections).map(([key, value]) => (
          <ListItem
            button
            key={key}
            onClick={() => {
              setOpenDrawer(false);
              smoothScroll(value);
            }}
          >
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <AppBar
      className={
        dynamicNavBar(classes.appBar, classes.appBarScroll) +
        " " +
        (openDrawer && classes.appBarNoBoxShadow)
      }
      position="static"
    >
      <Drawer
        anchor={"top"}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        {createSandwichBar()}
      </Drawer>

      <Toolbar className={classes.toolbar}>
        <Box className={classes.toolbarContainer}>
          <Hidden smUp>
            <IconButton
              edge="start"
              className={dynamicNavBar(null, classes.menuButton)}
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
              color="inherit"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Button
            className={classes.toolbarButton}
            onClick={() => {
              setOpenDrawer(false);
              smoothScroll();
            }}
          >
            <Typography
              className={dynamicNavBar(
                classes.navButtonText,
                classes.navButtonTextScroll
              )}
              variant="h6"
            >
              Welcome
            </Typography>
          </Button>
          <Hidden only={"xs"}>{createNavBar()}</Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
