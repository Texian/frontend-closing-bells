import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Navbar from '../../layout/Navbar';
import Routes from '../../config/routes';
import UserApi from '../../api/UserAPI';
import './App.css';

class App extends React.Component {
  state = {
    id: '',
    username: '',
    email: '',
    avatar: '',
    switchId: '',
    items: ''
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        id: decoded._id,
        username: decoded.username,
        email: decoded.email,
        avatar: decoded.avatar,
        switchId: decoded.switchId,
        items: decoded.items
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
          id: decoded._id,
          username: decoded.username,
          
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
          id: decoded._id,
          username: decoded.username,
          email: decoded.email,
          avatar: decoded.avatar,
          switchId: decoded.switchId,
          items: decoded.items
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
      id: '',
      username: '',
      email: '',
      avatar: '',
      switchId: '',
      items: ''
    })
  }

  render() {
    return (
      <div id="app">
        <aside className="sidenav-main nav-expanded nav-lock nav-collapsible navbar-full sidenav-active-rounded">
        <Navbar
          login={this.login}
          register={this.register}
          logout={this.logout}
          user={this.state.username}
        />
        </aside>
        <div id="main">
        <Routes 
          user={this.state.username}
          login={this.login}
          register={this.register}
        />
        </div>
      </div>
    )
  }
}

export default App;
