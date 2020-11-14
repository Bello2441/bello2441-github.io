import React from 'react';

class Projects extends Component {
    state = { 
        project : ['Project 1', 'Project 2', 'Project 3']
     }

    render() { 
        const proj = this.state.projects.map((project) => {
         console.log(project);
     });
     console.log(proj);
        return ( 
            <section>
                <h1>Projects I have done</h1>
            
            </section>
            );
    }
}
 
export default Projects;