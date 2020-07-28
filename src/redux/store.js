import {createStore, combineReducers} from 'redux';
import {todos, visibilityFilter} from './reducers'; 

export default createStore(combineReducers({todos, visibilityFilter}),
window.REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENTION_())