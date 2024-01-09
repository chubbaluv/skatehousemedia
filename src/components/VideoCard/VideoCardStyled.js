'use client'
import styled from "styled-components";
import { baseColors, basePadding } from "#/theme";

export const CardWrapper = styled.div`
  background: ${baseColors.gray3};
  border-radius: 8px;
  overflow: hidden;
`;

export const Thumbnail = styled.div`
  aspect-ratio: 16 / 9;
  background: ${({ $backgroundImage }) => `no-repeat center / cover url(${$backgroundImage})`};
  width: 100%;
`;

export const TitleWrapper = styled.div`
  padding: ${basePadding.base} ${basePadding.small};
`;