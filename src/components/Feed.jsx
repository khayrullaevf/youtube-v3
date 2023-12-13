import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos,setVideos]=useState([])
 

  useEffect(() => {
       fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
       .then((data)=>setVideos(data.items))

       
    
  }, [selectedCategory])
  





  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" } }}>

        <SideBar
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
        
        
        />
         
         <Typography className="copyright" variant="body2" sx={{mt:1.5, color:'#fff'}}>
          Fazliddin Khayrullaev 2023

         </Typography>
      </Box>
      <Box p={3} display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{
          color:'#000'
        }}>
          {selectedCategory}
         <span style={{color:'red'}}> videos</span>

        </Typography>
         <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
