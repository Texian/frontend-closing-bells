import axios from 'axios';

const endpoint = `${process.env.REACT_APP_API_URL}/items`;

if (localStorage.getItem('jwtToken')){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err => console.log(`Item index error: ${err}`));
}

const update = (item) => {
    return axios.put(`${endpoint}/${item._id}`, item)
    .then(res => res)
    .catch(err => console.log(`Item update error: ${err}`));
}

const deleteItem = (id) => {
    return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err => console.log(`Item delete error: ${err}`));
}

export default {
    index,
    update,
    deleteItem
}