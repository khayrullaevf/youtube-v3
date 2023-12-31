import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { useTheme } from "./ThemeContext";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [vidoes, setVidoes] = useState([]);

  const { id } = useParams();

  const {isDarkMode}=useTheme()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVidoes(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:`${isDarkMode?'#000':"linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)"}`,
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>

      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={vidoes}/>
       

      </Box>
    </Box>
  );
};

export default ChannelDetail;
