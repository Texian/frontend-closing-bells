import React from 'react';
import './Login.scss'

// import './LoginAnimate';
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

    render() {
        return(
        <>
              <div className="container">
                <div id="login-page" className="row">
                  <div className="col z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field input email col s12">
                            <input 
                            type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} />
                            <label>Username</label>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="input-field input password col s12">
                            <div className="dots"></div>
                            <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                            <label>Password</label>
                            <div className="cursor"></div>
                            {/* <div className="line">
                              <svg>
                                  <use xlinkHref={`#line`} />
                              </svg>
                            </div> */}
                            <div class="tick">
                              <svg>
                                  <use xlinkHref={`#tick`} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      <br />
                      <button type="submit">
                      <svg viewBox="0 0 16 16">
                        <circle stroke-opacity=".1" cx="8" cy="8" r="6"></circle>
                        <circle class="load" cx="8" cy="8" r="6"></circle>
                      </svg>
                        <span>Login</span>
                      </button>
                    </form>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 22" id="line">
                            <path d="M0,11 L180,11 C240,11.00344 300,13.6718267 360,19.00516 C450,27.00516 450,-4.99483997 540,3.00516003 C600,8.33849336 660,11.00344 720,11 L900,11"></path>
                        </symbol>
                        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" id="tick">
                            <path d="M3,12.5026479 L7,16.5026479 L13,9.50264792 C29.6216402,-12.0066881 40.3541164,26.00516 19,26.0026479 L-3.37507799e-13,26.0026479"></path>
                        </symbol>
                    </svg>
                  </div>
                </div>
              </div>
        </>
        )
    }
}

export default Login;