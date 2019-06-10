import React from 'react';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import ErrorBoundary from '../../common/errorBoundary';
import styled from 'styled-components';

interface BasicContainerProps extends CardProps {
	footer?: React.ReactNode;
}

const BasicContainerContent = styled.div`
	padding: ${(props) => props.theme['card-padding-base']};
`;

const BasicContainerFooter = styled.div`
	border-top: ${(props) =>
		`${props.theme['border-width-base']} ${props.theme['border-style-base']} ${props.theme['border-color-split']}`};
	padding: ${(props) => `${props.theme['card-head-padding']} ${props.theme['card-padding-base']}`};
`;

class BasicContainer extends React.PureComponent<BasicContainerProps> {
	constructor(props: BasicContainerProps) {
		super(props);
	}

	render() {
		let { footer, bodyStyle, ...rest } = this.props;
		let contentBodyStyle = { padding: '0px', ...bodyStyle };
		return (
			<Card {...rest} bodyStyle={contentBodyStyle}>
				<BasicContainerContent>
					<ErrorBoundary>{this.props.children}</ErrorBoundary>
				</BasicContainerContent>
				{footer && <BasicContainerFooter>{footer}</BasicContainerFooter>}
			</Card>
		);
	}
}

export default BasicContainer;
