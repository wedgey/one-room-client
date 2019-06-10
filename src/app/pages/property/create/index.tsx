import React from 'react';

import PropertyCreationForm from '../../../components/forms/property/create';
import { Col, Row } from 'antd';

interface PropertyCreatePageProps {}
interface PropertyCreatePageState {}

export class PropertyCreatePage extends React.PureComponent<PropertyCreatePageProps, PropertyCreatePageState> {
	constructor(props: PropertyCreatePageProps) {
		super(props);
	}

	render() {
		return (
			<Row>
				<Col span={20} offset={2}>
					<PropertyCreationForm size="large" />
				</Col>
			</Row>
		);
	}
}
