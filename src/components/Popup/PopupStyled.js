import { baseColors, basePadding } from "#/theme";
import styled, { css, keyframes } from "styled-components";

const scaleIn = keyframes`
  0% { visibility: hidden; opacity: 0; max-height: 0%; z-index: -1;}
  1% {visibility: visible; opacity: 1; z-index: 99;}
  100% {max-height: 100%; visibility: visible; opacity: 1; z-index: 99;}
`;

export const ContentWrapper = styled.div`
  background-color: ${baseColors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: calc(100% - 100px);
  padding: ${basePadding.medium};
  width: max-content;
`;

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 105vh;
  justify-content: center;
  left: 50%;
  min-height: 100vh;
  opacity: ${({ $isOpen }) => ($isOpen ? 0.7 : 0)};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  width: 100vw;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      animation-name: ${scaleIn};
      animation-duration: 500ms;
      animation-iteration-count: 1;
      animation-timing-function: ease;
      animation-fill-mode: both;
      animation-delay: 0ms;
    `}
`;
