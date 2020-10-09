import React from 'react';
import './App.css';
import Header from "./components/Header";
import {ThemeContext, themes} from './theme-context';


function App() {
  return (
      <ThemeContext.Provider value={themes.light}>
          <div className="App">
              <Header/>
          </div>
      </ThemeContext.Provider>
  );
}

export default App;
