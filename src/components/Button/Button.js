import styled from "styled-components";
import { baseColors, basePadding, transition } from "#/theme";

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid ${baseColors.white};
  border-radius: 4px;
  cursor: pointer;
  padding: ${basePadding.half} ${basePadding.medium};
  text-decoration: none;
  text-transform: none;
  transition: ${transition.default};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'min-content')};

  &:hover {
    background: ${baseColors.gray3};
  }
`;

const Button = ({
  children = null,
  className = null,
  fullWidth = false,
  handleClick = null,
  href = '',
  target
}) => {

  return (
    <StyledButton
      as={href ? 'a' : 'button'}
      className={className}
      $fullWidth={fullWidth}
      href={href || null}
      onClick={handleClick}
      target={target}
    >
      {children}
    </StyledButton>
  );
};

export default Button;