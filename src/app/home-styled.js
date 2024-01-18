'use client'
import styled from "styled-components";
import { basePadding } from "#/theme";
import { BodyText } from "#/components/Typography/Typography";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${basePadding.xLarge};
  min-height: 100vh;
`;

export const LogoWrapper = styled.div`
  max-width: calc(100% - 60px);
`;

export const TipMe = styled(BodyText)`
  margin-block-start: ${basePadding.xxLarge};
  margin-inline: auto;
  max-width: 650px;
  width: 100%;
`;