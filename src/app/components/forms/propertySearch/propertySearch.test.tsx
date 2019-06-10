//@ts-ignore
import React from 'react';
import { shallow } from 'enzyme';
import PropertySearch from './index';

describe('<PropertySearch>', () => {
	it('renders correctly without crashing', () => {
		shallow(<PropertySearch />);
	});
});
