import './App.css';
import { ThemeOne } from './components/Theme/ThemeOne';

import AppHeader from './components/AppHeader';
import AppParagraphContent from './components/AppParagraphContent';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={ThemeOne}>
    <div className="App">
      <AppHeader />
      <AppParagraphContent />
    </div>
    </ThemeProvider>
  );
}

export default App;
