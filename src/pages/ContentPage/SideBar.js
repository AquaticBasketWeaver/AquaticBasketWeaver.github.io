import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  makeStyles,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
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
  }
}));

function SideBar({ sections, selectedContent, setSelectedContent }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      anchor="left"
    >
      <List className={classes.list}>
        {Object.entries(sections).map(([key, value]) => (
          <ListItem className={(selectedContent === value) ? classes.selected : ""} button key={key} onClick={() => {
            setSelectedContent(value);
          }}>
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
}

export default SideBar;
