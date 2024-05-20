"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Logout from "./components/Logout";

const HOME: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={11}>
        <Typography>Welcome to the application</Typography>
      </Grid>
      <Grid item xs={1}>
        <Logout />
      </Grid>
    </Grid>
  );
};

export default HOME;
