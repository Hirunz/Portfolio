import React, { useEffect } from 'react';
import { TestBR } from '../../Temp/ScrollTest';
import { Container, Card, Typography, Box } from '@mui/material';
import ThemeColors from '../../../Theme/Colours';
import aboutImage from '../../../assets/aboutPage/about-bg.png';
import { useTranslation } from 'react-i18next';
import { PageHeading } from '../../Atoms/PageHeading';

const About = () => {
  const { t, i18n } = useTranslation();

  const getTranslationKey = (key: String) => {
    console.log(key);
    console.log(t(`ABOUT.${key}`));
    return t(`ABOUT.${key}`);
  };

  return (
    <div
      id='about'
      className='d-flex flex-column align-items-center'
      // style={{ height: '132vh' }}
    >
      <PageHeading title={getTranslationKey('TITLE')} />
      <div
        style={{ width: '80%', minWidth: 380, borderRadius: '0.5rem' }}
        className=' bg-dark  py-5 '
      >
        <div className='d-flex px-md-5 px-sm-3 mx-3 flex-column flex-column-reverse'>
          <div className='pt-3'>
            <Typography variant='body1' align='justify'>
              <p>
                {getTranslationKey('DESCRIPTION.GREETING')}
                <br />
                {getTranslationKey('DESCRIPTION.PARAGRAPH1')}
              </p>
              <p>{getTranslationKey('DESCRIPTION.PARAGRAPH2')}</p>
              <p>{getTranslationKey('DESCRIPTION.PARAGRAPH3')}</p>
              <p>{getTranslationKey('DESCRIPTION.PARAGRAPH4')}</p>
              <p>{getTranslationKey('DESCRIPTION.PARAGRAPH5')}</p>
            </Typography>
          </div>
          <div className='align-self-center'>
            <img
              src={aboutImage}
              width={'100%'}
              style={{ maxWidth: 600 }}
              className='img-fluid img-thumbnail bg-dark border-0 mx-auto'
              alt={getTranslationKey('IMAGE_ALT')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
