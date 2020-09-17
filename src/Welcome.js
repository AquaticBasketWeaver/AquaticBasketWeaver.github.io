import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

// TODO: remove this when photos get moved onto s3
import cover from "./img/photos/DSC_0025.jpg";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    background: `linear-gradient(to bottom,rgba(38,149,235,.3) 0,rgba(38,149,235,.3) 100%), url(${cover})`,
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
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
    overflow: "hidden",
  },
}));

function Welcome() {
  const classes = useStyles();
  return (
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h3">WELCOME</Typography>
        <hr className={classes.divider} />
        <Typography className={classes.caption} variant="h6">
          Hi, my name is Ivan Lam and here you'll be able to see some of the
          things I did, as well as the hobbies that I'm interested in
        </Typography>
      </Box>
  );
};

export default Welcome;
