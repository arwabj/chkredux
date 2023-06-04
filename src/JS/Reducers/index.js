import {combineReducers} from 'redux';
import listReducer from './todoList';

const rootReducer = combineReducers ({ listReducer});

export default rootReducer;