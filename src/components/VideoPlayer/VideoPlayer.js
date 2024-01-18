'use client'
import { VideoWrapper } from "./VideoPlayerStyled";

const VideoPlayer = ({ src, thumbnail }) => {

  return (
    <VideoWrapper>
      <video
        controls
        preload='none'
        poster={thumbnail}
        src={src}
        type='video/mp4'
      />
    </VideoWrapper>
  );
};

export default VideoPlayer;