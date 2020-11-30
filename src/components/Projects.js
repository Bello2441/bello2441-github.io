import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Project_1 from './subpages/CMP464-HW2';
import Project_2 from './subpages/CMP464-HW3';
import Project_3 from './subpages/Booklist-project';

function Projects() {
    return (
        <Router>
        <nav className="projectIntro">
        <h1 style = {{color : "white"}}>Projects I have done</h1>
            <ul>
                <li>
                    <Link to="/projects/project1">CMP464-HW2</Link>
                </li>
                <li>
                    <Link to="/projects/project2">CMP464-HW3</Link>
                </li>
                <li>
                    <Link to="/projects/project3">Booklist Project</Link>
                </li>
            </ul>
            <p style={{color : "whitesmoke"}}> 
                These are my react projects for my Topics of Computer Science class. Each one was difficult, but fun.
            </p>
        </nav>
        <Switch>
            <Route path="/projects/project1" exact component={Project_1}/>
            <Route path="/projects/project2" component={Project_2}/>
            <Route path="/projects/project3" component={Project_3}/>
        </Switch>
        </Router>
    );
}


export default Projects;