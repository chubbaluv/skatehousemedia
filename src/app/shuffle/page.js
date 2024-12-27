"use client";
import { useEffect, useRef, useState, Fragment } from "react";
import videos from "../../../data/videoData";
import {
  Column,
  EntryThumbnail,
  PageWrapper,
  TitleWrapper,
  UpNextCard,
} from "./shuffle-styled";
import {
  BodyText,
  Headline,
  Subhead,
} from "#/components/Typography/Typography";
import { basePadding } from "#/theme";
import BackButtonBar from "#/components/BackButtonBar";
import VideoPlayer from "#/components/VideoPlayer";
import Button from "#/components/Button";

const Shuffle = () => {
  // TO-DO:
  // - Have a "Are you still watching" popup that displays every 5 videos and pauses playback. Very annoying, but this will prevent a run on resources if someone accidentally leaves shuffle playing."

  const videoRef = useRef(null);
  const unMutedVideo = useRef(false);
  const videoPlayCount = useRef(0);
  const [currentIndex, setCurentIndex] = useState(0);
  const [shuffledList, setShuffledList] = useState(videos);
  const [currentVideo, setCurrentVideo] = useState(shuffledList[currentIndex]);

  const shuffleVideos = () => {
    const newShuffle = [].concat(shuffledList);
    for (let i = newShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newShuffle[i];
      newShuffle[i] = newShuffle[j];
      newShuffle[j] = temp;
    }

    setShuffledList(newShuffle);
    setCurentIndex(0);
  };

  const setVideoToNext = () => {
    setCurentIndex(currentIndex + 1);
    unMutedVideo.current = false;
    videoPlayCount.current = videoPlayCount.current + 1;
  };

  useEffect(() => {
    shuffleVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentVideo(shuffledList[currentIndex]);
  }, [currentIndex, shuffledList]);

  useEffect(() => {
    if (videoRef.current) {
      // This is all to avoid autoplay blocking
      videoRef.current.onplaying = () => {
        if (!unMutedVideo.current) {
          videoRef.current.muted = false;
          unMutedVideo.current = true;
        }
      };
      videoRef.current.onended = () => {
        setVideoToNext();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoRef.current]);

  return (
    <>
      <BackButtonBar />
      <PageWrapper>
        <Headline
          as="h1"
          margin={`0 auto ${basePadding.xLarge} auto`}
          variant="3"
        >
          Shuffle
        </Headline>
        <VideoPlayer
          ref={videoRef}
          shouldAutoPlay={true}
          src={currentVideo?.src}
          thumbnail={currentVideo?.thumbnail}
        />
        <TitleWrapper>
          <Subhead variant="2">{currentVideo?.title}</Subhead>
          <Fragment>
            <Button handleClick={() => setVideoToNext()}>
              <Subhead variant="4">Skip</Subhead>
            </Button>
            <Button handleClick={() => shuffleVideos()}>
              <Subhead variant="4">Shuffle</Subhead>
            </Button>
          </Fragment>
        </TitleWrapper>
        <Headline
          margin={`${basePadding.xxxLarge} 0 0 0`}
          textAlignment="left"
          variant="5"
        >
          Up Next:
        </Headline>
        <UpNextCard onClick={() => setVideoToNext()}>
          <EntryThumbnail
            $backgroundImage={shuffledList[currentIndex + 1]?.thumbnail}
          />
          <Column>
            <Subhead variant="2">
              {shuffledList[currentIndex + 1]?.title}
            </Subhead>
            <BodyText variant="4">{"Play Now >"}</BodyText>
          </Column>
        </UpNextCard>
      </PageWrapper>
    </>
  );
};

export default Shuffle;
