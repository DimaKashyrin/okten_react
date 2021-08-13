import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users',
}

let axiosInstance = axios.create(config);

const getPostsUser = (userId) => {
    return axiosInstance.get(`/${userId}/posts`)
}

export {getPostsUser}