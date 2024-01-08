'use client'
import videos from "../../../data/mockdata";
import { Grid, PageWrapper } from "./archive-styled";
import BackButtonBar from "#/components/BackButtonBar";
import VideoCard from "#/components/VideoCard";

const Archive = () => {

  return (
    <>
      <BackButtonBar />
      <PageWrapper>
        {(videos && videos.length > 0) &&
          <Grid>
            {
              videos.map((video, index) => {
                const { src, thumbnail, title } = video;
                return (
                  <VideoCard
                    key={index}
                    src={src}
                    thumbnail={thumbnail}
                    title={title}
                  />
                );
              })
            }
          </Grid>
        }
      </PageWrapper>
    </>
  );
}

export default Archive;