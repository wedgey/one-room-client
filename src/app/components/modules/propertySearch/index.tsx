import React from 'react';
import styled from 'styled-components';
import TabsContainer from '../../containers/tabs';
import PropertySearchForm from '../../forms/propertySearch';

interface PropertySearchProps {}
interface PropertySearchState {}

const StyledTabsContainer = styled(TabsContainer)`
	background: linear-gradient(to bottom, white 0%, white 100%) no-repeat;
	${(props) => {
		let size = props.type === 'card' ? props.theme['tabs-card-height'] : `24px + (14px * 1.5)`;
		return `background-size: 100% calc(100% - (${size} - 1px));`;
	}}
	background-position: bottom;
	width: 100%;
`;

const StyledTabPane = styled(TabsContainer.TabPane)`
	background-color: rgba(255, 255, 255, 1);
	padding: ${(props) => props.theme['card-padding-base']};
`;

const tabBarStyle = {
	backgroundColor: 'unset',
	marginBottom: '0px'
};

class PropertySearch extends React.PureComponent<PropertySearchProps, PropertySearchState> {
	constructor(props: PropertySearchProps) {
		super(props);
	}

	render() {
		return (
			<StyledTabsContainer animated={true} tabBarStyle={tabBarStyle} tabBarGutter={0} type="card">
				<StyledTabPane tab="Purchase" key="purchase">
					<PropertySearchForm />
				</StyledTabPane>
				<StyledTabPane tab="Rent" key="rent">
					<PropertySearchForm />
				</StyledTabPane>
			</StyledTabsContainer>
		);
	}
}

export default PropertySearch;
