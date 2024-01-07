import React from 'react';
import * as typographyVariants from './TypographyStyles';

// Returns a styled component with our Typography design system. Pass an 'as' prop for desired semantic element.
/**
    * @param [as] - styled-components as prop
    * @param [children] - child components/jsx
    * @param {string} [className] - styled-components additonal/override styles
    * @param {string} [color] - hex value ex.: #ffffff
    * @param {number} [fontWeight] - ex.: 300, 400
    * @param {boolean} [italic]
    * @param {string} [lineHeight] - ex.: '120%', or '20px'
    * @param {string} [margin] - ex.: '0 20px 0 10px'
    * @param {string} [padding] - ex.: '0 20px 0 10px'
    * @param {string} [size] - ex.: '10px'
    * @param {string} [textAlignment] - One of 'left' | 'center' | 'right'
    * @param {string} [transform] - One of 'uppercase' | 'capitalize' | 'lowercase';
    * @param {boolean} [underline]
    * @param {string} variant - Required variant prop:
    * - Headline
    * -- One of '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    * - Subhead
    * -- One of '1' | '2' | '3' | '4' | '5' | '6'
    * - Body
    * -- One of '1' | '2' | '3' | '4' | '5' | '6' | '7'
    * @returns Typography component
*/

const Typography = ({
  as,
  children,
  className,
  color,
  fontWeight,
  italic,
  lineHeight,
  margin,
  padding,
  size,
  textAlignment,
  transform,
  underline,
  variant = '3',
}) => {
  const Variant = typographyVariants[variant];
  return (
    <Variant
      as={as}
      className={className}
      $color={color}
      $fontWeight={fontWeight}
      $italic={italic}
      $lineHeight={lineHeight}
      $margin={margin}
      $padding={padding}
      $size={size}
      $textAlignment={textAlignment}
      $transform={transform}
      $underline={underline}
    >
      {children}
    </Variant>
  );
};
export const Headline = (props) => {
  return <Typography {...props} variant={`Headline${props.variant}`}>{props.children}</Typography>;
};
export const Subhead = (props) => {
  return <Typography {...props} variant={`Subhead${props.variant}`}>{props.children}</Typography>;
};
export const BodyText = (props) => {
  return <Typography {...props} variant={`Body${props.variant}`}>{props.children}</Typography>;
};
export const Paragraph = (props) => {
  return <Typography {...props} variant={`Paragraph${props.variant}`}>{props.children}</Typography>;
};