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

export const Grid = styled.div`
  display: grid;
  grid-gap: ${basePadding.large};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;