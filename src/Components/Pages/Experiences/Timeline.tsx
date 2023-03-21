import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ThemeColors from '../../../Theme/Colours';

import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import {
  faSchool,
  faBuildingColumns,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';

export const Timeline = () => {
  const TimelineSection = (props: {
    type: 'present' | 'past';
    icon: 'work' | 'school' | 'uni' | 'selection';
    content: JSX.Element;
    period: string;
  }) => {
    return (
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date={props.period}
        iconStyle={{
          background:
            props.type === 'present'
              ? ThemeColors.primary
              : ThemeColors.secondary,
          color: ThemeColors.background,
        }}
        icon={
          <FontAwesomeIcon
            icon={
              props.icon == 'work'
                ? faBuilding
                : props.icon == 'school'
                ? faSchool
                : props.icon == 'uni'
                ? faBuildingColumns
                : faAddressBook
            }
          />
        }
        contentStyle={{
          background:
            props.type === 'present' ? ThemeColors.gray : ThemeColors.lightGray,
          color: ThemeColors.white,
          boxShadow: `${
            props.type === 'present' ? `0px 3px ${ThemeColors.error}` : 'none'
          }`,
        }}
        contentArrowStyle={{
          borderRight: `10px solid  ${
            props.type === 'present' ? ThemeColors.primary : ThemeColors.white
          }`,
        }}
      >
        {props.content}
      </VerticalTimelineElement>
    );
  };
  return (
    <VerticalTimeline>
      <TimelineSection
        type='present'
        icon='work'
        period='2021 July - 2022 July (13m)'
        content={
          <div>
            <Typography
              variant='h4'
              align='left'
              style={{ color: ThemeColors.white }}
            >
              Trainee Software Engineer
            </Typography>
            <Typography
              variant='h5'
              align='left'
              style={{ color: ThemeColors.primary }}
            >
              99X
            </Typography>
          </div>
        }
      />
      <TimelineSection
        type='past'
        icon='uni'
        period='2020 Sept - 2021 July'
        content={
          <div>
            <Typography
              variant='h4'
              align='left'
              style={{ color: ThemeColors.white }}
            >
              Second Year Undergraduate
            </Typography>
            <Typography
              variant='h5'
              align='left'
              style={{ color: ThemeColors.primary }}
            >
              Informatics Institute of Technolgy (IIT)
            </Typography>
          </div>
        }
      />
    </VerticalTimeline>
  );
};
