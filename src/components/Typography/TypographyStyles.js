'use client'
import styled, { css } from 'styled-components';
import {
  baseColors,
  fonts,
  fontSizing,
  fontWeights,
  lineHeights,
} from '../../theme';

const propStyles = css`
  color: ${({ $color }) => (!$color ? baseColors.white : $color)};
  font-family: 'Poppins', sans-serif;
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  margin: ${({ $margin }) => ($margin ? $margin : '0')};
  padding: ${({ $padding }) => ($padding ? $padding : '0')};
  text-align: ${({ $textAlignment }) => ($textAlignment ? $textAlignment : 'inherit')};
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  text-transform: ${({ $transform }) => ($transform ? $transform : 'none')};
`;
const bodyStyles = css`
  line-height: ${({ $lineHeightOveride }) => ($lineHeightOveride ? $lineHeightOveride : lineHeights.max)};
`;
const subheadStyles = css`
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.bold : fontWeights.medium
  )};
  line-height: ${({ $lineHeightOveride }) => ($lineHeightOveride ? $lineHeightOveride : lineHeights.xxLarge)};
`;
const headlineStyles = css`
  font-weight: ${fontWeights.bold};
  line-height: ${({ $lineHeightOveride }) => ($lineHeightOveride ? $lineHeightOveride : lineHeights.mediumPlus)};
`;

// --------------------------
// ---- BODY TEXT STYLES ----
// --------------------------
export const Body1 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.medium)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.bolder : fontWeights.bold
  )};
`;
export const Body2 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.medium)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.medium : fontWeights.normal
  )};
`;
export const Body3 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.base)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.bolder : fontWeights.bold
  )};
`;
export const Body4 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.base)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.medium : fontWeights.normal
  )};
`;
export const Body5 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.small)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.medium : fontWeights.normal
  )};
`;
export const Body6 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.xSmall)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.medium : fontWeights.normal
  )};
`;
export const Body7 = styled.p`
  ${propStyles}
  ${bodyStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.min)};
  font-weight: ${({ $color, $fontWeight }) => (
    $fontWeight ? $fontWeight :
      ($color === 'white' || $color === '#ffffff') ? fontWeights.medium : fontWeights.normal
  )};
`;
// -----------------------------
// ---- SUBHEAD TEXT STYLES ----
// -----------------------------
export const Subhead1 = styled.h3`
  ${propStyles}
  ${subheadStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.medium)};
`;
export const Subhead2 = styled.h3`
  ${propStyles}
  ${subheadStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.basePlus)};
`;
export const Subhead3 = styled.h3`
  ${propStyles}
  ${subheadStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.base)};
`;
export const Subhead4 = styled.h3`
  ${propStyles}
  ${subheadStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.small)};
`;
export const Subhead5 = styled.h3`
  ${propStyles}
  ${subheadStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.xSmall)};
`;
export const Subhead6 = styled.h3`
  ${propStyles}
  ${subheadStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.min)};
`;
// ------------------------------
// ---- HEADLINE TEXT STYLES ----
// ------------------------------
export const Headline1 = styled.h1`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.max)};
`;
export const Headline2 = styled.h2`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.xxxxLarge)};
`;
export const Headline3 = styled.h3`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.xxxLarge)};
`;
export const Headline4 = styled.h4`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.xxLarge)};
`;
export const Headline5 = styled.h5`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.xLarge)};
`;
export const Headline6 = styled.h6`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.large)};
`;
export const Headline7 = styled.h6`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.mediumPlus)};
`;
export const Headline8 = styled.h6`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.medium)};
`;
export const Headline9 = styled.h6`
  ${propStyles}
  ${headlineStyles}
  font-size: ${({ $sizeOveride }) => ($sizeOveride ? $sizeOveride : fontSizing.base)};
`;
