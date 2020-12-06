import React from 'react';
//import logo from './rosenberg_bello.jpeg';
import './App.css';
import Home from './components/Home';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact_Me">Contact Me</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/about" component={AboutMe}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/Contact_Me" component={ContactMe}/>
        </Switch>
      </div>
    </Router>
  );
}

/*<img src={logo} className="App-logo" alt="logo" />
      <div className="App">
        <span className="txt">{Home}</span>
        <header className="App-header">
          <p>
            My name is Rosenberg and I'm going to master React!
          </p>
          <a
            className="App-link"
            href="https://github.com/Bello2441"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Me Out!
          </a>
        </header>
      </div>*/
export default App;
