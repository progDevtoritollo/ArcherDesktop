import React, { useState } from 'react';
import { useMutation, QueryClient } from 'react-query';
import toast from 'react-hot-toast';

import userService from 'shared/api/user/userService';

import './index.scss';

const FileInput: React.FC = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const queryClient = new QueryClient();

	const { isLoading: isLoadingAvatar, mutate: postFile } = useMutation(
		'post-input-file',
		async () => {
			if (selectedFile !== null) {
				return await userService.postAvatar(selectedFile);
			} else {
				return 0;
			}
		},
		{
			onSuccess: () => {
				// Инвалидация и обновление
				toast.success('Your avatar has saved');
				queryClient.invalidateQueries('user-settings');
			},
			onError: () => {
				toast.error('Error... something went wrong ');
			},
		},
	);

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedFile(event.target.files && event.target.files[0]);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		postFile();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='file-input-container'>
				<label className='input-file'>
					<input
						type='file'
						id='file'
						name='file'
						accept='.png, .jpg, .jpeg'
						onChange={handleFileInputChange}
					/>
					<span> {selectedFile ? 'File selected' : 'Choose file'}</span>
				</label>
				<button
					className='file-input-container__upload'
					type='submit'>
					Upload
				</button>
			</div>
		</form>
	);
};

export default FileInput;
