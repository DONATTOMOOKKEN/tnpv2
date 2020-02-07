import {combineReducers} from 'redux';
import { users } from './user.reducer';
import { auth } from './auth.reducer';

const rootReducer = combineReducers({
    users,
    auth
});
export default rootReducer;