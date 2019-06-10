import React from 'react';
import { Icon, Upload, message } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, UploadProps } from 'antd/lib/upload/interface';
import AvatarUploadPreview from './preview';

const getBase64 = (img: File, callback: (event: ProgressEvent, result: string | null) => void) => {
	const reader = new FileReader();
	reader.addEventListener('load', (event) => callback(event, reader.result as string));
	reader.readAsDataURL(img);
};

interface AvatarUploadProps extends UploadProps {}
interface AvatarUploadState {
	imageUrl: string | null;
	isLoading: boolean;
}

class AvatarUpload extends React.PureComponent<AvatarUploadProps, AvatarUploadState> {
	state: AvatarUploadState = { imageUrl: null, isLoading: false };
	constructor(props: AvatarUploadProps) {
		super(props);
	}

	handleBeforeUpload = (file: File) => {
		const isJPG = file.type === 'image/png';
		if (!isJPG) message.error('You can only upload JPG files!');

		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) message.error('Image must be smaller than 2MB!');

		return this.props.action !== undefined && isJPG && isLt2M;
	};

	handleChange = (info: UploadChangeParam<UploadFile | File>) => {
		const shouldUpload = this.props.action;
		if (shouldUpload) {
			const file: UploadFile = info.file as UploadFile;
			if (file.status === 'uploading') return this.setState({ isLoading: true });
			if (file.status === 'done' && file.originFileObj)
				return getBase64(file.originFileObj, (event, imageUrl) =>
					this.setState({ imageUrl, isLoading: false })
				);
		} else {
			const file: File = info.file as File;
			return getBase64(file, (event, imageUrl) => this.setState({ imageUrl, isLoading: false }));
		}
	};

	handleRemove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		event.stopPropagation();
		this.setState({ imageUrl: null });
	};

	render() {
		const { imageUrl, isLoading } = this.state;
		const uploadButton = (
			<div>
				<Icon type={isLoading ? 'loading' : 'plus'} />
				<div>Upload</div>
			</div>
		);
		return (
			<Upload
				action={this.props.action}
				name="avatar"
				listType="picture-card"
				showUploadList={false}
				beforeUpload={this.handleBeforeUpload}
				onChange={this.handleChange}
			>
				{imageUrl ? <AvatarUploadPreview handleRemove={this.handleRemove} imageUrl={imageUrl} /> : uploadButton}
			</Upload>
		);
	}
}

export default AvatarUpload;
