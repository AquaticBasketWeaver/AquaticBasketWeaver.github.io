import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  musicContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Music() {
  const classes = useStyles();
  return (
    <div className={classes.musicContainer}>
      <Typography variant="h6">
        Coming Soon
      </Typography>
    </div>
  );
}

export default Music;
