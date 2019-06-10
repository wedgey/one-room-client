import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './app/store';
import Routes from './app/router';
import ModalProvider from './app/components/providers/modal';
import { ModalTypesLookup } from './app/components/modals/types';

const app = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ModalProvider types={ModalTypesLookup} />
			<Routes />
		</ConnectedRouter>
	</Provider>,
	app
);
