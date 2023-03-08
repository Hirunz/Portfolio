import './i18n';
import './App.css';
import TopNavbar from './Components/Navbar/Navbar';
import '@fontsource/roboto';

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Home from './Components/Pages/Home/HomePage';
import About from './Components/Pages/About/AboutPage';
import Contact from './Components/Pages/Contact/ContactPage';

function App() {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex flex-column w-100'>
        <TopNavbar />
      </div>

      <Home />
      <About />
      <Contact />
      <div className='container-fluid'>{<AccessibilityIcon />}</div>
    </div>
  );
}

export default App;
