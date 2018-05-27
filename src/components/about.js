import React, {Component} from 'react'
import SecTitle from './sectitle';

class About extends Component {
    render() {
        return (
            <div id="about">
                <SecTitle title="About" />
                <div className="Page">
                    Hello! I'm Nathan Scott, a graduate of Purdue University with a BS in Computer Science with a concentration in Software Engineering. 
                    I graduated in May of 2017 and as of now, work as a Technology Associate for Liberty Mutual. 
                    I live in Portsmouth, NH with my adorable cat Clover. 
                    I gained many programming skills from my coursework at Purdue, as well as my job at Liberty and my side projects, 
                    such as Design Thinking training, Java programming, iOS and Android programming, and experience with many different programming languages and systems. 
                    Thank you for visiting my website!
                </div>
            </div>
        )
    }
}

export default About