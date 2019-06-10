import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import AuthorizationManager from './authorizationManager';

interface RequestOptions extends AxiosRequestConfig {}

const defaultOptions: RequestOptions = {};

interface AjaxManagerOptions {
	authorizationManager?: AuthorizationManager;
}
class AjaxManager {
	private authorizationManager: AjaxManagerOptions['authorizationManager'];
	constructor(options: AjaxManagerOptions = {}) {
		this.authorizationManager = options.authorizationManager;

		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.delete = this.delete.bind(this);
		this.patch = this.patch.bind(this);
	}

	/**
	 * Merge request options with the authorization header
	 * @param {RequestOptions} options Options for the request we want to make
	 */
	private async getRequestOptions(options: RequestOptions = {}): Promise<RequestOptions> {
		if (!this.authorizationManager) return options;
		if (this.authorizationManager.requiresTokenRefresh()) await this.authorizationManager.refreshToken();
		let { headers, ...rest } = options;
		let authorizationHeader = this.authorizationManager.getAuthorizationHeader().headers;
		let newHeaders = { headers: { ...authorizationHeader, ...headers } };
		return { ...defaultOptions, ...newHeaders, ...rest };
	}

	/**
	 * Middleware for all responses
	 * @param handler Function we want to call for every response
	 */
	public applyResponseMiddleware(
		handler: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>
	): void {
		axios.interceptors.response.use(handler);
	}

	/**
	 * Make a get request
	 * @param {string} url Url for the request
	 * @param {RequestOptions} options Options for the request
	 */
	public async get(url: string, options: RequestOptions = {}): Promise<AxiosResponse<any>> {
		let reqOptions = await this.getRequestOptions(options);
		return axios.get(url, reqOptions);
	}

	/**
	 * Make a post request
	 * @param {string} url Url for the request
	 * @param {any} data Post data
	 * @param {RequestOptions} options Options for the request
	 */
	public async post(url: string, data: any = {}, options: RequestOptions = {}): Promise<AxiosResponse<any>> {
		let reqOptions = await this.getRequestOptions(options);
		return axios.post(url, data, reqOptions);
	}

	/**
	 * Make a put request
	 * @param {string} url Url for the request
	 * @param {any} data Put data
	 * @param {RequestOptions} options Options for the request
	 */
	public async put(url: string, data: any = {}, options: RequestOptions = {}): Promise<AxiosResponse<any>> {
		let reqOptions = await this.getRequestOptions(options);
		return axios.put(url, data, reqOptions);
	}

	/**
	 * Make a delete request
	 * @param {string} url Url for the request
	 * @param {RequestOptions} options Options for the request
	 */
	public async delete(url: string, options: RequestOptions = {}): Promise<AxiosResponse<any>> {
		let reqOptions = await this.getRequestOptions(options);
		return axios.delete(url, reqOptions);
	}

	/**
	 * Make a patch request
	 * @param {string} url Url for the request
	 * @param {any} data Patch data
	 * @param {RequestOptions} options Options for the request
	 */
	public async patch(url: string, data: any = {}, options: RequestOptions = {}): Promise<AxiosResponse<any>> {
		let reqOptions = await this.getRequestOptions(options);
		return axios.patch(url, data, reqOptions);
	}
}

export default AjaxManager;
