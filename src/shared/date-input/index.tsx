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

const DateInput: React.FC<InputComponentProps> = ({ setValue, value, label = 'input text' }: InputComponentProps) => {
	const [Date, setDate] = useState('');

	const queryClient = new QueryClient();

	const {
		isLoading: isLoadingRound,
		mutate: postInputData,
		isError,
	} = useMutation(
		'post-input-settings',
		async () => {
			return await userService.postUserSettingsValue({
				title: label,
				value: Date,
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

	const handleBirthDayDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const BDate = event.target.valueAsDate?.toISOString() ?? '';
		setDate(BDate);
		setValue(event.target.value);
		postInputData();
	};

	return (
		<div className='date-input-container'>
			{label && (
				<label
					htmlFor='input'
					className='label'>
					{label}
				</label>
			)}
			<br />
			<input
				type='date'
				id='party'
				name='bday'
				value={value}
				onChange={handleBirthDayDate}></input>
		</div>
	);
};

export default DateInput;
