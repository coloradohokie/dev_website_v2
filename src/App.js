import React from 'react';
import Menu from './containers/Menu/Menu'
import TitlePage from './containers/TitlePage/TitlePage'
import About from './containers/About/About'
import Resume from './containers/Resume/Resume'
import Blog from './containers/Blog/Blog'
import Works from './containers/Works/Works'
import Contact from './containers/Contact/Contact'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <TitlePage />
      <About />
      <Resume />
      <Works />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
