import React, {Component} from 'react';
import './App.css';

import * as ons from 'onsenui';
import {Page, Toolbar, Button, Input} from 'react-onsenui'; // Only import the necessary components
// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import cLogo from './assets/img/jr_logo2.png'

/*var ons = require('onsenui');
var Ons = require('react-onsenui');*/

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
            <Page className="loginContainer">
                <section className="section">
                    <img src={cLogo} alt="Join & Ride"/>
                    <input name="username" className="hide"/>
                    <input name="password" type="password" className="hide"/>
                    <p>
                        <Input name="username"
                               value={this.state.username}
                               onChange={this.handleInputChange}
                               placeholder='Username' required autocomplete="off"/>
                    </p>
                    <p>
                        <Input name="password"
                               value={this.state.password}
                               onChange={this.handleInputChange}
                               modifier='underbar'
                               type='password'
                               float
                               placeholder='Password' required autocomplete="off"/>
                    </p>
                    <Button style={{width: '100%'}} modifier="btn" onClick={this.handleClick}>LOGIN</Button>
                </section>
            </Page>
        );
    }
}

export default App;
