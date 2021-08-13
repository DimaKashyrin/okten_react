import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
}

let axiosInstance = axios.create(config);


const getComments = () => {
  return axiosInstance.get('');
}
const getComment = (id) => {
    return axiosInstance.get(`/${id}`);
}
export {getComments, getComment}
