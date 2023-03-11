import { Avatar } from '@mui/material';
import React from 'react';
import ThemeColors from '../../Theme/Colours';

type SVGIconProps = {
  svg: string;
  size: 'sm' | 'md' | 'lg' | { width: string; height: string };
  alt: string;
  variant?: 'rounded' | 'square' | 'circular';
  color?: string;
  fillColor?: string;
};

export const SVGIcon = (props: SVGIconProps) => {
  const width =
    props.size === 'sm'
      ? 24
      : props.size === 'md'
      ? 54
      : props.size === 'lg'
      ? 100
      : props.size.width;
  const height =
    props.size === 'sm'
      ? 24
      : props.size === 'md'
      ? 54
      : props.size === 'lg'
      ? 100
      : props.size.height;

  return (
    <Avatar
      src={props.svg}
      variant={props.variant || 'square'}
      sx={{
        width: width,
        height: height,
        color: props.color || ThemeColors.primary,
        backgroundColor: props.fillColor || '',
      }}
    />
  );
};
