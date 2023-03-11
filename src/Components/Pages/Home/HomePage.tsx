import React from 'react';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faSquareFacebook,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneVolume,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ThemeColors from '../../../Theme/Colours';
import FaIcon from '../../Atoms/FaIcon';
import Avatar from '@mui/material/Avatar';
import aboutImage from '../../../assets/Page/about-bg.png';

import profilePic from '../../../assets/homePage/profile-pic.png';

import profileBg from '../../../assets/homePage/b.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const getTranslationKey = (key: String) => {
    console.log(key);
    console.log(t(`HOME.${key}`));
    return t(`HOME.${key}`);
  };
  return (
    <div
      id='home'
      className=' d-flex align-items-center justify-content-center'
      style={{ paddingTop: '5vh', height: '100vh' }}
    >
      <div
        style={{
          content: '',
          width: '100%',
          height: '95vh',
          backgroundImage: `url(${profileBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'absolute',
          zIndex: -1,
        }}
      ></div>
      <div className='d-flex flex-column'>
        <div className='align-self-center'>
          <Avatar
            src={profilePic}
            alt='Hirun Kodituwakku'
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div className='align-self-center d-flex flex-column align-items-center '>
          <Typography variant='h4' gutterBottom>
            {getTranslationKey('NAME')}
          </Typography>
          <Typography variant='h5' gutterBottom>
            {getTranslationKey('CURRENT_STATUS')}
          </Typography>
        </div>

        <div className='align-self-center  d-flex  pt-4 justify-content-around'>
          <FaIcon
            iconName={faSquareFacebook}
            value={getTranslationKey('FACEBOOK_LINK')}
          />
          <FaIcon
            iconName={faEnvelope}
            type='email'
            value={getTranslationKey('EMAIL_LINK')}
          />
          <FaIcon
            iconName={faPhoneVolume}
            type='phone'
            value={getTranslationKey('PHONE')}
          />
          <FaIcon
            iconName={faLocationDot}
            value={getTranslationKey('HOME_CITY')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
