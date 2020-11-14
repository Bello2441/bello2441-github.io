import React from 'react';
//import logo from './rosenberg_bello.jpeg';
import './App.css';
import Home from './components/Home';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
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
