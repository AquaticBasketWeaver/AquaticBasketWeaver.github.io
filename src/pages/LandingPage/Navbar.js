import React, { useState, useEffect, useCallback, useRef } from "react";
import { scroller, animateScroll } from "react-scroll";
import { useHistory } from "react-router-dom";
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
    justifyContent: "center",
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
  spacer: {
    width: "50%",
  },
}));

function Navbar({ sections, galleryPage, setGalleryPage }) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const isMountedRef = useRef(null); // for memory leak prevention purposes

  const [scrollState, setScrollState] = useState("top");
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const pickNavBar = useCallback(() => {
    if (isMountedRef.current) {
      if (window.innerWidth < theme.breakpoints.values.sm) {
        setMobileNavBar(true);
      } else {
        setMobileNavBar(false);
        setOpenDrawer(false);
      }
    }
  }, [theme.breakpoints.values.sm]);

  // Only runs once and determines the initial window size
  useEffect(() => {
    isMountedRef.current = true;
    pickNavBar();
    return () => (isMountedRef.current = false);
  });

  useEffect(() => {
    isMountedRef.current = true;

    const scrollListener = document.addEventListener("scroll", (e) => {
      if (isMountedRef.current) {
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
      }
    });

    const mobileSizeListener = window.addEventListener("resize", (e) => {
      pickNavBar();
    });

    return () => {
      isMountedRef.current = false;
      document.removeEventListener("scroll", scrollListener);
      document.removeEventListener("resize", mobileSizeListener);
    };
  }, [scrollState, mobileNavBar, pickNavBar]);

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

          {/* Temporary spacing solution */}
          <Hidden smUp>
            <div className={classes.spacer}></div>
          </Hidden>


          <Button
            className={classes.toolbarButton}
            onClick={() => {
              if (!galleryPage) {
                setGalleryPage(1);
              }
              history.push("/content");
            }}
          >
            <Typography
              className={dynamicNavBar(
                classes.navButtonText,
                classes.navButtonTextScroll
              )}
              variant="h6"
            >
              Content
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
