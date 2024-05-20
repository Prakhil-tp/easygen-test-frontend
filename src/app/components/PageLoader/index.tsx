import React from "react";
import { Box, CircularProgress } from "@mui/material";

const PageLoader: React.FC = () => {
  return (
    <Box sx={{ position: "absolute", left: "50%", top: "50%" }}>
      <CircularProgress color="inherit" size={80} thickness={2} />
    </Box>
  );
};
export default PageLoader;
