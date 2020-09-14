import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  aboutContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2695eb",
    padding: "8rem 0",
  },
  divider: {
    width: "100%",
    marginTop: "1.5em",
    marginBottom: "1.5em",
    borderColor: "white",
    maxWidth: "3.25rem",
    borderWidth: ".2rem",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  caption: {
    color: "rgba(255,255,255,.75)",
    maxWidth: "66%",
    textAlign: "center",
    width: "760px",
  }
}));

function About() {
  const classes = useStyles();
  return (
    <Box className={classes.aboutContainer}>
      <Typography className={classes.title} variant="h4">
        About Me
      </Typography>
      <hr className={classes.divider} />
      <Typography className={classes.caption} variant="body1">
        Hey there! I am a fourth year computer science student currently studying at the University of Waterloo.
        I have a passion for programming, technology, and in general, learning new things so that I can apply them in creative ways.
        Here you can follow me as I try my hand with photography, as well as view some of the things I've done during my co-op terms.
        I'm also starting to dabble with a bit of guitar and music in general, so be prepared for that in the future!
      </Typography>
    </Box>
  );
}

export default About;
