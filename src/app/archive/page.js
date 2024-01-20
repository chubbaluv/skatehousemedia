'use client'
import videos from "../../../data/videoData";
import { Grid, PageWrapper } from "./archive-styled";
import { Headline } from "#/components/Typography/Typography";
import BackButtonBar from "#/components/BackButtonBar";
import VideoCard from "#/components/VideoCard";
import LazyWrapper from "#/components/LazyWrapper/LazyWrapper";
import { basePadding } from "#/theme";

const Archive = () => {

  return (
    <>
      <BackButtonBar />
      <PageWrapper>
        <Headline
          as='h1'
          margin={`0 auto ${basePadding.xLarge} auto`}
          variant='3'
        >
          Archive
        </Headline>
        {(videos && videos.length > 0) &&
          <Grid>
            {
              videos.map((video, index) => {
                const { slug, thumbnail, title } = video;
                return (
                  <LazyWrapper lazyLoad={index > 9} offset={0} height={0} key={title}>
                    <VideoCard
                      slug={slug}
                      thumbnail={thumbnail}
                      title={title}
                    />
                  </LazyWrapper>
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