import axios from 'axios';
const endPoint = 'http://localhost:4000/api/v1/users';

class ProfileAPI {
    static getAll = () => {
        let responsePromise = axios.get(endPoint);
        return responsePromise;
    };

    static getOne = (user) => {
        let responsePromise = axios.get(endPoint, user);
        return responsePromise;
    };

    static create = (newUser) => {
        let responsePromise = axios.post(endPoint, newUser);
        return responsePromise;
    };

    static delete = (user) => {
        let responsePromise = axios.delete(endPoint, user);
        return responsePromise;
    };

    static update = (user) => {
        let responsePromise = axios.put(endPoint, user);
        return responsePromise;
    };
}

export default ProfileAPI;