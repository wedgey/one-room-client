import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';

interface LogoCenteredLayoutProps {}

const OuterContainer = styled(Row)`
	flex-direction: column;
	height: 100%;
	min-height: 100vh;
	width: 100%;
`;

const LogoContainer = styled(Col)`
	text-align: center;
`;

const LogoCenteredLayout: React.SFC<LogoCenteredLayoutProps> = (props) => {
	return (
		<OuterContainer type="flex" justify="center" align="middle">
			<Col span={12}>
				<Row>
					<LogoContainer>
						{/* <img /> */}
						<h1>One Room Logo Placeholder</h1>
					</LogoContainer>
				</Row>
				<Row>
					<Col>{props.children}</Col>
				</Row>
			</Col>
		</OuterContainer>
	);
};

export default LogoCenteredLayout;
