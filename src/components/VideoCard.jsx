import moment from "moment";

import { useTheme } from "./ThemeContext";

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

const VideoCard = ({
  vedio: {
    id: { videoId },
    snippet,
  },
}) => {
  const publishedMoment = moment(snippet?.publishedAt);
  const timeAgo = publishedMoment.fromNow();
  const { isDarkMode } = useTheme();







    console.log(videoId);



 

  return (
    <Card
      sx={{
        width: { md: "340px", lg: "358px", sm: "330px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "21px",
        border: "none",
        background: `${isDarkMode ? "#000" : "#fff"}`,
      }}
    >
      <Link
        style={{ borderRadius: "21px" }}
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
      >
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
        sx={{
          backgroundColor: `${isDarkMode ? "#000" : "#fff"}`,
          height: "106px",
          paddingTop: "-10px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color={`${isDarkMode ? "#fff" : "#000"}`}
            sx={{ width: { xs: "100%", sm: "300px" } }}
          >
            {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            color={`${isDarkMode ? "#fff" : "#000"}`}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
          <Typography
            variant="subtitle2"
            color="gray"
            display="flex"
            justifyContent="start"
            gap={2}
            marginTop={0.4}
          >
            <span> views</span>{" "}
            <span>{timeAgo}</span>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
