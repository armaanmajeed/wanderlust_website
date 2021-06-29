import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './landing.css';

class Landing extends Component {
    render() { 
        return (
            <React.Fragment>
                <title>Tourism</title>
                <div id="landing-header">
                    <h1>Welcome to Wanderlust!</h1>
                    <ul style={{listStyle: 'none'}}>
                        <li><NavLink to="/home" class="btn btn-lg btn-success">Let's go Wanderer</NavLink></li>
                    </ul>
                </div>
                
                <ul class="slideshow">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </React.Fragment>
        );
    }
}
 
export default Landing;