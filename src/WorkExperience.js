import React, { useEffect, useState } from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import Banner from "./Banner";
import zenreachLogo from "./img/work/Zenreach-logo.png";
import ctrlVLogo from "./img/work/CtrlV-logo.png";
import ttcLogo from "./img/work/TTC-logo.png";
import resume from "./Resume/resume.yaml";

const yaml = require("js-yaml");

const useStyles = makeStyles(() => ({
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
    padding: "0 3rem",
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

  // TODO: Once you get server stuff set up, you're going to want logos stored on S3
  // or something, and you should be getting them based on what you have in resume.yaml
  // (e.g. logoImg should be changed in resume.yaml)
  const logos = {
    zenreachLogo: zenreachLogo,
    ctrlVLogo: ctrlVLogo,
    ttcLogo: ttcLogo
  };

  const workSection = (experience) => {
    return (
      <Box className={classes.listContainer} id={id}>
        <Grid container>
          <Grid item xs={6}>
            <Box className={classes.orgContainer}>
              <Typography variant="h4">
                {experience.organization}
              </Typography>
              {experience.position.map((info) => (
                <Box className={classes.pointsContainer}>
                  <Typography className={classes.orgInfo} variant="subtitle1">
                    {info.title + " | " + info.location}
                  </Typography>
                  <Typography
                    className={classes.orgInfo}
                    variant="subtitle1"
                  >
                    {info.duration}
                  </Typography>
                  <hr className={classes.divider}></hr>
                  <ul>
                    {info.points.map(({ point }) => (
                      <li>
                        <Typography className={classes.orgPoints} variant="body1">{point}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid className={classes.logoContainer} item xs={6}>
            <img className={classes.workLogo} src={logos[experience.logoImg]} />
          </Grid>
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
  );
}

export default WorkExperience;
