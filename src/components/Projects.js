import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Project_1 from './subpages/Project_1';

function Projects() {
    return (
        <Router>
        <nav>
        <h1 className="App">Projects I have done</h1>
            <ul>
                <li>
                    <Link to="/projects/project1">Project 1</Link>
                    <p className="moreColor"> 
                    This was my first react project for my Topics of Computer Science class.
                    </p>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route path="/projects/project1" component={Project_1}/>
        </Switch>
        </Router>
    );
}


export default Projects;