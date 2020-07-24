import {combineReducers} from 'redux';
import {usersReducer} from './usersReducer';
import {monthReducer} from './monthReducer';
import {appReducer} from './appReducer';

export const rootReducer = combineReducers({
    users: usersReducer,
    month: monthReducer,
    app: appReducer
});
