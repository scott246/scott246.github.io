import React, {Component} from 'react'
import SecTitle from './sectitle';
import Table from './table';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <SecTitle title="Projects" />
                <div className="Page-Left">
                    <Table />
                </div>
            </div>
        )
    }
}

export default Projects