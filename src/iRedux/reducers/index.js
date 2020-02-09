import {combineReducers} from 'redux';

import user from "./user_reducer";
import news from "./news_reducer";
import games from './games_reducer';

const rootReducer = combineReducers({
    User: user,
    News: news,
    Games: games
});

export default rootReducer;