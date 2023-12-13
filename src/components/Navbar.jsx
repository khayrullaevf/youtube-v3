import React from "react";

import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constant.js";
import SearchBar from "./SearchBar.jsx";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#fff",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          style={{ fontSize: "25px", fontWeight: "900", marginLeft: "10px" }}
          sx={{ display: { xs: "none", lg:'block' } }}
        >
          YouTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
