import React from 'react';
import file from './Indeed_Resume.pdf';

function About() {
    return (
        <div className="App">
                <h1 className="About">About Me</h1>
            <p>
                My name is Rosenberg Bello and I am undergraduate at Lehman College at the moment.
            </p> 
            <p>
                My major is Computer Science and I truly want to get better in all topics in Computer Science because all of them seem really interesting.
            </p>
            <p>
                I have experience in Java and would continue to grow in that field. At the moment, I am trying to get better in React.
            </p>
            <p>
                I have little experience in React, HTML and Javascript, but building websites is really cool and fun to see the creations come to life.
            </p>
            <p>
                My goal in life is to become a software engineer whether it be backend, frontend or a full-stack developer. I even plan on making a game.
            </p>
            <p>
                But my dream is to be a jack of all trades and be good at every subject the world may throw at me. I feel like working on multiple and extremely different jobs would fun as hell.
            </p>
            <p>
                My hobbies are to watch baseball, play some videogames and study Japanese when I have the time. Right now, I am watching a Russian TV mini series called "The Meeting Place can not be Changed".
            </p>
            <p>
                If you reader are bored and want something to watch, then I would give this a look. It's about bad cop who believes a criminal should just be in jail and a good cop who believes that people can change. 
            <a href="https://www.youtube.com/watch?v=X7Kr8g8wps0" alt="Russian_TV_series"> The Meeting Place cannot be Changed episode 1</a>
            </p>
            <p>
                Anyways, I will give a link to download my resume so you guys can look at it and either give me some info on how to make it better or if you want a template.
            </p>
            <a href={file} alt="Rosenberg's_Resume">Take a look at my resume!</a>
        </div>
    );
}

export default About;
