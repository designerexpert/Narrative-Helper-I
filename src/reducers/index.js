import { combineReducers } from 'redux';
import { GET_DATA, ADD_DATA, DEL_DATA } from '../actions';

const rosReducer = (rosData = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return action.payload.data;
        case ADD_DATA:
            return action.payload.data;
        case DEL_DATA:
            return action.payload.data;
        default:
            return rosData;
    }
};

const rootReducer = combineReducers({
    ros: rosReducer
});

export default rootReducer;