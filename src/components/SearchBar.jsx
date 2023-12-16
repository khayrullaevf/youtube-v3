import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { useTheme } from "./ThemeContext";









const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate =useNavigate()


  const {isDarkMode}=useTheme()




  const handleSubmit=(e)=>{
    e.preventDefault()
    if (searchTerm) {
       navigate(`/search/${searchTerm}`)
       

       setSearchTerm('')
    }


  }











  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: `${
          isDarkMode ? "0.1rem solid #303030" : "0.1rem solid #e3e3e3"
        }`,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: `${isDarkMode ? "#000" : "#fff"}`,
      }}
    >
      <input
        type="text"
        className='search-bar'
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          background: `${isDarkMode ? "#000" : "#fff"}`,
          color: `${isDarkMode ? "#fff" : "#000"}`,
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: `${isDarkMode ? "#fff" : "red"}`,
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
