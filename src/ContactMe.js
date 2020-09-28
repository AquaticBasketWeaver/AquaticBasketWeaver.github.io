import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Banner from "./Banner";
import { Email } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  container: {},
  emailContainer: {
    fontSize: "3em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  email: {
    marginTop: "1rem",
    color: "#2695eb",
    textDecoration: "none",
  },
  emailIcon: {
    color: "#6c757d",
  },
}));

function ContactMe() {
  const classes = useStyles();
  return (
    <Box>
      <Banner
        title={"Contact Me"}
        caption={`Want to get in touch? You're welcome to send me an e-mail and I'll respond as soon as possible!`}
        style={{
          container: {
            backgroundColor: "white",
          },
          title: {
            color: "rgb(33, 37, 41)",
          },
          caption: {
            color: "rgb(108, 117, 125)",
          },
          divider: {
            borderColor: "rgb(38, 149, 235)",
          },
        }}
      >
        <Box className={classes.emailContainer}>
          <Email className={classes.emailIcon} fontSize={"inherit"} />
          <Typography
            className={classes.email}
            variant="body1"
            component="a"
            href="mailto:name@email.com"
          >
            lamivan1668@gmail.com
          </Typography>
        </Box>
      </Banner>
    </Box>
  );
}

export default ContactMe;
