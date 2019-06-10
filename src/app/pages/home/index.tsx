import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import PropertySearch from '../../components/modules/propertySearch';

interface OwnProps {}
interface StoreProps {}
type HomePageProps = OwnProps & StoreProps;

interface HomePageState {}

import MainBg from '../../../assets/images/apartment-architecture-carpet-584399.jpg';
import { Link } from 'react-router-dom';
const MainContainer = styled(Row)`
	background-image: url(${MainBg});
	background-position: center;
	background-size: cover;
	height: 100%;
`;

export class HomePage extends React.PureComponent<HomePageProps, HomePageState> {
	constructor(props: HomePageProps) {
		super(props);
	}

	render() {
		return (
			<MainContainer type="flex" align="middle">
				<Col span={24}>
					<Row type="flex">
						<Col span={24}>
							<Link to="/property/create">TEEST</Link> Home Page
						</Col>
					</Row>
					<Row type="flex" justify="center">
						<Col span={8}>
							<PropertySearch />
						</Col>
					</Row>
				</Col>
			</MainContainer>
		);
	}
}
