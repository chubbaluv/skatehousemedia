import styled, { ThemeProvider } from "styled-components";
import { baseColors, basePadding, transition } from "#/theme";

const StyledButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  padding: ${basePadding.base} ${basePadding.medium};
  text-decoration: none;
  text-transform: none;
  transition: ${transition.default};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "max-content")};

  & > * {
    color: ${({ theme }) => theme.textColor};
  }

  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    border: 2px solid ${({ theme }) => theme.hoverBackground};
  }
`;

const Button = ({
  children = null,
  className = null,
  fullWidth = false,
  handleClick = null,
  href = "",
  mode = "light",
  target,
}) => {
  const theme = {
    light: {
      background: baseColors.white,
      hoverBackground: baseColors.gray6,
      textColor: baseColors.shmBlack,
    },
    dark: {
      background: baseColors.shmBlack,
      hoverBackground: baseColors.gray1,
      textColor: baseColors.white,
    },
  };

  return (
    <ThemeProvider theme={theme[mode]}>
      <StyledButton
        as={href ? "a" : "button"}
        className={className}
        $fullWidth={fullWidth}
        href={href || null}
        onClick={handleClick}
        target={target}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
};

export default Button;
