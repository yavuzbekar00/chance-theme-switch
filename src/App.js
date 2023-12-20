import './App.css';
import { useEffect, useState } from 'react';
import Main from './Components/Main';
import Second from './Components/Second';
import { MainContext } from './Context';

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const data = {
    theme,
    setTheme
  }
  return (
    <MainContext.Provider value={data}>
      <div className='container'>
        <Main></Main>
        <Second></Second>
      </div>
    </MainContext.Provider>
  );
}

export default App;
