'use client'
import styled from "styled-components";
import { baseColors, basePadding, transition } from "#/theme";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${basePadding.xLarge};
  min-height: 100vh;
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  grid-column-gap: ${basePadding.base};
  margin-block-start: ${basePadding.large};
  max-width: 700px;
  width: 100%;
`;

export const VideoList = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-block-start: ${basePadding.xxxLarge};
  max-width: 700px;
  width: 100%;
`;

export const ListEntry = styled.button`
  align-items: center;
  background: ${baseColors.gray1};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 150px 1fr 100px;
  grid-column-gap: ${basePadding.large};
  margin-block-start: ${basePadding.large};
  overflow: hidden;
  text-align: left;
  transition: ${transition.default};
  width: 100%;

  &:hover {
    background: ${baseColors.gray2};
  }
`;

export const EntryThumbnail = styled.div`
  aspect-ratio: 16 / 9;
  background: ${({ $backgroundImage }) => `no-repeat center / cover url(${$backgroundImage})`};
  width: 150px;
`;

export const ControlButton = styled.button`
  background-color: ${baseColors.gray1};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: ${basePadding.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: ${transition.default};
  width: 25%;

  &:hover {
    background-color:${baseColors.gray2};
  }

  @media (max-width: 768px) {
    /* Adjust padding and font size for better mobile responsiveness */
    padding: 10px;
    font-size: 14px;
  }
`;