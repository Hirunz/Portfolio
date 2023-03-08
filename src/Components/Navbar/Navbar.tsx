import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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

  const NavBarItems = () => {
    return (
      <>
        <Nav.Link href='#home'>{getTranslationKey('HOME')}</Nav.Link>
        <Nav.Link href='#about'>{getTranslationKey('ABOUT')}</Nav.Link>
        <Nav.Link href='#skills'>{getTranslationKey('SKILLS')}</Nav.Link>
        <Nav.Link href='#experiences'>
          {getTranslationKey('EXPERIENCES')}
        </Nav.Link>
        <Nav.Link href='#projects'>{getTranslationKey('PROJECTS')}</Nav.Link>
        <Nav.Link href='#contact'>{getTranslationKey('CONTACT')}</Nav.Link>
        <Nav.Link href='#cv'>{getTranslationKey('CV')}</Nav.Link>
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
    <Navbar bg='white' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavBarItems />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
