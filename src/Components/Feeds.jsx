import { Box } from "@mui/material";
import React from "react";
import Posts from "./Posts";

const Feeds = () => {
  return (
    <Box p={{ xs: 0, md: 2 }} flex={4}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
};

export default Feeds;
