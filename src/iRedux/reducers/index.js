import {combineReducers} from 'redux';

import user from "./user_reducer";

const rootReducer = combineReducers({
    User: user
});

export default rootReducer;