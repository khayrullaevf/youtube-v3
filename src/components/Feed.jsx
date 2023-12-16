import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { useTheme } from "./ThemeContext";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos]=useState([])
 

  useEffect(() => {
       fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
       .then((data)=>setVideos(data.items))

       
    
  }, [selectedCategory])
  

  const {isDarkMode}=useTheme()





  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" } }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: `${isDarkMode ? "#fff" : "#000"}`,
          }}
        >
          {selectedCategory}
          <span style={{ color: "red" }}> videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
