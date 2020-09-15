import React from "react";
import { makeStyles, Box, Grid, List } from "@material-ui/core";
import Banner from "./Banner";
import zenreachLogo from "./img/work/Zenreach-logo.png";

const useStyles = makeStyles(() => ({
  workExperienceContainer: {},
  listContainer: {
    padding: "3rem 0",
  },
  workLogo: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function WorkExperience() {
  const classes = useStyles();
  return (
    <Box className={classes.workExperienceContainer}>
      <Banner
        title={"Work Experience"}
        style={{
          container: {
            backgroundColor: "#1e7ad6",
          },
        }}
      />
      <Box className={classes.listContainer}>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid className={classes.logoContainer} item xs={6}>
            <img className={classes.workLogo} src={zenreachLogo} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default WorkExperience;
