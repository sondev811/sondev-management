import {combineReducers} from 'redux';
import adsAccountReducer from './adsAccReducers';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    adsAcc: adsAccountReducer,
});

export default rootReducer;