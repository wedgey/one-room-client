import React from 'react';
import { ModelWithFields } from 'redux-orm';
import { Col, Row } from 'antd';
import { IUser } from '../../../models';
import LoginForm from '../../forms/login';
import { showModal } from '../../../actions/modal';
import { ModalTypes } from '../../modals/types';

interface UserMenuProps {
	user?: ModelWithFields<IUser>;
	onExit?: () => void;
}

const UserMenu: React.SFC<UserMenuProps> = (props) => {
	const registerHandler = () => {
		props.onExit && props.onExit();
		showModal(ModalTypes.Registration);
	};
	return (
		<Row>
			<Col style={{ padding: '20px' }}>
				<LoginForm registerHandler={registerHandler} />
			</Col>
		</Row>
	);
};

export default UserMenu;
