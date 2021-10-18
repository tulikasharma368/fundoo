import React, { Component } from 'react';
import './displaynotes.css'

class Displaynotes extends Component {
    render() {
        return (
            <div className='displaynotes'>
                <div className='inner-display'>
                    <div className="note_content">
                        <h4>Anything</h4>
                        <div className="content">1. first</div>
                        <div className="content">2. second</div>
                    </div>
                    <div className="note_content">
                        <h4>Something</h4>
                        <div className="content">A. alphabet first</div>
                        <div className="content">B. alphabet second</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Displaynotes;
