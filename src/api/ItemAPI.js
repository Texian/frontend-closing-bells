import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1/items';

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