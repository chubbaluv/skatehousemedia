'use client'
import { useEffect, useState } from "react";
import videos from "../../../data/videoData";
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
  // TO-DO:
  // - We need to add a callback function for the ended event to start the next video https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event
  // - Remove the video list below the shuffler in exchange for a simple "Up Next" card. On-click should just start the next video.
  // - Have a "Are you still watching" popup that displays every 5 videos and pauses playback. Very annoying, but this will prevent a run on resources if someone accidentally leaves shuffle playing."

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              const { thumbnail, title } = video;
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