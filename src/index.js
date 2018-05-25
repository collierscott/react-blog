import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    //Need to make sure to return request
        console.log(request);
        // Can edit request
        return request;
    }, error => {
        console.log(error);
        // Rejected so can catch then locally in functions
        return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    //Need to make sure to return response
    console.log(response);
    // Can edit response
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Store the reference to the interceptor in a variable and call eject
// with that reference as an argument, to remove it
//let myInterceptor = axios.interceptors.request.use(function () {/*...*/});
//axios.interceptors.request.eject(myInterceptor);


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
