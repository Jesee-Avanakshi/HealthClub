import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://3.15.232.242:3001"
});

axiosInstance.defaults.headers.common["Authorization"] = localStorage.getItem('token');

export default axiosInstance;