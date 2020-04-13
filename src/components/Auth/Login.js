import React from 'react';
import UserAPI from '../../api/UserAPI';
// import fb from './Buttons/FBLogin';

class Login extends React.Component {
    state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user);
  }

    // onSignIn = (googleUser) => {
    //     var profile = googleUser.getBasicProfile();
    //     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // }

    render() {
        return(
        <>
            <div className="login-form">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input 
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <br />
                    <label>Password:
                        <input 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>

                {/* APPLE SIGN IN
                <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
                <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js" async defer></script>            
                
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                <script src="https://apis.google.com/js/platform.js" async defer></script>
                
                <div id="fb-root"></div>
                <div class="fb-login-button" data-width="" data-size="medium" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false"></div>
                <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>
                <div id="status"></div> */}
            </div>
        </>
        )
    }
}

export default Login;