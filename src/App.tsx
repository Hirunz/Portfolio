import React from 'react';
import './i18n';
import './App.css';

import { Theme } from './Theme/Theme';
import TopNavbar from './Components/Navbar/Navbar';

import Home from './Components/Pages/Home/HomePage';
import About from './Components/Pages/About/AboutPage';
import Contact from './Components/Pages/Contact/ContactPage';
import SkillsPage from './Components/Pages/Skills/SkillsPage';
import CVPage from './Components/Pages/CV/CVPage';
import ExperiencesPage from './Components/Pages/Experiences/ExperiencesPage';
import ProjectsPage from './Components/Pages/Projects/ProjectsPage';
import { Container } from '@mui/system';

function App() {
  return (
    <div>
      <Container maxWidth='xl'>
        <div className='d-flex flex-column w-100'>
          <TopNavbar />
        </div>
      </Container>

      <Home />

      <About />

      <SkillsPage />
      <ExperiencesPage />
      <ProjectsPage />
      <Contact />
      <CVPage />
    </div>
  );
}

export default App;
