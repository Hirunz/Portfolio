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

export const Timeline = () => {
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
              Professional Experience
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
                2021 JULY - 2022 JULY (13M)
              </Typography>
              <Typography
                variant='h6'
                align='left'
                style={{ color: ThemeColors.white }}
              >
                During my internship at 99x, I worked on a cloud-based gym
                security system. The application offers web dashboard for
                management and a mobile app for users, with the web dashboard
                built using React and the mobile app built using React Native.
                <br /> <br />
                My primary role was to work on the backend, designing and
                writing data transfers between third-party systems and the
                application. I was also involved in system design, specifically
                designing AWS state machines to fetch data overnight and through
                webhooks. Additionally, worked in the frontend as well.
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
              Higher Education
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
                2020 JAN - 2023 JULY
              </Typography>

              <Typography
                variant='h6'
                align='left'
                style={{ color: ThemeColors.white }}
              >
                I am currently following the B.ENG Software Engineering Honours
                degree course at{' '}
                <Link
                  href='https://www.iit.ac.lk/'
                  target={'_blank'}
                  underline={'hover'}
                  style={{ color: ThemeColors.white }}
                >
                  Informatics Institute of Technology
                </Link>
                , which is affiliated with the{' '}
                <Link
                  href='https://www.westminster.ac.uk/'
                  target={'_blank'}
                  underline={'hover'}
                  style={{ color: ThemeColors.white }}
                >
                  University of Westminster
                </Link>
                . Throughout the four years of study, I have gained a
                comprehensive understanding of various programming languages and
                frameworks, software development methodologies and practices and
                etc.
                <br />
                <br />
                In addition to my academic achievements, I have actively
                participated in various software engineering competitions and
                hackathons which not only helped me enhance my skills but also
                taught me the importance of teamwork, communication, and time
                management.
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
              Primary and Seconary Education
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
                I am a former student of{' '}
                <Link
                  href='https://www.richmondcollege.lk/'
                  target={'_blank'}
                  underline={'hover'}
                  style={{ color: ThemeColors.white }}
                >
                  Richmond College Galle
                </Link>
                , where I studied from grade 1 to 13. During my time at school,
                I actively participated in various extracurricular activities,
                including athletics and numerous clubs and societies, while
                still managing to perform well in my studies. I passed my GCE O
                Level exams earning <b>9A's</b> (including optional subjects
                English Literature, ICT, and Commerce), and then went on to
                complete my GCE A Levels with a Maths stream, earning <b>ABB</b>
                . Based my A level results, I was selected to pursue a Computer
                Science degree at the University of Colombo School of Computing
                (UCSC).
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
              role='Member'
              period='2020 - present'
            />
            <VolunteerRow
              name='Sasnaka Sansada Foundation'
              role='Volunteer'
              period='2020 - present'
            />
            <VolunteerRow
              name='Science Society - Richmond college'
              role='Member'
              period='2018 - 2019'
            />
            <VolunteerRow
              name='UN Study Circle - Richmond college'
              role='Chief Organizer'
              period='2017 - 2018'
            />
            <VolunteerRow
              name='UN Study Circle - Richmond college'
              role='Member'
              period='2015 - 2017'
            />
          </div>
        }
      />
    </VerticalTimeline>
  );
};
