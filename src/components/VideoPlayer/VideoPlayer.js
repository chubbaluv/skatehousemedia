"use client";
import { VideoWrapper } from "./VideoPlayerStyled";

const VideoPlayer = ({ ref, shouldAutoPlay, src, thumbnail }) => {
  return (
    <VideoWrapper>
      <video
        autoPlay={shouldAutoPlay}
        controls
        muted={shouldAutoPlay}
        preload="none"
        poster={thumbnail}
        ref={ref}
        src={src}
        type="video/mp4"
      />
    </VideoWrapper>
  );
};

export default VideoPlayer;
