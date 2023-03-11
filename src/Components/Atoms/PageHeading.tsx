import React from 'react';
import Typography from '@mui/material/Typography';
import ThemeColors from '../../Theme/Colours';

type PageHeadingProps = {
  title: string;
};

export const PageHeading = (props: PageHeadingProps) => {
  return (
    <div className=' pt-5 pb-2'>
      <Typography
        variant='h2'
        align='center'
        style={{ color: ThemeColors.primary }}
      >
        {props.title}
      </Typography>
    </div>
  );
};
