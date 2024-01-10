'use client'
import { useEffect, useState } from "react";
import videos from "../../../data/mockdata";
import {
  EntryThumbnail,
  ListEntry,
  PageWrapper,
  TitleWrapper,
  VideoList,
} from "./shuffle-styled";
import { BodyText, Headline, Subhead } from "#/components/Typography/Typography";
import { basePadding } from "#/theme";
import BackButtonBar from "#/components/BackButtonBar";
import VideoPlayer from "#/components/VideoPlayer";
import Button from "#/components/Button";

const Shuffle = () => {

  const [currentIndex, setCurentIndex] = useState(0);
  const [shuffledList, setShuffledList] = useState(videos);
  const [currentVideo, setCurrentVideo] = useState(shuffledList[currentIndex]);

  const shuffleVideos = () => {
    const newShuffle = [].concat(shuffledList);;
    for (let i = newShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newShuffle[i];
      newShuffle[i] = newShuffle[j];
      newShuffle[j] = temp;
    }

    setShuffledList(newShuffle);
    setCurentIndex(0);
  };

  const handleNextClick = () => setCurentIndex(currentIndex + 1);

  useEffect(() => {
    shuffleVideos();
  }, []);

  useEffect(() => {
    setCurrentVideo(shuffledList[currentIndex]);
  }, [currentIndex, shuffledList]);

  return (
    <>
      <BackButtonBar />
      <PageWrapper>
        <Headline
          as='h1'
          margin={`0 auto ${basePadding.xLarge} auto`}
          variant='3'
        >
          Shuffle
        </Headline>
        <VideoPlayer
          src={currentVideo?.src}
          thumbnail={currentVideo?.thumbnail}
        />
        <TitleWrapper>
          <Subhead variant='2'>
            {currentVideo?.title}
          </Subhead>
          <>
            <Button handleClick={() => handleNextClick()}>
              <Subhead variant='4'>Skip</Subhead>
            </Button>
            <Button handleClick={() => shuffleVideos()}>
              <Subhead variant='4'>Shuffle</Subhead>
            </Button>
          </>
        </TitleWrapper>
        <VideoList>
          {
            shuffledList.map((video, index) => {
              const { slug, thumbnail, title } = video;
              return index > currentIndex ? (
                <ListEntry
                  key={index}
                >
                  <EntryThumbnail $backgroundImage={thumbnail} />
                  <Subhead variant='3'>{title}</Subhead>
                  <BodyText variant='4'>Play Now</BodyText>
                </ListEntry>
              ) : null;
            })
          }
        </VideoList>
      </PageWrapper>
    </>
  );
}

export default Shuffle;