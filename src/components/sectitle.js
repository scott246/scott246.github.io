import React, {Component} from 'react'

class SecTitle extends Component {
    render() {
        return (
            <div>
                <div className="Spacer"> </div>
                <div className="Section-title">
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default SecTitle