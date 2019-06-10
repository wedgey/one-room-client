import UtilsRequestManager from '../utils/requestManager';
import { Config } from '../config';
export * from '../config/routes';

const RequestManager: UtilsRequestManager = new UtilsRequestManager({
	refreshTokenUrl: `${Config.apiURL}/auth/refreshToken`
});

export class FilterObject {
	public page?: number;
	public pageSize?: number;

	constructor(filter: FilterObject = {}) {
		this.page = filter.page || 0;
		this.pageSize = filter.pageSize || 10;
	}
}

abstract class BaseDataManager {
	protected RequestManager = RequestManager;
	protected currentRequests: { [x: string]: Promise<any> } = {};
	constructor() {}

	/**
	 * Create a url given a bunch of terms
	 * @param {string} url Base url we want to combine for
	 * @param {string[]} args All terms we want to append
	 * @returns {string} The combined url
	 */
	protected combineRoute(url: string, ...args: string[]): string {
		let path = args.join('/');
		return encodeURI(`${url}/${path}`);
	}

	/**
	 * Prevent multiple calls to the same route
	 * @param {string} url The url of the request
	 * @param {() => Promise<any>} request The actual request
	 * @returns {Promise<any>} Return the request
	 */
	protected preventConcurrency(url: string, request: () => Promise<any>): Promise<any> {
		this.currentRequests[url] = this.currentRequests[url] || request();
		return this.currentRequests[url].finally(() => delete this.currentRequests[url]);
	}
}

export default BaseDataManager;
