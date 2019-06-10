import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

interface AvatarUploadPreview {
	handleRemove?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	imageUrl: string;
}

const PreviewActionsContainer = styled.div`
	display: none;
	position: absolute;
`;

const PreviewContainer = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	position: relative;

	&:hover {
		&::before {
			background-color: black;
			opacity: 0.6;
		}

		${PreviewActionsContainer} {
			color: white;
			display: block;
			transition: all 0.3s;
			z-index: 2;
		}
	}

	&::before {
		content: ' ';
		height: 100%;
		opacity: 0;
		position: absolute;
		transition: all 0.3s;
		width: 100%;
		z-index: 1;
	}
`;

const AvatarUploadPreview: React.SFC<AvatarUploadPreview> = (props: AvatarUploadPreview) => {
	return (
		<PreviewContainer>
			<img src={props.imageUrl} />
			<PreviewActionsContainer>
				<Icon onClick={props.handleRemove} type="delete" />
			</PreviewActionsContainer>
		</PreviewContainer>
	);
};

export default AvatarUploadPreview;
