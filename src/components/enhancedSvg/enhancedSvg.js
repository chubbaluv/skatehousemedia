'use client'
import React from 'react';
import styled from 'styled-components';
import { baseColors, fontSizing } from '../../theme';

const sizes = {
  small: `${fontSizing.base}`,
  medium: `${fontSizing.medium}`,
  large: `${fontSizing.large}`,
  xLarge: `${fontSizing.xLarge}`,
};

const SvgWrapper = styled.div`
  display: flex;

  ${({ $align }) => $align === 'left' && `
    justify-content: flex-start;
  `}
  ${({ $align }) => $align === 'center' && `
    justify-content: center;
  `}
  ${({ $align }) => $align === 'right' && `
    justify-content: flex-end;
  `}

  ${({ cursor }) => `cursor: ${cursor};`}

  svg {
    fill: ${baseColors.shmBlack};
    height: ${({ $size }) => ($size ? `${sizes[$size]}` : `${fontSizing.medium}`)};
    width: ${({ $size }) => ($size ? `${sizes[$size]}` : `${fontSizing.medium}`)};

    ${({ $customWidth, $customHeight }) => ($customHeight || $customWidth) && `
      height: ${$customHeight ? `${$customHeight}px` : 'auto'};
      width: ${$customWidth ? `${$customWidth}px` : 'auto'};
    `}

    ${({ $fill }) => $fill && `
     & .fill-target {
      fill: ${$fill};
     }

    `}
  }
`;

const enhancedSvg = (Component) => ({
  align = '',
  className = '',
  cursor = '',
  customHeight,
  customWidth,
  fill = '',
  handleClick = () => { },
  size = '',
}) => (
  <SvgWrapper
    $align={align}
    className={className}
    $cursor={cursor}
    $customHeight={customHeight}
    $customWidth={customWidth}
    $fill={fill}
    onClick={handleClick}
    $size={size}
  >
    <Component />
  </SvgWrapper>
);

export default enhancedSvg;