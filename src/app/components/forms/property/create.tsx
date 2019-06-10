import React from 'react';
import { Col, Icon, Input, Row, Select, Divider, List, Checkbox, Button } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import AvatarUpload from '../../modules/avatarUpload';
import styled from 'styled-components';

enum PropertyType {
	Condo = 'Condo',
	Townhouse = 'Townhouse',
	House = 'House'
}

interface PropertyCreationProperties {
	name: string;
	type: PropertyType;
	description: string;
	address: string;
	city: string;
	province: string;
	postalCode: string;
	country: string;
	amenities: number;
}

interface PropertyCreationFormProps extends FormComponentProps<PropertyCreationProperties> {
	size?: InputProps['size'];
	onSubmit: (values: PropertyCreationProperties) => void;
	onCancel: () => void;
}

interface PropertyCreationFormState {
	values: PropertyCreationProperties;
}

const rowGutterSize = 16;

const GrowingCol = styled(Col)`
	flex-grow: 1;
`;

const CheckboxlessCheckbox = Checkbox;
// const CheckboxlessCheckbox = styled(Checkbox)`
// 	& > span.${(props) => `${props.theme.prefix}-checkbox`} {
// 		display: none;

// 		& + span {
// 			padding: 0px;
// 		}
// 	}
// `;

const amenities = [
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' },
	{ icon: 'down-square', label: 'Parking' }
];

class PropertyCreationForm extends React.PureComponent<PropertyCreationFormProps, PropertyCreationFormState> {
	static defaultProps: Partial<PropertyCreationFormProps> = { size: 'default' };
	state: PropertyCreationFormState = {
		values: {
			name: '',
			type: PropertyType.Condo,
			description: '',
			address: '',
			city: '',
			province: '',
			postalCode: '',
			country: '',
			amenities: 
		}
	};
	constructor(props: PropertyCreationFormProps) {
		super(props);
	}

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { size, form } = this.props;
		const { getFieldDecorator } = form;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Row type="flex" align="bottom" gutter={rowGutterSize}>
					<Col>
						<Form.Item>
							<AvatarUpload />
						</Form.Item>
					</Col>
					<Col style={{ flexGrow: 1 }}>
						<Form.Item label="Property Name">
							{getFieldDecorator<PropertyCreationProperties>('name', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter a name for this property'
									}
								]
							})(<Input size={size} placeholder="Bob's Property" />)}
						</Form.Item>
					</Col>
					<Col>
						<Form.Item label="Type">
							{getFieldDecorator('type', {
								rules: [{ required: true, message: 'Please select the type of this property' }],
								initialValue: this.state.values.type
							})(
								<Select size={size} placeholder="Condo">
									<Select.Option value="condo">Condo</Select.Option>
									<Select.Option value="townhouse">Townhouse</Select.Option>
									<Select.Option value="house">House</Select.Option>
								</Select>
							)}
						</Form.Item>
					</Col>
				</Row>
				<Row type="flex" gutter={rowGutterSize}>
					<GrowingCol>
						<Form.Item label="Description">
							{getFieldDecorator<PropertyCreationProperties>('description')(
								<Input.TextArea autosize={{ minRows: 4, maxRows: 7 }} />
							)}
						</Form.Item>
					</GrowingCol>
				</Row>
				<Divider>Address</Divider>
				<Row type="flex">
					<GrowingCol>
						<Form.Item label="Address">
							{getFieldDecorator<PropertyCreationProperties>('address', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter address for this property'
									}
								]
							})(<Input size={size} placeholder="123 Broadway St." />)}
						</Form.Item>
					</GrowingCol>
				</Row>
				<Row type="flex" gutter={rowGutterSize}>
					<GrowingCol>
						<Form.Item label="City">
							{getFieldDecorator<PropertyCreationProperties>('city', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter the city for this property'
									}
								]
							})(<Input size={size} placeholder="Vancouver" />)}
						</Form.Item>
					</GrowingCol>
					<GrowingCol>
						<Form.Item label="Province">
							{getFieldDecorator<PropertyCreationProperties>('province', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter the province for this property'
									}
								]
							})(<Input size={size} placeholder="British Columbia" />)}
						</Form.Item>
					</GrowingCol>
				</Row>
				<Row type="flex" gutter={rowGutterSize}>
					<GrowingCol>
						<Form.Item label="Postal Code">
							{getFieldDecorator<PropertyCreationProperties>('postalCode', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter the postal code for this property'
									}
								]
							})(<Input size={size} placeholder="V1A 1A1" />)}
						</Form.Item>
					</GrowingCol>
					<GrowingCol>
						<Form.Item label="Country">
							{getFieldDecorator<PropertyCreationProperties>('country', {
								rules: [
									{
										required: true,
										message: 'Oops forgot to enter the country for this property'
									}
								]
							})(<Input size={size} placeholder="Canada" />)}
						</Form.Item>
					</GrowingCol>
				</Row>
				<Divider>Amenities</Divider>
				<Form.Item>
					{getFieldDecorator<PropertyCreationProperties>('amenities', {
						getValueFromEvent: (event) => parseInt(event.nativeEvent.target.value)
					})(
						// <Checkbox.Group>
						<List
							grid={{ gutter: rowGutterSize, column: 12 }}
							dataSource={amenities}
							renderItem={(item, idx) => (
								<List.Item style={{ textAlign: 'center' }}>
									<CheckboxlessCheckbox value={idx}>
										<Icon type={item.icon} />
										<span style={{ display: 'block' }}>{item.label}</span>
									</CheckboxlessCheckbox>
								</List.Item>
							)}
						/>
						// </Checkbox.Group>
					)}
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit">Submit</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create<PropertyCreationFormProps>()(PropertyCreationForm);
