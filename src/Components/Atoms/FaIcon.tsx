import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button/Button';

import React from 'react';
import ThemeColors from '../../Theme/Colours';

type FaIconTypeProps = 'email' | 'phone' | 'link' | 'none';

const FaIcon = (props: {
  iconName: IconDefinition;
  type?: FaIconTypeProps;
  value: string;
}) => {
  return (
    <a
      target={
        !props.type
          ? '_blank'
          : props.type && props.type === 'link'
          ? '_blank'
          : ''
      }
      href={
        props.type && props.type === 'email'
          ? `mailto:${props.value}`
          : props.type && props.type === 'phone'
          ? `tel:${props.value}`
          : props.value
      }
    >
      <Button
        variant={'contained'}
        style={{
          borderRadius: '50%',
          borderColor: ThemeColors.primary,
          padding: '1rem',
          margin: '5px',
        }}
      >
        <FontAwesomeIcon
          icon={props.iconName}
          beat={true}
          size={'2x'}
          color={ThemeColors.background}
        />
      </Button>
    </a>
  );
};

export default FaIcon;
