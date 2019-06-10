import BaseDataManager, { BACKEND_ROUTES } from './base';
import CookiesManager from '../utils/cookiesManager';

interface LoginParams {
	email: string;
	password: string;
}

interface RegisterParams {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
	username: string;
}

class AuthenticationManager extends BaseDataManager {
	constructor() {
		super();
	}

	/**
	 * Login a user
	 * @param {LoginParams} params Params for login
	 */
	public login(params: LoginParams) {
		const { email, password } = params;
		return this.RequestManager.post(BACKEND_ROUTES.AUTHENTICATION.Login, { email, password }).then((response) => {
			CookiesManager.set('token', response.data.token, { path: '/' });
		});
	}

	/**
	 * Register a user
	 * @param {RegisterParams} params Params for registeration
	 */
	public register(params: RegisterParams) {
		const { email, password, firstname, lastname, username } = params;
		return this.RequestManager.post(BACKEND_ROUTES.AUTHENTICATION.Register, {
			email,
			password,
			firstname,
			lastname,
			username
		}).then((response) => {
			CookiesManager.set('token', response.data.token, { path: '/' });
		});
	}
}

export default new AuthenticationManager();
