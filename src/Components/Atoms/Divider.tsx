import { Divider } from '@mui/material';
import React from 'react';

type DividerProps = {
  opacity?: number;
  absolute?: boolean;
  variant?: 'fullWidth' | 'inset' | 'middle';
  textAlign?: 'center' | 'left' | 'right';
  orientation?: 'horizontal' | 'vertical';
};

export const MyDivider = (props: DividerProps) => {
  return (
    <Divider
      sx={{ opacity: props.opacity || 0.5 }}
      absolute={props.absolute || false}
      variant={props.variant || 'fullWidth'}
      textAlign={props.textAlign || 'center'}
      orientation={props.orientation || 'horizontal'}
    />
  );
};
