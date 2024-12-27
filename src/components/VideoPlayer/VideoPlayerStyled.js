"use client";
import styled from "styled-components";

export const VideoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > video {
    aspect-ratio: 16 / 9;
    max-width: 700px;
    width: 100%;
  }
`;
