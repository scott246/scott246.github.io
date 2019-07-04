import React, {Component} from 'react'
import SecTitle from './sectitle';

class About extends Component {
    render() {
        return (
            <div id="about">
                <SecTitle title="About" />
                <div className="Page">
                    Hello! I'm Nathan Scott, a graduate of Purdue University with a BS in Computer Science with a concentration in Software Engineering. 
                    I graduated in May of 2017 and as of now, work as an Associate Software Developer for Liberty Mutual. 
                    I live in Portsmouth, NH with my cat Clover and dog Dawson. 
                    I gained many programming skills from my coursework at Purdue, as well as my job at Liberty and my side projects, 
                    which involve various trainings and experience with many different programming languages and systems. 
                    Thank you for visiting my website!
                </div>
            </div>
        )
    }
}

export default About
