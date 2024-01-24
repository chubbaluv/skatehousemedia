'use client'
import { useEffect, useState, useCallback } from "react";
import videos from "../../../data/videoData";
import {
  PageWrapper,
  TitleWrapper,
  ControlButton,
} from "./shuffle-styled";
import { BodyText, Headline, Subhead } from "#/components/Typography/Typography";
import { basePadding } from "#/theme";
import BackButtonBar from "#/components/BackButtonBar";
import VideoPlayer from "#/components/VideoPlayer";
import Button from "#/components/Button";

const Shuffle = () => {
  // TO-DO:
  // - When the video ends slowly fill the background of the next card with a lighter color over 5s before switching videos
  // - Have a "Are you still watching" popup that displays when binged count hits 5 and pauses playback.
  // - DOM Event (click, mousemove, keypress) should reset the amount of videos watched before the inactivity popup

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledList, setShuffledList] = useState(videos);
  const [currentVideo, setCurrentVideo] = useState(shuffledList[currentIndex]);
  const [bingedCount, setBingedCount] = useState(0);
  const [fadeNextCard, setFadeNextCard] = useState(false);

  const shuffleVideos = useCallback(() => {
    const newShuffle = [].concat(shuffledList);
    for (let i = newShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newShuffle[i];
      newShuffle[i] = newShuffle[j];
      newShuffle[j] = temp;
    }

    setShuffledList(newShuffle);
    setCurrentIndex(0);
  }, [shuffledList]);

  const handleNextClick = () => setCurrentIndex(currentIndex + 1);

  useEffect(() => {
    shuffleVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentVideo(shuffledList[currentIndex]);
  }, [currentIndex, shuffledList]);

  useEffect(() => {
    document.querySelector('video').addEventListener('ended', () => {
      setBingedCount(bingedCount + 1);
      setFadeNextCard(true);
      setTimeout(() => {
        setFadeNextCard(false);
        setCurrentIndex(currentIndex + 1);
        if (currentIndex === shuffledList.length - 1) {
          shuffleVideos();
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        };
      }, 5000);
    });
    document.addEventListener('click', () => setBingedCount(0));
    document.addEventListener('keydown', () => setBingedCount(0));
    document.addEventListener('mousemove', () => setBingedCount(0));
  }, [bingedCount, currentIndex, shuffleVideos, shuffledList.length]);


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
            <Button handleClick={() => shuffleVideos()}>
              <Subhead variant='5'>Re-Shuffle</Subhead>
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: currentIndex !== 0 ? 'space-between' : 'flex-end',
                marginTop: '16px',
                gridColumn: '1/4'
              }}
            >
              {currentIndex !== 0 && (
                <ControlButton
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '40%' }}
                >
                  <div>
                    <Subhead variant='3'>Back</Subhead>
                    <Subhead variant='5'>{shuffledList[currentIndex - 1]?.title}</Subhead>
                  </div>
                </ControlButton>
              )}
              <ControlButton
                onClick={() => handleNextClick()}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'center', 
                  width: '40%',
                  transition: fadeNextCard ? 'background 5s linear' : 'none',
                  background: fadeNextCard ? 'white' : 'transparent',
                }}
              >
                <div>
                  <Subhead variant='3'>Next</Subhead>
                  <Subhead variant='5'>{shuffledList[currentIndex + 1]?.title}</Subhead>
                </div>
              </ControlButton>
            </div>
          </>
        </TitleWrapper>
      </PageWrapper>
    </>
  );
}

export default Shuffle;