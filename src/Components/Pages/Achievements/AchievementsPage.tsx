import { t } from 'i18next';
import React from 'react';
import { PageHeading } from '../../Atoms/PageHeading';
import { TestBR } from '../../Temp/ScrollTest';

const getTranslationKey = (key: String) => {
  console.log(key);
  return t(`ACHIEVEMENTS.${key}`);
};
const AchievementsPage = () => {
  return (
    <div
      id='achievements'
      className='d-flex flex-column align-items-center'
      // style={{ height: '132vh' }}
    >
      <PageHeading title={getTranslationKey('TITLE')} />
      <div
        style={{ width: '70%', minWidth: 380, borderRadius: '0.5rem' }}
        className=' bg-dark  py-5 '
      >
        <TestBR />
      </div>
    </div>
  );
};

export default AchievementsPage;
