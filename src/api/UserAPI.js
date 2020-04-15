import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1';

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