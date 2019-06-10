import { RoleTitles } from '../../config/roles';
import { BaseModel } from './base';
import { attr } from 'redux-orm';

export interface IUser {
	id: string;
	username: string;
	email: string;
	role: RoleTitles;
}

export class User extends BaseModel<IUser> {
	static modelName = 'User';
	static fields = {
		id: attr(),
		username: attr(),
		email: attr(),
		role: attr()
	};
}
