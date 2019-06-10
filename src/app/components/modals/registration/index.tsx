import React from 'react';
import { Col, Modal, Row } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import styled from 'styled-components';

import RegistrationForm from '../../forms/register';

interface RegistrationModalProps extends ModalProps {}
interface RegistrationModalState {}

import ImageContainerBackground from '../../../../assets/images/ashtray-condo-condominium-298842.jpg';
const ImageContainer = styled(Col)`
	background-image: url(${ImageContainerBackground});
	background-position: center;
	background-size: cover;
	border-bottom-left-radius: inherit;
	border-top-left-radius: inherit;
`;

const FormContainer = styled(Col)`
	padding: 16px;
`;

class RegistrationModal extends React.PureComponent<RegistrationModalProps, RegistrationModalState> {
	constructor(props: RegistrationModalProps) {
		super(props);
	}

	render() {
		return (
			<Modal
				footer={null}
				closable={false}
				bodyStyle={{ padding: '0px', borderRadius: 'inherit' }}
				width="80%"
				{...this.props}
			>
				<Row type="flex" style={{ borderRadius: 'inherit' }}>
					<ImageContainer span={8}>&nbsp;</ImageContainer>
					<FormContainer span={16}>
						<Row>
							<Col>
								<h1>Register</h1>
							</Col>
							<Col>
								<RegistrationForm size="large" />
							</Col>
						</Row>
					</FormContainer>
				</Row>
			</Modal>
		);
	}
}

export default RegistrationModal;
