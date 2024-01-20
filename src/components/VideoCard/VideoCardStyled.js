'use client'
import styled from "styled-components";
import { baseColors, basePadding } from "#/theme";

export const Card = styled.div`
  background: ${baseColors.gray3};
  border-radius: 8px;
  flex-grow: 1;
  overflow: hidden;
`;

export const CardWrapper = styled.div`
  display: flex;
  height: 100%;

  & a {
    display: flex;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  width: 100%;

  & img {
    height: auto;
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  padding: ${basePadding.base} ${basePadding.small};
`;