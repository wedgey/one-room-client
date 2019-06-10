import { AnyAction } from 'redux';
import { Model } from 'redux-orm';
import { EntitiesActionTypes } from '../actions/types';
import orm from '../store/orm';
import { RootState } from '.';

const initialState = orm.getEmptyState();
export const EntitiesReducer = (state: RootState['entities'] = initialState, action: AnyAction) => {
	const { itemType, payload } = action;
	const session = orm.session(state);
	const ModelClass: typeof Model = (session as any)[itemType];
	const entities = Array.isArray(payload) ? payload : [payload];
	switch (action.type) {
		case EntitiesActionTypes.Create:
			entities.forEach((entity) => ModelClass.create(entity));
			break;
		case EntitiesActionTypes.Update:
			entities.forEach((entity) => ModelClass.upsert(entity));
			break;
		case EntitiesActionTypes.Delete:
			ModelClass.withId(payload.id).delete();
			break;
	}
	return session.state;
};
