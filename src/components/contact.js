import React, {Component} from 'react'
import SecTitle from './sectitle.js';

var icon_size = 48
var icon_padding = 20

const Icon = (props) => {
    return (
        <span style={{'padding':icon_padding+'px'}}>
            <a href={props.link}>
                <i className={'fa fa-'+props.name} style={{'fontSize':icon_size+'px'}} />
            </a>
        </span>
    )
}

class About extends Component {
    render() {
        return (
            <div id="contact">
            <SecTitle title="Contact" />
                <div className="Page">
                    Feel free to reach out to me on any of these platforms!
                    <p />
                    <div>
                        <Icon name="phone" link="tel:574-383-7907"/>
                        <Icon name="envelope" link="mailto:ndscott32@gmail.com" />
                        <Icon name="github" link="https://github.com/scott246/" />
                        <Icon name="linkedin" link="https://www.linkedin.com/in/nathan-scott-39b4b87b/" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About