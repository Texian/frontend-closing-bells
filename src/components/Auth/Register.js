import React from 'react';

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordVerify: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.register(newUser);
    }

    render() {
        return(
            <div className="register">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>Verify Your Password:
                        <input type="password" name="passwordVerify" value={this.state.passwordVerify} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register;