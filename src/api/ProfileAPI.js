import axios from 'axios';
const endPoint = 'http://localhost:4000/api/v1/users';

class ProfileAPI {
    static getAll = () => {
        let responsePromise = axios.get(endPoint);
        return responsePromise;
    };

    static getOne = (user) => {
        let responsePromise = axios.get(`${endpoint}/${props.user._id}`);
        return responsePromise;
    };

    static create = (user) => {
        let responsePromise = axios.post(endPoint, user);
        return responsePromise;
    };

    static delete = (user) => {
        let responsePromise = axios.delete(`${endpoint}/${props.user._id}`);
        return responsePromise;
    };

    static update = (user) => {
        let responsePromise = axios.put(`'${endPoint}/${props.user._id}`);
        return responsePromise;
    };
}

export default ProfileAPI;