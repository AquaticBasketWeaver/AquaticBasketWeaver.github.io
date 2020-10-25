import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  makeStyles,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  Hidden,
} from "@material-ui/core";
import { ArrowBack, Menu } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
  },
  arrow: {
    position: "absolute",
  },
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  selected: {
    background: "rgb(92, 123, 171, 0.2)",
  },
  mobileNavBar: {
    backgroundColor: "white",
  },
  mobileNavBarText: {
    color: "black",
  },
}));

function SideBar({ sections, selectedContent, setSelectedContent }) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMountedRef = useRef(null); // for memory leak prevention purposes

  const pickNavBar = useCallback(() => {
    if (isMountedRef.current) {
      if (window.innerWidth < theme.breakpoints.values.md) {
        setMobileNavBar(true);
      } else {
        setMobileNavBar(false);
        setOpenDrawer(false);
      }
    }
  }, [theme.breakpoints.values.md]);

  // Only runs once and determines the initial window size
  useEffect(() => {
    isMountedRef.current = true;
    pickNavBar();
    return () => (isMountedRef.current = false);
  }, [pickNavBar]);

  useEffect(() => {
    isMountedRef.current = true;

    const mobileSizeListener = window.addEventListener("resize", (e) => {
      pickNavBar();
    });

    return () => {
      isMountedRef.current = false;
      document.removeEventListener("resize", mobileSizeListener);
    };
  }, [mobileNavBar, pickNavBar]);

  const sideBar = (variant = "permanent") => {
    return (
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant={variant}
        anchor="left"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <List className={classes.list}>
          {Object.entries(sections).map(([key, value]) => (
            <ListItem
              className={selectedContent === value ? classes.selected : ""}
              button
              key={key}
              onClick={() => {
                setSelectedContent(value);
                if (mobileNavBar) {
                  setOpenDrawer(false);
                }
              }}
            >
              <ListItemText className={classes.listItem} primary={value} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem
          button
          onClick={() => {
            history.push("/");
          }}
          key={"back"}
        >
          <ListItemIcon className={classes.arrow}>
            <ArrowBack />
          </ListItemIcon>
          <ListItemText className={classes.listItem} primary={"Back"} />
        </ListItem>
      </Drawer>
    );
  };

  return (
    <>
      <Hidden mdUp>
        <AppBar className={classes.mobileNavBar}>
          {sideBar("temporary")}
          <Toolbar>
            <IconButton
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            >
              <Menu />
            </IconButton>
            <Typography className={classes.mobileNavBarText}>{selectedContent}</Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smDown>{sideBar()}</Hidden>
    </>
  );
}

export default SideBar;
