import axios from 'axios';

const setAuthHeader = (JWT) => {
    console.log(JWT);
    if (JWT) {
        axios.defaults.headers.common['Authorization'] = JWT;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthHeader;