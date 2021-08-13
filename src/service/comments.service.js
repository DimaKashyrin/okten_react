import axios from "axios";

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
}

let axiosInstance = axios.create(config);



const getCommentsPost = (postId) => {
    return axiosInstance.get(`/?postId=${postId}`);
}
export {getCommentsPost}
