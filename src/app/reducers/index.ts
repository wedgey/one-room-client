import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { AppReducer } from './app';
import { EntitiesReducer } from './entities';
import { OrmRootState } from '../store/orm';

export interface RootState {
	app: any;
	entities: OrmRootState;
	router: RouterState;
}

const rootReducer = (history: History) =>
	combineReducers({
		app: AppReducer,
		entities: EntitiesReducer,
		router: connectRouter(history)
	});

export default rootReducer;
