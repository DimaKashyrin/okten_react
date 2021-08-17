import axios from 'axios';

const axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})

const getPosts = () => axiosInstance.get('/posts');
const getComments = () => axiosInstance.get('/comments')
export {getPosts, getComments}