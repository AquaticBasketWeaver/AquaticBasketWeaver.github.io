import React, { useEffect, useState } from "react";
import { makeStyles, Box, Grid, Typography, Hidden } from "@material-ui/core";
import { Element } from "react-scroll";
import Banner from "../../components/Banner";
import resume from "../../Resume/resume.yaml";

import zenreachLogo from "../../img/work/zenreach.svg";
import ctrlVLogo from "../../img/work/CtrlV-logo.png";
import ttcLogo from "../../img/work/TTC-logo.png";
import bonfireLogo from "../../img/work/bonfire-logo.svg";

const yaml = require("js-yaml");

const useStyles = makeStyles((theme) => ({
  listContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 1rem",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "3rem 3rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3rem 6rem",
    },
  },
  workLogo: {
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  orgInfo: {
    color: "#6c757d",
  },
  divider: {
    marginTop: "1.5em",
    marginBottom: "1.5em",
    borderWidth: "2px",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderColor: "#20baf7",
  },
  orgContainer: {
    paddingRight: "3rem",
  },
  orgPoints: {
    marginBottom: "1rem",
  },
  pointsContainer: {
    marginTop: ".5rem",
    marginBottom: "2rem",
  },
}));

function WorkExperience({ id }) {
  const classes = useStyles();
  const [parsedResume, setParsedResume] = useState({});

  const logos = {
    zenreachLogo: zenreachLogo,
    ctrlVLogo: ctrlVLogo,
    ttcLogo: ttcLogo,
    bonfireLogo: bonfireLogo,
  };

  const displayResumePoints = ({ points }) => (
    <ul>
      {points.map(({ point, points }, index) => (
        <li key={index}>
          <Typography className={classes.orgPoints} variant="body1">
            {point}
          </Typography>
          {points && displayResumePoints({ points })}
        </li>
      ))}
    </ul>
  );

  const workSection = (experience) => {
    return (
      <Box className={classes.listContainer} key={experience.organization}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box className={classes.orgContainer}>
              <Typography variant="h4">{experience.organization}</Typography>
              {experience.position.map((info) => (
                <Box className={classes.pointsContainer} key={info.title}>
                  <Typography className={classes.orgInfo} variant="subtitle1">
                    {info.title + " | " + info.location}
                  </Typography>
                  <Typography className={classes.orgInfo} variant="subtitle1">
                    {info.duration}
                  </Typography>
                  <hr className={classes.divider}></hr>
                  {displayResumePoints(info)}
                </Box>
              ))}
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid className={classes.logoContainer} item md={6}>
              <img
                className={classes.workLogo}
                src={logos[experience.logoImg]}
                alt={experience.logoImg}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    );
  };

  useEffect(() => {
    const getResume = async () => {
      let response = await fetch(resume);
      let rawResume = await response.text();
      let parsedResume = yaml.safeLoad(rawResume);
      setParsedResume(parsedResume);
    };
    getResume();
  }, []);

  return (
    <Element name={id}>
      <Box className={classes.workExperienceContainer}>
        <Banner
          title={"Work Experience"}
          style={{
            container: {
              backgroundColor: "#1e7ad6",
            },
          }}
        />
        {parsedResume["Work Experience"] &&
          parsedResume["Work Experience"].map((experience) =>
            workSection(experience)
          )}
      </Box>
    </Element>
  );
}

export default WorkExperience;
