import { FETCH_POSTS_LIST } from '../actions';

export default (state = [], action ) => {

    // console.log(action.type);
    switch (action.type) {
        case FETCH_POSTS_LIST:
            return action.payload.data;
        default:
            return state;
    }
};