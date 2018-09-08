import { FETCH_USERS } from '../actions';

export default (state = [], action ) => {

    // console.log(action.type);
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};