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
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Link, Typography } from '@mui/material';
import { MyDivider } from '../../Atoms/Divider';
import { t } from 'i18next';

export const Timeline = () => {
  const getTranslationKey = (key: String) => {
    console.log(key);
    return t(`EXPERIENCES.${key}`);
  };
  const TimelineSection = (props: {
    type: 'present' | 'past';
    icon: 'work' | 'school' | 'uni' | 'selection' | 'volunteer';
    content: JSX.Element;
    period?: string;
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
                : props.icon == 'volunteer'
                ? faHandHoldingHeart
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

  const VolunteerRow = (volunteerProps: {
    name: string;
    role: string;
    period: string;
  }) => {
    return (
      <div className='my-3'>
        <Typography
          variant='h5'
          align='left'
          style={{ color: ThemeColors.primary }}
        >
          {volunteerProps.name}
        </Typography>
        <Typography
          variant='body1'
          align='left'
          style={{ color: ThemeColors.white, marginTop: 0 }}
        >
          {volunteerProps.role}
        </Typography>
        <Typography
          variant='subtitle2'
          align='left'
          style={{ color: ThemeColors.white }}
          className='mb-2'
        >
          {volunteerProps.period}
        </Typography>
        <MyDivider opacity={0.6} />
      </div>
    );
  };
  return (
    <VerticalTimeline>
      <TimelineSection
        type='present'
        icon='work'
        content={
          <div>
            <Typography
              variant='h4'
              align='center'
              style={{ color: ThemeColors.white }}
              className='pb-3'
            >
              {getTranslationKey('PROFFESSIONAL.TITLE')}
            </Typography>
            <MyDivider opacity={0.8} />
            <div className='my-3'>
              <Typography
                variant='h5'
                align='left'
                style={{ color: ThemeColors.primary }}
              >
                <Link
                  href='https://99x.io/'
                  target={'_blank'}
                  underline={'hover'}
                >
                  99X
                </Link>
              </Typography>
              <Typography
                variant='subtitle2'
                align='left'
                style={{ color: ThemeColors.primary }}
                className='mb-2'
              >
                {getTranslationKey('PROFFESSIONAL.99X_PERIOD')}
              </Typography>
              <Typography
                variant='h6'
                align='left'
                style={{ color: ThemeColors.white }}
              >
                {getTranslationKey('PROFFESSIONAL.99X_PERIOD')}
                {getTranslationKey('PROFFESSIONAL.99X_DESCRIPTION1')}
                <br /> <br />
                {getTranslationKey('PROFFESSIONAL.99X_DESCRIPTION2')}
              </Typography>
            </div>
          </div>
        }
      />
      <TimelineSection
        type='past'
        icon='uni'
        content={
          <div>
            <Typography
              variant='h4'
              align='center'
              style={{ color: ThemeColors.white }}
              className='pb-3'
            >
              {getTranslationKey('HIGHER_EDUCATION.TITLE')}
            </Typography>
            <MyDivider opacity={0.8} />
            <div className='my-3'>
              <Typography
                variant='h5'
                align='left'
                style={{ color: ThemeColors.primary }}
              >
                <Link
                  href='https://www.iit.ac.lk/'
                  target={'_blank'}
                  underline={'hover'}
                >
                  Informatics Institute of Technology (IIT)
                </Link>
              </Typography>
              <Typography
                variant='subtitle2'
                align='left'
                style={{ color: ThemeColors.primary }}
                className='mb-2'
              >
                {getTranslationKey('HIGHER_EDUCATION.IIT_PERIOD')}
              </Typography>

              <Typography
                variant='h6'
                align='left'
                style={{ color: ThemeColors.white }}
              >
                {getTranslationKey('HIGHER_EDUCATION.IIT_DESCRIPTION1')}
                <Link
                  href='https://www.iit.ac.lk/'
                  target={'_blank'}
                  underline={'hover'}
                  style={{ color: ThemeColors.white }}
                >
                  Informatics Institute of Technology
                </Link>
                {getTranslationKey('HIGHER_EDUCATION.IIT_DESCRIPTION2')}
                <Link
                  href='https://www.westminster.ac.uk/'
                  target={'_blank'}
                  underline={'hover'}
                  style={{ color: ThemeColors.white }}
                >
                  University of Westminster
                </Link>
                {getTranslationKey('HIGHER_EDUCATION.IIT_DESCRIPTION3')}
                <br />
                <br />
                {getTranslationKey('HIGHER_EDUCATION.IIT_DESCRIPTION4')}
              </Typography>
            </div>
          </div>
        }
      />
      <TimelineSection
        type='past'
        icon='school'
        content={
          <div>
            <Typography
              variant='h4'
              align='center'
              style={{ color: ThemeColors.white }}
              className='pb-3'
            >
              {getTranslationKey('SCHOOL.TITLE')}
            </Typography>
            <MyDivider opacity={0.8} />
            <div className='my-3'>
              <Typography
                variant='h5'
                align='left'
                style={{ color: ThemeColors.primary }}
              >
                <Link
                  href='https://www.richmondcollege.lk/'
                  target={'_blank'}
                  underline={'hover'}
                >
                  Richmond College Galle
                </Link>
              </Typography>
              <Typography
                variant='subtitle2'
                align='left'
                style={{ color: ThemeColors.primary }}
                className='mb-2'
              >
                2005 - 2019
              </Typography>

              <Typography
                variant='h6'
                align='left'
                style={{ color: ThemeColors.white }}
              >
                {getTranslationKey('SCHOOL.DESCRIPTION1')}
                <Link
                  href='https://www.richmondcollege.lk/'
                  target={'_blank'}
                  underline={'hover'}
                  style={{ color: ThemeColors.white }}
                >
                  Richmond College Galle
                </Link>
                {getTranslationKey('SCHOOL.DESCRIPTION2')}
              </Typography>
            </div>
          </div>
        }
      />
      <TimelineSection
        type='past'
        icon='volunteer'
        content={
          <div>
            <Typography
              variant='h4'
              align='center'
              style={{ color: ThemeColors.white }}
              className='pb-3'
            >
              Leadership and Volunteer Experience
            </Typography>
            <MyDivider opacity={0.8} />
            <VolunteerRow
              name='FOSS Community - IIT'
              role={getTranslationKey('VOLUNTEER.MEMBER')}
              period='2020 - present'
            />
            <VolunteerRow
              name='Sasnaka Sansada Foundation'
              role={getTranslationKey('VOLUNTEER.VOLUNTEER')}
              period='2020 - present'
            />
            <VolunteerRow
              name='Science Society - Richmond college'
              role={getTranslationKey('VOLUNTEER.MEMBER')}
              period='2018 - 2019'
            />
            <VolunteerRow
              name='UN Study Circle - Richmond college'
              role={getTranslationKey('VOLUNTEER.CHIEF_ORGANIZER')}
              period='2017 - 2018'
            />
            <VolunteerRow
              name='UN Study Circle - Richmond college'
              role={getTranslationKey('VOLUNTEER.MEMBER')}
              period='2015 - 2017'
            />
          </div>
        }
      />
    </VerticalTimeline>
  );
};
