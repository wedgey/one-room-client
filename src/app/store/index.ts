import { Store, createStore, applyMiddleware, compose } from 'redux';
import { History, createBrowserHistory } from 'history';

import { logger } from './middleware';
import rootReducer, { RootState } from '../reducers';

const configureStore = (history: History, initialState?: RootState): Store<RootState> => {
	let middleware = applyMiddleware(logger);
	const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	middleware = process.env.NODE_ENV !== 'production' ? composeEnhancers(middleware) : compose(middleware);

	const store = createStore(rootReducer(history), initialState, middleware);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}

export const history = createBrowserHistory();
export const store = configureStore(history);