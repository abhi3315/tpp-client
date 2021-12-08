import React from "react";
import Paper from "@mui/material/Paper";

import useStyles from "./Card.styles";

function Card({ children }) {
  const classes = useStyles();

  return <Paper className={classes.root}>{children}</Paper>;
}

export default Card;
