import React from 'react';
import './sing-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;
        return(
            <div className="sing-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput name='email' label='Email' type="email" value={email} handleChange={this.handleChange} required />
                    <FormInput name='password' label='Password' type="password" value={password} handleChange={this.handleChange} required />
                    <CustomButton type="submit">Sing in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingIn;