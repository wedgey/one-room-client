import { ActionTypes } from './types';

interface LoadLocalizationParams {
	locale: string;
	isLoaded: boolean;
}
export const loadLocalization = ({ locale, isLoaded = false }: LoadLocalizationParams) => {
	return { type: ActionTypes.LoadLocalization, payload: { locale, isLoaded } };
};
