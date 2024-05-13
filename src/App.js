import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import LinkBox from './pages/LinkBox';

import './App.css';

const App = () =>  {

  return (
    <Router>
      <div className='app'>
        <header className='header'>
          <Navigation />

          <div className='nameLogo'>
            <h1>Daniel Glynn</h1>
            <LinkBox/>
            {/* <img className="icon" src={Icon} alt="DG Icon" /> */}
            
          </div>

          
          
          
          
        </header>

        <main className='main'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/resume" element={<Resume />} />            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>ABOUT</Link>
      <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>PROJECTS</Link>
      <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>RESUME</Link>
    </nav>
  );

};

export default App;
