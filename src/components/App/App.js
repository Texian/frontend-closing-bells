import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Navbar from '../../layout/Navbar';
import Routes from '../../config/routes';
import UserApi from '../../api/UserAPI';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    id: ''
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        username: decoded.username,
        id: decoded._id
      })
    }
  }

  register = (newUser) =>{
    console.log(`New user: ${newUser}`);
    UserApi.register(newUser)
    .then(res => {
      if (res.status === 200) {
        console.log(`App res status: ${res.status}`);
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        this.setState({
          username: decoded.username,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(`User registration error: ${err}`));
    console.log('New user created')
  }

  login = (user) => {
    UserApi.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        this.setState({
          username: decoded.username,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(`User login error: ${err}`));
    console.log(`App user: ${user}`);
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      username: '',
      id: ''
    })
  }

  render() {
    return (
      <div id="app">
        <Navbar
          logout={this.logout}
          user={this.state.username}
        />
        <Routes 
          user={this.state.username}
          login={this.login}
          register={this.register}
        />
      </div>
    )
  }
}

export default App;
