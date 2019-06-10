import React from 'react';
import GeneralError from './general';

interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = { hasError: false };

	constructor(props: ErrorBoundaryProps) {
		super(props);
	}

	componentDidCatch(error: any, info: any) {
		// Display fallback UI
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) return <GeneralError />;
		else return this.props.children;
	}
}

export default ErrorBoundary;
