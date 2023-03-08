import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

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
        {getTranslationKey(props.translationKey)}
      </Nav.Link>
    );
  };

  const NavBarItems = () => {
    return (
      <>
        <PageLink id={'home'} translationKey={'HOME'} />
        <PageLink id={'about'} translationKey={'ABOUT'} />
        <PageLink id={'skills'} translationKey={'SKILLS'} />
        <PageLink id={'experiences'} translationKey={'EXPERIENCES'} />
        <PageLink id={'projects'} translationKey={'PROJECTS'} />
        <PageLink id={'contact'} translationKey={'CONTACT'} />
        <PageLink id={'cv'} translationKey={'CV'} />

        <Nav>
          <NavDropdown
            title={`${getTranslationKey('LANGUAGE_TITLE')}`}
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item onClick={() => handleLanguageChange('en')}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('si')}>
              Sinhala
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('es')}>
              Spanish
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('de')}>
              German
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('fr')}>
              French
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('zh')}>
              Mandarin
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('ar')}>
              Arabic
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </>
    );
  };

  return (
    <Navbar bg='navbar navbar-dark bg-dark' expand='lg' fixed='top'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className=' mx-lg-auto'>
          <NavBarItems />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
