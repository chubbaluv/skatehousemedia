'use client'
import { baseColors, basePadding, transition } from "#/theme";
import styled from "styled-components";

export const BackButtonWrapper = styled.div`
  background: ${baseColors.black};
  margin-block-end: ${basePadding.xxxLarge};
  padding: ${basePadding.large} ${basePadding.large};
  width: 100%;

  & > button {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: ${transition.default};

    &:hover {
      border-bottom: 2px solid ${baseColors.white};
    }
  }
`;

export const VideoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 ${basePadding.large};
  width: 100%;

  & > video {
    aspect-ratio: 16 / 9;
    max-width: 700px;
    width: 100%;
  }
`;