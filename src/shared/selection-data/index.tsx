import React, { useState } from 'react';
import { useMutation, QueryClient } from 'react-query';
import toast from 'react-hot-toast';
import { TreeSelect } from 'antd';

import userService from 'shared/api/user/userService';

import './index.scss';

interface InputComponentProps {
	label: string;
	value: string;
	setValue: (newValue: string) => void;
}

const treeData = [
	{
		title: 'Юношеские',
		value: 'U0',
		children: [
			{
				title: ' 1 ранг',
				value: 'U1',
			},
			{
				title: ' 2 ранг',
				value: 'U2',
			},
			{
				title: ' 3 ранг',
				value: 'U3',
			},
		],
	},
	{
		title: 'Взрослые',
		value: 'A0',
		children: [
			{
				title: '1 ранг',
				value: 'A1',
			},
			{
				title: '2 ранг',
				value: 'A2',
			},
			{
				title: '3 ранг',
				value: 'A3',
			},
		],
	},
	{
		title: 'KMC',
		value: 'KMC',
	},
	{
		title: 'MC',
		value: 'MC',
	},
	{
		title: 'MCMK',
		value: 'MCMK',
	},
	{
		title: 'ЗМС',
		value: 'ZMS',
	},
];

const SelectionData: React.FC<InputComponentProps> = ({ setValue, value, label = 'input text' }: InputComponentProps) => {
	const queryClient = new QueryClient();
	let localData = '';
	const { isLoading: isLoadingRound, mutate: postSelectionData } = useMutation(
		'post-selection-value',
		async () => {
			return await userService.postUserSettingsValue({
				title: label,
				value: localData,
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

	const handleChange = (newRank: string) => {
		setValue(newRank);
		localData = newRank;
		postSelectionData();
	};

	return (
		<>
			<div className='selection-container'>
				<h3>{label}</h3>
				<TreeSelect
					style={{ width: '300px' }}
					value={value}
					dropdownStyle={{ maxHeight: 700, overflow: 'auto' }}
					treeData={treeData}
					placeholder='Please select'
					treeDefaultExpandAll
					onChange={handleChange}
				/>
			</div>
		</>
	);
};

export default SelectionData;
