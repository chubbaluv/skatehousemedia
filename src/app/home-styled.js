'use client'
import styled from "styled-components";
import { basePadding } from "#/theme";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${basePadding.xLarge};
  min-height: 100vh;
`;

export const LogoWrapper = styled.div`
`;