import styled from "styled-components";
import { baseColors, basePadding, fontSizing, transition } from "#/theme";

export const SearchInput = styled.input`
  background: ${baseColors.gray1};
  border: 1px solid ${baseColors.gray1};
  border-radius: 4px;
  color: ${baseColors.white};
  font-family: "Poppins", sans-serif;
  font-size: ${fontSizing.base};
  margin: ${basePadding.medium} 0;
  max-width: 1200px;
  outline: none;
  padding: ${basePadding.medium};
  transition: ${transition.default};
  width: 100%;

  &::placeholder {
    color: ${baseColors.white};
  }

  &:focus {
    border-color: ${baseColors.primary};
  }
`;
