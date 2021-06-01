import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Element } from "react-scroll";
import Banner from "../../components/Banner";
import { Email } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() => ({
  container: {},
  contactsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // width: "100vw",
  },
  contactContainer: {
    fontSize: "3em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "20rem"
  },
  contact: {
    marginTop: "1rem",
    color: "#2695eb",
    textDecoration: "none",
  },
  emailIcon: {
    color: "#6c757d",
  },
}));

function ContactMe({ id }) {
  const classes = useStyles();
  return (
    <Element name={id}>
      <Box>
        <Banner
          title={"Contact Me"}
          caption={`Want to get in touch? Reach out to me via email or LinkedIn!`}
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
          <Box className={classes.contactsContainer}>
            <Box className={classes.contactContainer}>
              <Email className={classes.emailIcon} fontSize={"inherit"} />
              <Typography
                className={classes.contact}
                variant="body1"
                component="a"
                href="mailto:Lamivan1668@gmail.com"
              >
                Lamivan1668@gmail.com
              </Typography>
            </Box>
            <Box className={classes.contactContainer}>
              <LinkedInIcon className={classes.emailIcon} fontSize={"inherit"} />
              <Typography
                className={classes.contact}
                variant="body1"
                component="a"
                href="https://www.linkedin.com/in/ivan-lam-75603b134/"
              >
                My Profile
              </Typography>
            </Box>
          </Box>
        </Banner>
      </Box>
    </Element>
  );
}

export default ContactMe;
