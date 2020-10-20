import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

import cover from "./img/photos/dock_view-min.jpg";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    height: "100vh",
  },
  divider: {
    width: "100%",
    marginTop: "1.5em",
    marginBottom: "1.5em",
    borderColor: "#2695eb",
    maxWidth: "3.25rem",
    borderWidth: ".2rem",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  caption: {
    maxWidth: "66%",
    textAlign: "center",
    width: "760px",
    color: "rgba(255,255,255,.75)",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  img: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
    overflow: "hidden",
  },
  tint: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: "-1",
    backgroundColor: "rgba(38,149,235,.3)",
  },
}));

function Welcome() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <img className={classes.img} src={cover} alt={""} />
        <div className={classes.tint}></div>
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h3">
          WELCOME
        </Typography>
        <hr className={classes.divider} />
        <Typography className={classes.caption} variant="h6">
          Hi, my name is Ivan Lam and here you'll be able to see some of the
          things I did, as well as the hobbies that I'm interested in
        </Typography>
      </Box>
    </>
  );
}

export default Welcome;
