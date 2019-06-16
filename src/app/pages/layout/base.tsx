import React from 'react';
import { Layout } from 'antd';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import HeaderBar from '../../components/menus/header';
import { RootState } from '../../reducers';
import theme from '../../config/antTheme.json';
import { getActiveUser } from '../../selectors';
import { IUser } from '../../models';
import { ModelWithFields } from 'redux-orm';

interface OwnProps {}
interface StoreProps {
	user: ModelWithFields<IUser>;
}
type BaseLayoutProps = OwnProps & StoreProps;

const GlobalStyle = createGlobalStyle`
	html {
		height: unset;
		min-height: 100%;
	}
`;

const StyledHeader = styled(Layout.Header)`
	background-color: white !important;
`;

const OuterLayout = styled(Layout)`
	min-height: 100vh;
`;

const LayoutContent = styled(Layout.Content)`
	display: flex;
	flex-direction: column;
	margin-bottom: 45px;
	position: relative;
`;

const StyledLayout = styled(Layout)``;

const StyledFooter = styled(Layout.Footer)`
	bottom: 0px;
	height: ${(props) => props.theme['layout-footer-height']};
	position: fixed;
	width: 100%;
`;

const BaseLayoutTheme = { ...theme, 'layout-footer-height': '45px' };
const BaseLayout: React.SFC<BaseLayoutProps> = (props) => {
	return (
		<ThemeProvider theme={BaseLayoutTheme}>
			<React.Fragment>
				<GlobalStyle />
				<OuterLayout>
					<StyledLayout>
						<Layout>
							<StyledHeader>
								<HeaderBar user={props.user} />
							</StyledHeader>
							<LayoutContent>{props.children}</LayoutContent>
						</Layout>
					</StyledLayout>
					<StyledFooter>Footer</StyledFooter>
				</OuterLayout>
			</React.Fragment>
		</ThemeProvider>
	);
};

const mapStoreToProps = (store: RootState) => {
	return {
		user: getActiveUser(store)
	};
};

export default connect(mapStoreToProps)(BaseLayout);
