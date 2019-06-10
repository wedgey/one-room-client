// export namespace BACKEND_ROUTES {
// 	export const BASE_URL = process.env.apiURL;
// 	export const AUTHENTICATION = {
// 		Login: `${BACKEND_ROUTES.BASE_URL}/auth/login`,
// 		Register: `${BACKEND_ROUTES.BASE_URL}/auth/register`
// 	};
// }

const BASE_URL = process.env.apiURL;
export const BACKEND_ROUTES = {
	BASE_URL,
	AUTHENTICATION: {
		Login: `${BASE_URL}/auth/login`,
		Register: `${BASE_URL}/auth/register`
	}
};
