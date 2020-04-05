import React from 'react';
import InputField from '../../components/sign-in-field/InputField';
import './sing-in.css';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state={
            username: '',
            password: ''
        };
    }

    setUsername = (event) => {
        const v = event.target.value;
        this.setState({username: v});
    }

    setPassword = (event) => {
        const v = event.target.value;
        this.setState({password: v});
    }

    logIn = (event) => {
        event.preventDefault(); // this will remove default post request and page refresh
        console.log(`logging as: ${this.state.username}:${this.state.password}`);
    }

    render() {
        return (
            <div>
                <p>Sing in!</p>
                <form onSubmit={this.logIn} >
                    <InputField label='User name' onChange={this.setUsername} type='text'/>
                    <InputField label='Password' onChange={this.setPassword} type='password'/>
                    <input className='submit-button' type='submit' value='Log in'/>
                </form>
            </div>
        );
    }
};

export default SignIn;