import React from 'react';
import { Layout } from 'antd';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import HeaderBar from '../../components/menus/header';
import { RootState } from '../../reducers';
import theme from '../../config/antTheme.json';

interface OwnProps {}
interface StoreProps {}
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

const StyledLayout = styled(Layout)`
	height: calc(100vh - 45px);
`;

const StyledFooter = styled(Layout.Footer)`
	bottom: 0px;
	height: 45px;
	position: fixed;
	width: 100%;
`;

const BaseLayout: React.SFC<BaseLayoutProps> = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<GlobalStyle />
				<OuterLayout>
					<StyledLayout>
						<Layout>
							<StyledHeader>
								<HeaderBar />
							</StyledHeader>
							<Layout.Content>{props.children}</Layout.Content>
						</Layout>
					</StyledLayout>
					<StyledFooter>Footer</StyledFooter>
				</OuterLayout>
			</React.Fragment>
		</ThemeProvider>
	);
};

const mapStoreToProps = (store: RootState) => {
	return {};
};

export default connect(mapStoreToProps)(BaseLayout);
