import { combineReducers } from 'redux';

import tracking from './tracking-reducer';

const appReducer = combineReducers({
    tracking,
});

export default appReducer;
