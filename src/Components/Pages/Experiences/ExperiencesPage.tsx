import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ExperienceModal from './ExperienceModal';
// import { Timeline } from '../../Atoms/Timeline';
import { PageHeading } from '../../Atoms/PageHeading';
import { t } from 'i18next';
import { Timeline } from './Timeline';
import { LargeCard } from '../../Atoms/LargeCard';

const ExperiencesPage = () => {
  const getTranslationKey = (key: String) => {
    console.log(key);
    return t(`EXPERIENCES.${key}`);
  };

  return (
    <div
      id='experiences'
      className='d-flex flex-column align-items-center'
      // style={{ height: '132vh' }}
    >
      <PageHeading title={getTranslationKey('TITLE')} />
      <LargeCard children={<Timeline />} noBackgroundGray />
    </div>
  );
};

export default ExperiencesPage;
