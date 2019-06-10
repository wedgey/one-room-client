import React from 'react';
import { Tabs } from 'antd';
import { TabsProps, TabPaneProps as AntTabPaneProps } from 'antd/lib/tabs';

interface TabPaneProps extends AntTabPaneProps {}

class TabPane extends React.PureComponent<TabPaneProps> {
	constructor(props: TabPaneProps) {
		super(props);
	}
	render() {
		return <Tabs.TabPane {...this.props}>{this.props.children}</Tabs.TabPane>;
	}
}

interface TabsContainerProps extends TabsProps {}
interface TabsContainerState {}

class TabsContainer extends React.PureComponent<TabsContainerProps, TabsContainerState> {
	static TabPane: typeof TabPane = TabPane;
	constructor(props: TabsContainerProps) {
		super(props);
	}

	render() {
		let { ...rest } = this.props;
		return <Tabs {...rest} />;
	}
}

export default TabsContainer;
