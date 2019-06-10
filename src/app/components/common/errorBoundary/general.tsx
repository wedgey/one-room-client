import React from 'react';
import { Col, Icon, Row } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
	text-align: center;
`;

const StyledIcon = styled(Icon)`
	font-size: 10em;
`;

const GeneralError: React.SFC = (props) => {
	return (
		<StyledRow type="flex" align="middle" style={{ textAlign: 'center' }}>
			<Col span={24}>
				<StyledIcon style={{ fontSize: '10em' }} type="frown" theme="outlined" />
			</Col>
			<Col span={24}>
				<h1>Sorry! Looks like this module failed to load...</h1>
			</Col>
		</StyledRow>
	);
};

export default GeneralError;
