import React, {Component} from 'react'

var rows = [
    {'Name':'Zen', 'Completed':'July 2017', 'Description':'iOS app that keeps track of budget, analysis, record keeping, settings', 'Link':'https://github.com/scott246/zen_iOS'},
    {'Name':'Solvr', 'Completed':'February 2017', 'Description':'iOS app that parses and calculates a string as you type it', 'Link':'https://github.com/scott246/solvr'},
    {'Name':'Underworld', 'Completed':'January 2017', 'Description':'Java game that randomly generates a maze with powerups and enemies and a store', 'Link':'https://github.com/scott246/java-game'},
    {'Name':'Stork', 'Completed':'December 2016', 'Description':'Angular2 dashboard with customizable stock-related widgets', 'Link':'https://github.com/cbulava/Stork'},
    {'Name':'CS Capstone Marketplace', 'Completed':'December 2016', 'Description':'Django webapp which matches users to groups and groups to projects', 'Link':'https://github.com/scott246/CSCapstone'},
    {'Name':'Whispers', 'Completed':'November 2016', 'Description':'JavaScript chat module with a mode to delete all but the last message', 'Link':'https://github.com/egillott/cs408-fall16-team19'},
    {'Name':'CSearch', 'Completed':'November 2016', 'Description':'Apache search engine with a crawler to crawl purdue.edu domain', 'Link':'https://github.com/scott246/WebCrawler'},
    {'Name':'WaveEdit', 'Completed':'October 2016', 'Description':'C++ application that can open a wave file and modify it, with undo/redo ability', 'Link':'https://github.com/scott246/WaveEdit'},
    {'Name':'StudyBuddy', 'Completed':'December 2015', 'Description':'Android app that allows students to communicate with each other', 'Link':'https://github.com/MonoAlpaca/StudyBuddy', 'Demo':'https://play.google.com/store/apps/details?id=com.team18.studybuddy.studybuddy'},
    {'Name':'Void', 'Completed':'December 2015', 'Description':'JavaScript Asteroids game clone', 'Link':'https://github.com/scott246/cs252-asteroids', 'Demo':'https://scott246.github.io/cs252-asteroids/projects/cs252/void/public/game.html'},
]


class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Completed</th>
                            <th>Description</th>
                            <th>GitHub</th>
                            <th>Demo</th>
                        </tr>
                    </thead>
                    <tbody>{rows.map(p => {
                        return (
                            <tr>
                                <td>{p.Name}</td>
                                <td>{p.Completed}</td>
                                <td>{p.Description}</td>
                                <td><a href={p.Link}>GitHub</a></td>
                                <td><a href={p.Demo}>{p.Demo && 'Demo'}</a></td>
                            </tr>
                        )
                    })}</tbody>
                </table>
            </div>
        )
    }
}

export default Table;