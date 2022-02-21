import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import tokenReducer from './tokenReducers';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    token: tokenReducer,
});

export default rootReducer;