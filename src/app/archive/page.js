'use client'
import videos from "../../../data/mockdata";
import { Grid, PageWrapper } from "./archive-styled";
import { Headline } from "#/components/Typography/Typography";
import BackButtonBar from "#/components/BackButtonBar";
import VideoCard from "#/components/VideoCard";
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
          The Archive
        </Headline>
        {(videos && videos.length > 0) &&
          <Grid>
            {
              videos.map((video, index) => {
                const { slug, thumbnail, title } = video;
                return (
                  <VideoCard
                    key={index}
                    slug={slug}
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