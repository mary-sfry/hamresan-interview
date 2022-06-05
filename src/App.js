import NavMenu from './components/NavMenu';
import './assets/styles/app.scss';
import {createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme]= useState('Light');
  const [Expanded, setExpanded] = useState(false);

  const toggleTheme = () => {
    setTheme(currTheme =>( currTheme === 'Light' ? 'Dark':'Light'))
  }

  const toggleMenu = () => {
    setExpanded((curr)=>( curr ? false : true))
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div id={theme}>
        <NavMenu Expanded={Expanded} toggleMenu={toggleMenu} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
