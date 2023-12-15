import React from "react";
import { useTheme } from "./ThemeContext.jsx";

import { Stack, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Link } from "react-router-dom";

import { logo } from "../utils/constant.js";
import SearchBar from "./SearchBar.jsx";
const Navbar = () => {
   const { isDarkMode, toggleMode } = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: `${isDarkMode ? "#000" : "#fff"}`,
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          style={{
            fontSize: "25px",
            fontWeight: "900",
            marginLeft: "10px",
          }}
          sx={{
            display: { xs: "none", lg: "block" },
            color: `${isDarkMode ? "#fff" : "#000"}`,
          }}
        >
          YouTube
        </Typography>
      </Link>
      <div style={{ display: "flex", columnGap: "10px" }}>
        <button
          style={{ background: `${isDarkMode ? "#000" : "#fff"}`,border:'none' }}
          onClick={toggleMode}
        >
          {isDarkMode ? (
            <LightModeIcon style={{ color: "yellow" }} />
          ) : (
            <NightlightIcon style={{ color: "#1F3641" }} />
          )}
        </button>
        <SearchBar />
      </div>
    </Stack>
  );
};

export default Navbar;
