import React from 'react';

interface WithLayoutProps {
	layout: React.ComponentClass;
}

export default (WrappedComponent: React.ComponentType<any>, Layout: React.ComponentType<any>) =>
	class WithLayout extends React.PureComponent<WithLayoutProps> {
		constructor(props: WithLayoutProps) { super(props); }
		render() {
			let { layout, ...rest } = this.props;
			return <Layout><WrappedComponent {...rest} /></Layout>;
		}
	}