import React, {Component} from 'react'
import logo from '../ns.png'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} alt="Nathan Scott" className="Logo"/>
                    <p className="App-title">
                    Welcome to my personal website!
                </p>
                </header>
                
            </div>
        )
    }
}

export default Header