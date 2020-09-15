import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    container: (props) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "8rem 0",
      backgroundColor: "#2695eb", // default background colour
      ...(props && props.container),
    }),
    title: (props) => ({
      color: "white",
      fontWeight: "bold",
      ...(props && props.title),
    }),
    divider: (props) => ({
      width: "100%",
      marginTop: "1.5em",
      marginBottom: "1.5em",
      maxWidth: "3.25rem",
      borderWidth: ".2rem",
      borderTop: 0,
      borderLeft: 0,
      borderRight: 0,
      borderColor: "white",
      ...(props && props.divider),
    }),
    caption: (props) => ({
      color: "rgba(255,255,255,.75)",
      maxWidth: "66%",
      textAlign: "center",
      width: "760px",
      ...(props && props.caption),
    }),
  };
});

function Banner({ title, caption, style }) {
  const classes = useStyles(style);
  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      {caption && (
        <>
          <hr className={classes.divider} />
          <Typography className={classes.caption} variant="body1">
            {caption}
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Banner;
