import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { useTheme } from "./ThemeContext";

import { Loading, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {

  const{isDarkMode}=useTheme()

    const [videoDetail, setVideoDetail] = useState([]);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
        setVideoDetail(data.items[0])
      );

      fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items));
    }, [id]);
  
  if (!videoDetail?.snippet) return <Loading/>;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;



  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} padding={2}>
        <Box flex={2}>
          <Box
            sx={{
              width: "95%",
              position: "sticky",
              top: "86px",
              left: "90px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color={`${isDarkMode?'#fff':'#000'}`}
              variant="h5"
              fontWeight="bold"
              p={1}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              sx={{ color: "#fff" }}
              py={0.1}
              px={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#898989"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="10px"
                alignItems="center"
                marginLeft={4}
              >
                <Typography variant="body1" color="#898989">
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" color="#898989">
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
