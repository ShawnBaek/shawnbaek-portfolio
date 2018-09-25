import { FETCH_POSTS_LIST, FETCH_POST } from '../actions';

export default (state = [], action ) => {

    console.log(action.type);
    switch (action.type) {
        case FETCH_POSTS_LIST:
            console.log('action type: '+action.type);
            return action.payload;
        case FETCH_POST:
            return action.payload;
        default:
            return state;
    }
};