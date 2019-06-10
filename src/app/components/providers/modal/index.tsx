import React, { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { ModelWithFields } from 'redux-orm';
import memoizeOne from 'memoize-one';
import { RootState } from '../../../reducers';
import { getModals } from '../../../selectors/modal';
import { IModal, ModalStatus } from '../../../models';
import { ModalProps } from 'antd/lib/modal';
import { hideModal, deleteModal } from '../../../actions/modal';

interface ModalComponentProps extends ModalProps {}
interface OwnProps {
	types: { [k: string]: ComponentClass<ModalComponentProps> };
}
interface StoreProps {
	modals: Array<ModelWithFields<IModal>>;
}
type ModalProviderProps = OwnProps & StoreProps;
interface ModalProviderState {}

class ModalProvider extends React.PureComponent<ModalProviderProps, ModalProviderState> {
	static defaultProps = { modals: [], types: {} };
	constructor(props: ModalProviderProps) {
		super(props);
	}

	/**
	 * Handle Closing a Modal
	 */
	handleCancel = (modalId: string) => {
		hideModal(modalId);
	};

	/**
	 * Handle Removal of Modal after it's closed
	 */
	handleAfterClose = (modalId: string) => {
		deleteModal(modalId);
	};

	/**
	 * Generate modals from the array of modals in the store
	 */
	generateModals = memoizeOne((modals: StoreProps['modals']) => {
		return modals.map((m) => {
			let Component = this.props.types[m.componentType];
			let properties = m.properties || {};
			return (
				<Component
					key={m.componentType}
					onCancel={this.handleCancel.bind(undefined, m.componentType)}
					afterClose={this.handleAfterClose.bind(undefined, m.componentType)}
					visible={m.status === ModalStatus.Visible}
					{...properties}
				/>
			);
		});
	});

	render() {
		if (this.props.modals.length === 0) return null;
		return this.generateModals(this.props.modals);
	}
}

const mapStoreToProps = (state: RootState, ownProps: OwnProps) => {
	return {
		modals: getModals(state)
	};
};
export default connect(mapStoreToProps)(ModalProvider);
