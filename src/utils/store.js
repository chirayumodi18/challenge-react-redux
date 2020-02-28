import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import indexReducer from '../reducers';
import { history } from './history';

const enhancers = [];

const middleware = [
	routerMiddleware(history),
	thunk
];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension);
	}
}

const composeEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

export default createStore(indexReducer(history), composeEnhancers);
