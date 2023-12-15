import React from "react";

import { Stack } from "@mui/material";
import { categories } from "../utils/constant";
import { useTheme } from "./ThemeContext";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

const { isDarkMode } = useTheme();

return (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
    p={2}
  >
    {categories.map((category) => (
      <button
        className={`category-btn ${isDarkMode ? "dark-mode" : "light-mode"}`}
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background:
            category.name === selectedCategory
              ? `${isDarkMode ? "#272727" : "#F2F2F2"}`
              : `${isDarkMode ? "#000" : "#fff"}`,
          color: category.name === selectedCategory ? "#fff" : "#898989",
        }}
        key={category.name}
      >
        <span
          style={{
            color:
              category.name === selectedCategory
                ? `${isDarkMode ? "#FFFFFF" : "#272727"}`
                : "#898989",
            marginRight: "5px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
            color: `${isDarkMode ? "#FFFFFF" : "#272727"}`,
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);};

export default SideBar;
