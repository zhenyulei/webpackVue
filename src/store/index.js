import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //action可以的参数可以是函数，即可以在action中写异步调用
import reducer from './reducer'; //reducer的合并文件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;