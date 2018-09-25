import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'https://public-api.wordpress.com/rest/v1.1/sites/uxengineer.wordpress.com',
        headers: { cookie: req.get('cookie') || '' }
    });
    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
}