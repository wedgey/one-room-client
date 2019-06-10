import { BaseModel } from './base';
import { attr } from 'redux-orm';

export enum ModalStatus {
	Unknown = 'Unknown',
	Visible = 'Visible',
	Hidden = 'Hidden',
	Deleted = 'Deleted'
}

export interface IModal {
	componentType: string;
	properties: { [k: string]: any };
	status: ModalStatus;
}

export class Modal extends BaseModel<IModal> {
	static modelName = 'Modal';
	static options = () => ({
		idAttribute: 'componentType'
	});
	static fields = {
		componentType: attr(),
		properties: attr(),
		status: attr()
	};
}
