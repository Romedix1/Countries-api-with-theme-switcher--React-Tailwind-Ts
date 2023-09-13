import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';


function App() {
  // Theme state
  const [theme, setTheme] = React.useState('light');

  // Change theme function
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <main className={theme}>
      <HashRouter>
        <Routes>
          <Route path="/details/:name" element={<Details theme={theme} changeTheme={changeTheme}/>} />
          <Route path="/" element={<Home theme={theme} changeTheme={changeTheme}/>} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
