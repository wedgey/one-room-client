import React from 'react';
import { Button, Checkbox, Col, Form, Icon, Input, Row } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { localization } from '../../../localization';
import { InputProps } from 'antd/lib/input';

interface LoginFormProps extends FormComponentProps {
	size?: InputProps['size'];
	registerHandler?: () => void;
}
interface LoginFormState {}

class LoginForm extends React.PureComponent<LoginFormProps, LoginFormState> {
	static defaultProps: Partial<LoginFormProps> = { size: 'default' };
	constructor(props: LoginFormProps) {
		super(props);
	}

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) console.log('Received values of form: ', values);
		});
	};

	handleRegister = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		this.props.registerHandler && this.props.registerHandler();
	};

	render() {
		const { size, form } = this.props;
		const { getFieldDecorator } = form;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Item>
					{getFieldDecorator('username', {
						rules: [
							{
								required: true,
								message: localization.get('components.forms.login.usernameMissing')
							}
						]
					})(
						<Input
							size={size}
							prefix={<Icon type="user" />}
							placeholder={localization.get('components.forms.login.username')}
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: localization.get('components.forms.login.passwordMissing') }]
					})(
						<Input
							size={size}
							prefix={<Icon type="lock" />}
							placeholder={localization.get('components.forms.login.password')}
						/>
					)}
				</Form.Item>
				<Form.Item style={{ marginBottom: '0px' }}>
					<Row type="flex" justify="space-between">
						<Col>
							{getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true })(
								<Checkbox>{localization.get('components.forms.login.rememberMe')}</Checkbox>
							)}
						</Col>
						<Col>
							<a href="#">{localization.get('components.forms.login.forgotPassword')}</a>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Button block type="primary" htmlType="submit" size={size}>
								{localization.get('components.forms.login.submit')}
							</Button>
						</Col>
					</Row>
					<Row type="flex" justify="end">
						<Col>
							<a href="#" onClick={this.handleRegister}>
								Not a member yet? Register now!
							</a>
						</Col>
					</Row>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create()(LoginForm);
