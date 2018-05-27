import React, {Component} from 'react'

const Icon = (props) => {
    return (
        <div>
            <a href={props.link}>
                <i className={'fa fa-'+props.name}/>
            </a>
        </div>
    )
}

class NavBar extends Component {
    render() {
        return (
            <div className="App-nav">
                <Icon name="home" link="#" />
                <Icon name="info" link="#about" />
                <Icon name="code" link="#projects" />
                <Icon name="file-text-o" link="#resume" />
                <Icon name="address-book-o" link="#contact" />
            </div>
        )
    }
}

export default NavBar