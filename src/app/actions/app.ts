import { ActionTypes } from './types';
import { store } from '../store';

interface LoadLocalizationParams {
	locale: string;
	isLoaded: boolean;
}
export const loadLocalization = ({ locale, isLoaded = false }: LoadLocalizationParams) => {
	return { type: ActionTypes.LoadLocalization, payload: { locale, isLoaded } };
};

export const loadActiveUser = (userId: string) => {
	let action = { type: ActionTypes.SetActiveUser, payload: userId };
	store.dispatch(action);
};
