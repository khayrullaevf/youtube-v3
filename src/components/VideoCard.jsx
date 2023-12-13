import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoCard = ({ vedio: {id: { videoId },snippet,},}) => {

//   const{videoDetail,setVideoDetail}=useState([])
  
  

//   useEffect(() => {
//     fetchFromAPI(
//       `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
//     ).then((data)=>setVideoDetail(data));
   
//   }, [videoId])
  
// console.log(videoDetail);


  return (
    <Card
      sx={{
        width: { md: "320px", lg: "358px", sm: "300px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "300px", lg: "358px", md: "320px" },
            height: 200,
            borderRadius: "20px",
          }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#FFF", height: "106px", paddingTop: "-10px" }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#1E1E1E"
            sx={{ width: { xs: "100%", sm: "300px" } }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
          <Typography variant="subtitle2" color="gray">
            12 views {snippet?.publishedAt} ago
          </Typography>
        </Link>
      </CardContent>
    </Card>
    // <Card
    //   sx={{
    //     width: { xs: "100%", sm: "358px", md: "320px" },
    //     boxShadow: "none",
    //     borderRadius: 0,
    //   }}
    // >
    //   <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
    //     <CardMedia
    //       image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
    //       alt={snippet?.title}
    //       sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
    //     />
    //   </Link>
    //   <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
    //     <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
    //       <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
    //         {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
    //       </Typography>
    //     </Link>
    //     <Link
    //       to={
    //         snippet?.channelId
    //           ? `/channel/${snippet?.channelId}`
    //           : demoChannelUrl
    //       }
    //     >
    //       <Typography variant="subtitle2" color="gray">
    //         {snippet?.channelTitle || demoChannelTitle}
    //         <CheckCircle
    //           sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
    //         />
    //       </Typography>
    //     </Link>
    //   </CardContent>
    // </Card>
  );
};

export default VideoCard;
