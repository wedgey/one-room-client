import React from 'react';
import styled from 'styled-components';
import { Button, Col, Input, Row, Select } from 'antd';
import { localization } from '../../../localization';

interface OwnProps {
	size?: 'default' | 'large' | 'small';
}
interface StoreProps {}
type PropertySearchFormProps = OwnProps & StoreProps;

interface PropertySearchFormState {}

const FullWidthCol = styled(Col)`
	flex-grow: 1;
`;

class PropertySearchForm extends React.PureComponent<PropertySearchFormProps, PropertySearchFormState> {
	static defaultProps: { size: 'default' };
	constructor(props: PropertySearchFormProps) {
		super(props);
	}

	handleTypeChange = (value: string, option: React.ReactElement<any> | React.ReactElement<any>[]) => {
		console.log(value);
	};

	render() {
		return (
			<Row type="flex" gutter={16} justify="center">
				<FullWidthCol>
					<Input
						size={this.props.size}
						placeholder={localization.get('components.forms.propertySearchForm.addressPlaceholder')}
					/>
				</FullWidthCol>
				<Col>
					<Select
						defaultValue="Apartment"
						size={this.props.size}
						onChange={this.handleTypeChange}
						style={{ width: '100%' }}
					>
						<Select.Option value="Apartment">{localization.get('common.apartment')}</Select.Option>
						<Select.Option value="House">{localization.get('common.house')}</Select.Option>
					</Select>
				</Col>
				<Col>
					<Button type="primary" size={this.props.size}>
						Search
					</Button>
				</Col>
			</Row>
		);
	}
}

export default PropertySearchForm;
