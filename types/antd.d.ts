// import * as antd from 'antd';
import * as Menu from 'antd/lib/menu';

declare module 'antd/lib/menu' {
	interface MenuProps {
		triggerSubMenuAction?: 'hover' | 'click';
	}
}
