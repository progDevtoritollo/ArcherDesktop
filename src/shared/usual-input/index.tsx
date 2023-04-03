import React, { useState } from 'react';
import { useMutation, QueryClient } from 'react-query';
import toast from 'react-hot-toast';

import userService from 'shared/api/user/userService';

import './index.scss';

interface InputComponentProps {
	label: string;
	value: string;
	setValue: (newValue: string) => void;
}

const UsualInput: React.FC<InputComponentProps> = ({ setValue, value, label = 'input text' }: InputComponentProps) => {
	const queryClient = new QueryClient();

	const {
		isLoading: isLoadingRound,
		mutate: postInputData,
		isError,
	} = useMutation(
		'post-input-value',
		async () => {
			return await userService.postUserSettingsValue({
				title: label,
				value: value,
			});
		},
		{
			onSuccess: () => {
				// Инвалидация и обновление
				queryClient.invalidateQueries('user-settings');
				toast.success('Your data has saved');
			},
			onError: () => {
				toast.error('Error... something went wrong ');
			},
		},
	);

	const sendInputData: React.FocusEventHandler<HTMLInputElement> = event => {
		postInputData();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className='input-container'>
				<input
					onBlur={sendInputData}
					type='text'
					id='input'
					value={value}
					onChange={handleChange}
					required
				/>
				{label && (
					<label
						htmlFor='input'
						className='label'>
						{label}
					</label>
				)}
				<div className='underline'></div>
			</div>
		</>
	);
};

export default UsualInput;
