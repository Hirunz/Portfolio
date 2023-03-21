import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Divider, Typography } from '@mui/material';
import ThemeColors from '../../Theme/Colours';
import { MyDivider } from '../Atoms/Divider';

const TopNavbar = () => {
  const { t, i18n } = useTranslation();

  const getTranslationKey = (key: String) => {
    console.log(key);
    console.log(t(`NAVBAR.${key}`));
    return t(`NAVBAR.${key}`);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const PageLink = (props: { id: string; translationKey: string }) => {
    return (
      <Nav.Link
        as={Link}
        to={props.id}
        smooth={true}
        className='nav-link'
        style={{ cursor: 'pointer' }}
      >
        {
          <Typography variant='body1' style={{ color: ThemeColors.primary }}>
            {getTranslationKey(props.translationKey)}
          </Typography>
        }
      </Nav.Link>
    );
  };

  const LanguageSwitchDropDownItem = (props: {
    language: string;
    description: string;
  }) => {
    return (
      <NavDropdown.Item onClick={() => handleLanguageChange(props.language)}>
        {props.description}
      </NavDropdown.Item>
    );
  };

  const NavBarItems = () => {
    return (
      <>
        <PageLink id={'home'} translationKey={'HOME'} />
        <PageLink id={'about'} translationKey={'ABOUT'} />
        <PageLink id={'skills'} translationKey={'SKILLS'} />
        <PageLink id={'experiences'} translationKey={'EXPERIENCES'} />
        <PageLink id={'achievements'} translationKey={'ACHIEVEMENTS'} />
        <PageLink id={'projects'} translationKey={'PROJECTS'} />
        <PageLink id={'contact'} translationKey={'CONTACT'} />

        <Nav>
          <NavDropdown
            // menuVariant='dark'
            title={getTranslationKey('LANGUAGE_TITLE')}
            id='nav-dropdown'
          >
            <LanguageSwitchDropDownItem language='en' description='English' />
            <LanguageSwitchDropDownItem language='si' description='Sinhala' />
            <LanguageSwitchDropDownItem language='es' description='Spanish' />
            <LanguageSwitchDropDownItem language='de' description='German' />
            <LanguageSwitchDropDownItem language='fr' description='French' />
            <LanguageSwitchDropDownItem language='zh' description='Mandarin' />
            <LanguageSwitchDropDownItem language='ar' description='Arabic' />
          </NavDropdown>
        </Nav>
      </>
    );
  };

  return (
    <Navbar
      className='bg-dark'
      expand='md'
      fixed='top'
      style={{ borderBottom: '1px solid #464646' }}
    >
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className=' mx-md-auto'>
          <NavBarItems />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
