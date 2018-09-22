import { combineReducers } from 'redux';
// import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import postsReducer from './postsReducer';

export default combineReducers({
    admins: adminsReducer,
    // auth: authReducer,
    posts: postsReducer
});
