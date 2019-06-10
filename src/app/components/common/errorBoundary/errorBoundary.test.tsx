import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './index';
import GeneralError from './general';

describe('<ErrorBoundary>', () => {
	it('renders correctly without crashing', () => {
		shallow(<ErrorBoundary />);
	});
});

describe('<GeneralError>', () => {
	it('renders correctly without crashing', () => {
		shallow(<GeneralError />);
	});
});
