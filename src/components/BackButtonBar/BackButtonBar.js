'use client'
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Subhead } from "#/components/Typography/Typography";
import { baseColors, basePadding, transition } from "#/theme";

const BackButtonWrapper = styled.div`
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

const BackButtonBar = () => {
  const router = useRouter();
  const goBackLabel = '< Go Back';

  return (
    <BackButtonWrapper>
      <button type='button' onClick={() => router.back()}>
        <Subhead variant='3'>{goBackLabel}</Subhead>
      </button>
    </BackButtonWrapper>
  );
};

export default BackButtonBar;