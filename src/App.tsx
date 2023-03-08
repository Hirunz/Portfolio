import './i18n';
import './App.css';
import TopNavbar from './Components/Navbar/Navbar';
import '@fontsource/roboto';

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Home from './Components/Navbar/Pages/Home/HomePage';
import About from './Components/Navbar/Pages/About/AboutPage';
import Contact from './Components/Navbar/Pages/Contact/ContactPage';

function App() {
  return (
    <div>
      <TopNavbar />
      <Home />
      <About />
      <Contact />
      <div className='container-fluid'>{<AccessibilityIcon />}</div>
    </div>
  );
}

export default App;
