"use client";
import styled from "styled-components";
import { baseColors, basePadding, transition } from "#/theme";

export const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-block: ${basePadding.large};
`;

export const EntryThumbnail = styled.div`
  background: ${({ $backgroundImage }) =>
    `no-repeat center / cover url(${$backgroundImage})`};
  height: 100%;
  width: 100%;
`;

export const MessageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${basePadding.mediumLarge};
  justify-content: center;
  max-width: 700px;
  padding: ${basePadding.xLarge};
  text-align: center;
`;

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

export const UpNextCard = styled.button`
  align-items: center;
  background: ${baseColors.gray1};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${basePadding.large};
  margin-block-start: ${basePadding.large};
  max-width: 700px;
  overflow: hidden;
  text-align: left;
  transition: ${transition.default};
  width: 100%;

  &:hover {
    background: ${baseColors.gray2};
  }
`;
