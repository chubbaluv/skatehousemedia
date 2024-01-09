'use client'
import { TitleWrapper, VideoWrapper } from "./VideoPageStyled";
import { Headline } from "#/components/Typography/Typography";
import BackButtonBar from "../BackButtonBar";

const VideoPage = ({ video }) => {
  const { src, thumbnail, title } = video;

  return (
    <>
      <BackButtonBar />
      <TitleWrapper>
        <Headline as='h1' variant='4'>
          {title}
        </Headline>
      </TitleWrapper>
      <VideoWrapper>
        <video
          controls
          poster={thumbnail}
          src={src}
          type='video/mp4'
        />
      </VideoWrapper>

    </>

  );
};

export default VideoPage;