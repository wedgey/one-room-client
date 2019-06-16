import React from 'react';
import { Col, Row, Menu } from 'antd';
import styled from 'styled-components';
import memoizeOne from 'memoize-one';
import { ModelWithFields } from 'redux-orm';
import { IUser } from '../../../models';
import UserMenu from './userMenu';

interface OwnProps {}
interface StoreProps {
	user?: ModelWithFields<IUser>;
}
type HeaderBarProps = OwnProps & StoreProps;
interface HeaderBarState {
	openKeys: Array<string>;
}

const FullHeightContainer = styled(Row)`
	height: 100%;
`;

const NavDropdown = styled(Menu)`
	background: unset;
	border-bottom: none;
	height: 100%;
	vertical-align: middle;
`;

const FullHeightSubMenu = styled(Menu.SubMenu)`
	&&& {
		&[role='menuitem'] {
			border-bottom: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		height: 100%;
	}
`; /// &&& to override css specificity on antd SubMenu

const LoginSubMenu = styled(FullHeightSubMenu)`
	&&& {
		&:not([role='menuitem']) {
			width: 400px;
		}
	}
`;

class HeaderBar extends React.PureComponent<HeaderBarProps, HeaderBarState> {
	state: HeaderBarState = { openKeys: [] };
	constructor(props: HeaderBarProps) {
		super(props);
	}

	handleMenuClick = (e: any) => {
		this.setState((state) => {
			return {
				openKeys: [...state.openKeys, e.key]
			};
		});
	};

	handleMenuClose = (key: string) => () => {
		this.setState((state) => {
			let newArr = state.openKeys.filter((k) => k !== key);
			return {
				openKeys: newArr
			};
		});
	};

	updateOpenMenus = (openKeys: HeaderBarState['openKeys']) => {
		this.setState({
			openKeys
		});
	};

	generateUserMenu = memoizeOne((user: HeaderBarProps['user']) => {
		if (!user) {
			return (
				<LoginSubMenu key="usermenu" title="Login" onTitleClick={this.handleMenuClick}>
					<UserMenu onExit={this.handleMenuClose('usermenu')} />
				</LoginSubMenu>
			);
		} else {
			return (
				<FullHeightSubMenu key="usermenu" title={user.username} onTitleClick={this.handleMenuClick}>
					<Menu.Item key="profile">Profile</Menu.Item>
					<Menu.Item key="logout">Logout</Menu.Item>
				</FullHeightSubMenu>
			);
		}
	});

	render() {
		const { user } = this.props;
		const userMenu = this.generateUserMenu(user);
		return (
			<FullHeightContainer type="flex">
				<Col span={12} />
				<Col span={12}>
					<FullHeightContainer type="flex" justify="end">
						<Col>
							<NavDropdown
								mode="horizontal"
								triggerSubMenuAction="click"
								openKeys={this.state.openKeys}
								onOpenChange={this.updateOpenMenus}
							>
								{userMenu}
							</NavDropdown>
						</Col>
					</FullHeightContainer>
				</Col>
			</FullHeightContainer>
		);
	}
}

export default HeaderBar;
