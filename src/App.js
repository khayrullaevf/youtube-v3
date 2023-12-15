import React from "react";
import { useTheme } from "./components/ThemeContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Register,
} from "./components";

function App() {
  const isLoggedIn = localStorage.getItem("password");
  const { isDarkMode } = useTheme();
  return (
    <BrowserRouter>
      <Box
        sx={{
          background: `${isDarkMode ? "#000" : "#fff"}`,
        }}
      >
        {window.location.pathname !== "/register" ? (
          <Navbar />
        ) : null}

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/register" element={<Register />} />
          {isLoggedIn ? (
            <Route path="/channel/:id" element={<ChannelDetail />} />
          ) : (
            <Route path="/channel/:id" element={<Navigate to="/register" />} />
          )}
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
