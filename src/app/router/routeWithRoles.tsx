import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { connect } from 'react-redux';
import { LocationDescriptor } from 'history';
import { RoleTitles, RoleGroups } from '../config/roles';
import { RootState } from '../reducers';
import { getActiveUser } from '../selectors';

type RoleRouteDescriptor = { [key in RoleTitles]: LocationDescriptor<any> };

interface OwnProps extends RouteProps {
	allowedRoles?: (RoleTitles | undefined)[];
	roleRedirectTo?: LocationDescriptor | RoleRouteDescriptor;
	roleBasedComponents?: { [key in RoleTitles]: RouteProps['component'] };
}

interface StoreProps {
	userRoles?: RoleTitles[];
}

type RouteWithRolesProps = OwnProps & StoreProps;

const permissionDeniedPanel = (
	<div>
		<h1>Sorry, you do not have access to this part of the site.</h1>
	</div>
);

const checkRoles = (
	userRoles: RouteWithRolesProps['userRoles'],
	allowedRoles: RouteWithRolesProps['allowedRoles'] = RoleGroups.All
) => {
	let roleArr: (RoleTitles | undefined)[] = userRoles === undefined ? [undefined] : userRoles;
	return roleArr.filter((r) => allowedRoles.indexOf(r) !== -1).length > 0;
};

const RouteWithRoles: React.SFC<RouteWithRolesProps> = (props) => {
	let { userRoles, component, roleBasedComponents, allowedRoles = RoleGroups.All, roleRedirectTo, ...rest } = props;

	if (checkRoles(userRoles, allowedRoles)) {
		let displayedComponent = component;
		if (userRoles && roleBasedComponents) displayedComponent = roleBasedComponents[userRoles[0]] || component;
		return <Route {...rest} component={displayedComponent} />;
	} else {
		let userRole = !Array.isArray(userRoles) ? undefined : userRoles.length > 0 ? userRoles[0] : undefined;
		if (userRole === undefined) return <Redirect to="/login" />;
		if (roleRedirectTo === undefined) return <>{permissionDeniedPanel}</>;
		if (typeof roleRedirectTo === 'string') return <Redirect to={roleRedirectTo} />;
		else return <Redirect to={(roleRedirectTo as RoleRouteDescriptor)[userRole]} />;
	}
};

const mapStoreToProps = (store: RootState, props: OwnProps) => {
	return {
		user: getActiveUser(store)
	};
};

export default connect(mapStoreToProps)(RouteWithRoles);
