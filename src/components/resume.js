import React, {Component} from 'react'
import SecTitle from './sectitle';
import {Document, Page} from 'react-pdf'
import R from '../Resume.pdf'

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }
    
      onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
      }
    
    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div id="resume">
                <SecTitle title="Resume" />
                <div className="Page">
                    <Document file={R} onLoadSuccess={this.onDocumentLoad}>
                        <Page className="PageClass" pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
        )
    }
}

export default Resume