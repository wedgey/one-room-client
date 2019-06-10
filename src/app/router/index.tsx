import React from 'react';
import { RouteProps, Switch } from 'react-router';
import { hot } from 'react-hot-loader/root';
import RouteWithRoles from './routeWithRoles';
import withLayout from './withLayout';

import BaseLayout from '../pages/layout/base';
import LogoCenteredLayout from '../pages/layout/minimal';
import { HomePage, LoginPage, PropertyCreatePage } from '../pages';

const Routes = (props: RouteProps) => (
	<Switch location={props.location}>
		<RouteWithRoles exact path="/" component={withLayout(HomePage, BaseLayout)} />
		<RouteWithRoles exact path="/login" component={withLayout(LoginPage, LogoCenteredLayout)} />
		<RouteWithRoles exact path="/property/create" component={withLayout(PropertyCreatePage, BaseLayout)} />
		<RouteWithRoles path="*" component={withLayout(HomePage, BaseLayout)} />
	</Switch>
);

export default hot(Routes);
