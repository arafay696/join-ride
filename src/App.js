import React, {Component} from 'react';
import './App.css';

import {Page, Toolbar, Button} from 'react-onsenui'; // Only import the necessary components
// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import {cLogo} from './assets/img/jr_logo2.png'

var ons = require('onsenui');
var Ons = require('react-onsenui');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleClick = () => {
        if (this.state.username === 'bob' && this.state.password === 'secret') {
            ons.notification.alert('You are now signed in!');
        }
        else {
            ons.notification.alert('Username or password incorrect!');
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [target.name]: value
        })
    }

    render() {
        return (
            <Ons.Page className="loginContainer">
                <section className="section">
                    <img src={cLogo} alt="Jon & Ride"/>
                    <p>
                        <Ons.Input name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            modifier='underbar'
                            float
                            placeholder='Username'/>
                    </p>
                    <p>
                        <Ons.Input name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='Password'/>
                    </p>
                    <p>
                        <Ons.Button onClick={this.handleClick}>Sign in</Ons.Button>
                    </p>
                </section>
            </Ons.Page>
        );
    }
}

export default App;
