import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { TreeSelect } from 'antd';

import './index.scss';
import UsualInput from 'shared/usual-input/index';
import userService from 'shared/api/user/userService';
import DateInput from 'shared/date-input';
import FileInput from 'shared/file-input/index';

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

const UserSettings: React.FC = () => {
	const {} = useQuery(
		'post-input-settings',
		async () => {
			return await userService.getUserSettings();
		},
		{
			retry: 2,
			onSuccess: res => {
				console.log(res.data);
			},
			onError: (err: any) => {
				toast.error('Error... Data did not loaded ');
			},
		},
	);

	const [name, setName] = useState('');
	const [surname, setSureName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [bDate, setBDate] = useState('');
	const [rank, setRank] = useState('');
	const [aimX, setAimX] = useState('');
	const [aimY, setAimY] = useState('');
	const [base, setBase] = useState('');

	return (
		<div className='user-settings'>
			<h1>UserSettings</h1>
			<div className='user-settings__add-photo'>
				<div className='user-settings__add-photo--avatar'></div>
				<FileInput />
			</div>
			<UsualInput
				setValue={setName}
				value={name}
				label='Name'
			/>

			<UsualInput
				setValue={setSureName}
				value={surname}
				label='Surname'
			/>
			<UsualInput
				setValue={setEmail}
				value={email}
				label='Email'
			/>

			<UsualInput
				setValue={setPhoneNumber}
				value={phoneNumber}
				label='phone number'
			/>

			<DateInput
				label='Date of Birth'
				value={bDate}
				setValue={setBDate}
			/>
			<h3>Archer level</h3>
			<TreeSelect
				style={{ width: '300px' }}
				value={rank}
				dropdownStyle={{ maxHeight: 700, overflow: 'auto' }}
				treeData={treeData}
				placeholder='Please select'
				treeDefaultExpandAll
				onChange={(rank: string) => {
					setRank(rank);
				}}
			/>

			<div className='user-settings__bow-form'>
				<h3>Bow params</h3>
				<UsualInput
					setValue={setAimX}
					value={aimX}
					label='Aim X'
				/>
				<UsualInput
					setValue={setAimY}
					value={aimY}
					label='Aim Y'
				/>
				<UsualInput
					setValue={setBase}
					value={base}
					label='Base'
				/>
			</div>
			<div>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		</div>
	);
};

export default UserSettings;
