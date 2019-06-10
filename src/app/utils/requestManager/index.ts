import AjaxManager from './ajaxManager';
import AuthorizationManager from './authorizationManager';

export enum RequestTypes {
	Ajax = 'AJAX',
	Sockets = 'SOCKETS'
}

export interface RequestManagerOptions {
	type?: RequestTypes;
	refreshTokenUrl: string;
}

type AdapterTypes = AjaxManager;

class RequestManager {
	private ajaxManager?: AjaxManager;
	private adapter!: AdapterTypes;
	private authorizationManager: AuthorizationManager;

	constructor(options: RequestManagerOptions = { refreshTokenUrl: '' }) {
		this.authorizationManager = new AuthorizationManager({ refreshTokenUrl: options.refreshTokenUrl });
		this.setType(options.type || RequestTypes.Ajax);
	}

	public get: AdapterTypes['get'] = (...args) => this.adapter.get.apply(undefined, args);
	public post: AdapterTypes['post'] = (...args) => this.adapter.post.apply(undefined, args);
	public put: AdapterTypes['put'] = (...args) => this.adapter.put.apply(undefined, args);
	public delete: AdapterTypes['delete'] = (...args) => this.adapter.delete.apply(undefined, args);
	public patch: AdapterTypes['patch'] = (...args) => this.adapter.patch.apply(undefined, args);

	/**
	 * Set the type for this manager
	 * @param {RequestTypes} type The type of request manager we want to use
	 */
	public setType(type: RequestTypes): void {
		switch (type) {
			case RequestTypes.Ajax:
				if (!this.ajaxManager)
					this.ajaxManager = new AjaxManager({ authorizationManager: this.authorizationManager });
				this.adapter = this.ajaxManager;
				break;
			case RequestTypes.Sockets:
				break;
			default:
				if (!this.ajaxManager)
					this.ajaxManager = new AjaxManager({ authorizationManager: this.authorizationManager });
				this.adapter = this.ajaxManager;
				break;
		}
	}
}

export default RequestManager;
