import React from 'react';
import Form, { FormComponentProps, ValidationRule } from 'antd/lib/form';
import Input, { InputProps } from 'antd/lib/input';
import { Button, Col, Row } from 'antd';
import AuthenticationManager from '../../../dataManagers/authentication';

interface RegistrationProperties {
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	password: string;
	confirmPassword: string;
}

interface RegistrationFormProps extends FormComponentProps<RegistrationProperties> {
	size?: InputProps['size'];
	onSubmit: (values: RegistrationProperties) => void;
	onCancel: () => void;
}
interface RegistrationFormState {
	values: RegistrationProperties;
}

class RegistrationForm extends React.PureComponent<RegistrationFormProps, RegistrationFormState> {
	static defaultProps: Partial<RegistrationFormProps> = { size: 'default' };
	constructor(props: RegistrationFormProps) {
		super(props);
	}

	comparePassword: ValidationRule['validator'] = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('Your passwords do not match.');
		} else {
			callback();
		}
	};

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				AuthenticationManager.register(values);
			}
		});
	};

	validatePassword: ValidationRule['validator'] = (rule, value, callback) => {
		const { form } = this.props;
		if (value) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	};

	render() {
		const { size, form } = this.props;
		const { getFieldDecorator } = form;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Item label="Display Name">
					{getFieldDecorator<RegistrationProperties>('username', {
						rules: [
							{
								required: true,
								message: 'Oops forgot to enter a username'
							}
						]
					})(<Input size={size} placeholder="Username" />)}
				</Form.Item>
				<Form.Item label="Email">
					{getFieldDecorator<RegistrationProperties>('email', {
						rules: [
							{
								required: true,
								message: 'Oops forgot to enter your email'
							},
							{
								type: 'email',
								message: 'Please enter a valid email.'
							}
						]
					})(<Input size={size} placeholder="Email" />)}
				</Form.Item>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item label="First Name">
							{getFieldDecorator<RegistrationProperties>('firstname', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter your first name'
									}
								]
							})(<Input size={size} placeholder="First Name" />)}
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item label="Last Name">
							{getFieldDecorator<RegistrationProperties>('lastname', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter your last name'
									}
								]
							})(<Input size={size} placeholder="Last Name" />)}
						</Form.Item>
					</Col>
				</Row>
				<Form.Item label="Password">
					{getFieldDecorator<RegistrationProperties>('password', {
						rules: [
							{
								required: true,
								message: 'Oops forgot to enter a password'
							},
							{
								validator: this.validatePassword
							}
						]
					})(<Input.Password size={size} placeholder="Password" />)}
				</Form.Item>
				<Form.Item label="Confirm Password">
					{getFieldDecorator<RegistrationProperties>('confirmPassword', {
						rules: [
							{
								required: true,
								message: 'Oops, forgot to enter the confirmation password'
							},
							{
								validator: this.comparePassword
							}
						]
					})(<Input.Password size={size} placeholder="Confirm Password" />)}
				</Form.Item>
				<Form.Item>
					<Row gutter={16}>
						<Col span={6}>
							<Button block size={size}>
								Cancel
							</Button>
						</Col>
						<Col span={18}>
							<Button block type="primary" htmlType="submit" size={size}>
								Register
							</Button>
						</Col>
					</Row>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create<RegistrationFormProps>()(RegistrationForm);
