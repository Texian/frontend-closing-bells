import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1';

const register = (newUser) => {
    return axios.post(`${endpoint}/register`, newUser)
    .then(res => res);
}

const login = (user) => {
    console.log(`User API user: ${user}`);
    return axios.post(`${endpoint}/login`, user)
    .then(res => res);
}

export default {
    register,
    login
}