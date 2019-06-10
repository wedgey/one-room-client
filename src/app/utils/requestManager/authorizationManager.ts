import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import CookiesManager from '../cookiesManager';

interface AuthorizationHeader {
	headers: { Authorization: string };
}

interface AuthorizationManagerOptions {
	refreshTokenUrl: string;
}

class AuthorizationManager {
	private refreshTokenUrl: string;
	private currentRenewal: Promise<void> | null = null;
	constructor(options: AuthorizationManagerOptions) {
		this.refreshTokenUrl = options.refreshTokenUrl;
	}

	/**
	 * Return the headers for authorizing a request
	 * @returns {AuthorizationHeader} Authorization header
	 */
	public getAuthorizationHeader(): AuthorizationHeader {
		return { headers: { Authorization: `Bearer ${CookiesManager.get('token')}` } };
	}

	/**
	 * Refreshes a token
	 * @returns {Promise<void>} The promise for the token refresh
	 */
	public async refreshToken(): Promise<void> {
		if (!this.refreshTokenUrl) return;
		this.currentRenewal =
			this.currentRenewal ||
			Axios.post(this.refreshTokenUrl, { refreshToken: '' }, this.getAuthorizationHeader())
				.then((response) => this.storeToken(response.data.token))
				.catch((err) => console.log(err));
		await this.currentRenewal;
	}

	/**
	 * Checks whether a token refresh is required
	 * @returns {boolean} Whether a token refresh is required
	 */
	public requiresTokenRefresh(): boolean {
		let token = CookiesManager.get('token');
		return token && this.isTokenExpired(token);
	}

	/**
	 * Store a token into the cookies
	 * @param {string} token Token we want to store
	 */
	public storeToken(token: string): void {
		CookiesManager.set('token', token, { path: '/' });
	}

	/**
	 * Verify whether a token has expired
	 * @param {string} cookie The cookie we want to check
	 * @returns {boolean} Whether the token is expired
	 */
	public isTokenExpired(cookie: string): boolean {
		let token = jwtDecode<any>(cookie);
		let expiryTimeInMils = (token.exp || 0) * 1000;
		return expiryTimeInMils <= Date.now();
	}
}

export default AuthorizationManager;
