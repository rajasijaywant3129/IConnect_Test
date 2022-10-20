import axios from 'axios';

const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: 'http://10.0.2.2:8080'
    });


    return instance;
}

export default getAxiosInstance;