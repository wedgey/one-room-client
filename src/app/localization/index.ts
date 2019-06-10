import intl from 'react-intl-universal';
import { store } from '../store';
import { loadLocalization } from '../actions/app';

const locales = {
	'en-US': require('./locales/en-US.json')
};

class LocalizationManager {
	constructor() {
		intl.init({ currentLocale: 'en-US', locales })
			.then(() => {
				store.dispatch(loadLocalization({ locale: 'en-US', isLoaded: true }));
			})
			.catch((err) => {
				throw err;
			});
	}

	public get strings() {
		return locales['en-US'];
	}
}

export const localization = intl;
export default new LocalizationManager();
