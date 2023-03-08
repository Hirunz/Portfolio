import './i18n';
import './App.css';
import TopNavbar from './Components/Navbar/Navbar';
import '@fontsource/roboto';

import AccessibilityIcon from '@mui/icons-material/Accessibility';

function App() {
  return (
    <div>
      <TopNavbar />
      <div className='container-fluid'>{<AccessibilityIcon />}</div>
    </div>
  );
}

export default App;
