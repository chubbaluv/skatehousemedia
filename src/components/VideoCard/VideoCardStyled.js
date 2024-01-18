'use client'
import styled from "styled-components";
import { baseColors, basePadding } from "#/theme";

export const CardWrapper = styled.div`
  background: ${baseColors.gray3};
  border-radius: 8px;
  overflow: hidden;
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