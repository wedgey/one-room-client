import { IModal, ModalStatus } from '../models';
import { EntitiesActionTypes } from './types';
import { store } from '../store';

const itemType: string = 'Modal';

export const showModal = (componentType: IModal['componentType'], properties: IModal['properties'] = {}): void => {
	let action = {
		type: EntitiesActionTypes.Create,
		itemType,
		payload: { componentType, status: ModalStatus.Visible, properties }
	};
	store.dispatch(action);
};

export const hideModal = (componentType: IModal['componentType']): void => {
	let action = {
		type: EntitiesActionTypes.Update,
		itemType,
		payload: { componentType, status: ModalStatus.Hidden }
	};
	store.dispatch(action);
};

export const deleteModal = (componentType: IModal['componentType']): void => {
	let action = { type: EntitiesActionTypes.Delete, itemType, payload: { id: componentType } };
	store.dispatch(action);
};
