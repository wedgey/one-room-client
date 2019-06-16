import React from 'react';
import { ModelWithFields } from 'redux-orm';
import { Col, Row } from 'antd';
import { IUser } from '../../../models';
import LoginForm, { LoginFormProperties } from '../../forms/login';
import { showModal } from '../../../actions/modal';
import { ModalTypes } from '../../modals/types';
import { AuthenticationManager } from '../../../dataManagers';

interface UserMenuProps {
	user?: ModelWithFields<IUser>;
	onExit?: () => void;
}

const UserMenu: React.SFC<UserMenuProps> = (props) => {
	const registerHandler = () => {
		props.onExit && props.onExit();
		showModal(ModalTypes.Registration);
	};

	const loginHandler = (values: LoginFormProperties) => {
		AuthenticationManager.login({ email: values.username, password: values.password }).then(
			() => props.onExit && props.onExit()
		);
	};
	return (
		<Row>
			<Col style={{ padding: '20px' }}>
				<LoginForm onSubmit={loginHandler} registerHandler={registerHandler} />
			</Col>
		</Row>
	);
};

export default UserMenu;
