import { AnyAction } from 'redux';
import { RootState } from '.';
import { ActionTypes } from '../actions/types';

const initialState: RootState['app'] = { user: undefined, isSidebarCollapsed: true };
export const AppReducer = (
	state: RootState['app'] = initialState,
	action: AnyAction
): RootState => {
	switch (action.type) {
		case ActionTypes.LoadLocalization:
			let { locale, isLoaded } = action.payload;
			return { ...state, localization: { locale, isLoaded } };
		case ActionTypes.SetActiveUser:
			return { ...state, user: action.payload };
		case ActionTypes.ToggleSidebar:
			let status = action.payload === undefined ? !state.isSidebarCollapsed : action.payload;
			return { ...state, isSidebarCollapsed: status };
	}
	return state;
};
