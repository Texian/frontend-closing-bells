import axios from 'axios';

const endpoint = `${process.env.REACT_APP_API_URL}/`;


if (localStorage.getItem('jwtToken')){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

const register = (newUser) => {
    console.log(`UserAPI new user: ${newUser}`);
    return axios.post(`${endpoint}/users/`, newUser)
    .then(res => res);
}

const login = (user) => {
    return axios.post(`${endpoint}/login`, user)
    .then(res => res);
}

export default {
    register,
    login
}