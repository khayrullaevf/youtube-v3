import React from 'react'

import { Box, Stack } from '@mui/material'
import {VideoCard,ChannelCard, Loading} from './';

const Videos = ({videos}) => {
   
  if(!videos?.length) return <Loading/>
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard vedio={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos