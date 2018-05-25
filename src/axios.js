import axios from 'axios';

// Creating an axios instance.
// Assumes default settings and overwrites settings

// See Blog for an example of using this configuration instance
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE';

// Can also add interceptors

export default instance;