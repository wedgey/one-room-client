import { IUser } from '../models';
import { EntitiesActionTypes } from './types';
import { store } from '../store';

const itemType: string = 'User';

export const loadUser = (user: IUser): void => {
	let action = {
		type: EntitiesActionTypes.Create,
		itemType,
		payload: user
	};
	store.dispatch(action);
};
