import { combineReducers } from 'redux';
import { GET_DATA, ADD_DATA, DEL_DATA, GET_NARRATIVE } from '../actions';

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

const selectionsReducer = (narrative = [], action) => {
    switch (action.type) {
        case GET_NARRATIVE:
            return action.payload.data;
        default:
            return narrative;
    }
}

const rootReducer = combineReducers({
    ros: rosReducer,
    selections: selectionsReducer,
});

export default rootReducer;