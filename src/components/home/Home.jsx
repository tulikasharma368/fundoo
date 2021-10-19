import React, { Component } from 'react';
import Takeanote from '../takeanote/Takeanote';
import Displaynotes from '../displaynotes/Displaynotes';

class Home extends Component {
    render() {
        return (
            <div>
                <Takeanote/>
                <Displaynotes/>
            </div>
        );
    }
}

export default Home;
