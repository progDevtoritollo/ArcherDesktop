import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import './index.scss';
import UsualInput from 'shared/usual-input/index';
import userService from 'shared/api/user/userService';
import DateInput from 'shared/date-input';
import FileInput from 'shared/file-input/index';
import SelectionData from 'shared/selection-data';

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

			<SelectionData
				setValue={setRank}
				value={rank}
				label='Archer level'
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
