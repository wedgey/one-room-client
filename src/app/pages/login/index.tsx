import React from 'react';

import LoginForm from '../../components/forms/login';

interface LoginPageProps {}
interface LoginPageState {}

export class LoginPage extends React.PureComponent<LoginPageProps, LoginPageState> {
	constructor(props: LoginPageProps) {
		super(props);
	}

	render() {
		return <LoginForm />;
	}
}
