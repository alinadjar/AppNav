import {combineReducers} from 'redux';

import user from "./user_reducer";
import news from "./news_reducer";

const rootReducer = combineReducers({
    User: user,
    News: news
});

export default rootReducer;