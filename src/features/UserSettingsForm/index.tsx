import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Button, TreeSelect } from 'antd';
import dayjs from 'dayjs';
import { useMutation, useQuery } from 'react-query';

import userService from 'shared/api/user/userService';
import { UserPersonalInformationType } from 'app/types/types';

const dateFormat = 'YYYY-MM-DD';
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

type Props = {};

const UserSettingsForm: React.FC = ({}: Props) => {
	const [name, setName] = useState<string>();
	const [surname, setSurname] = useState<string>();
	const [username, setUsername] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [phoneNumber, setPhoneNumber] = useState<string>();
	const [birthday, setBirthday] = useState<string>();
	const [rank, setRank] = useState<string>();

	//* get UserForm settings

	const [UserFormGetDataResult, setUserFormGetDataResult] = useState<string | null>(null);

	const fortmatGetDataUserFormResponse = (res: any) => {
		return JSON.stringify(res, null, 2);
	};

	const { isLoading: isLoadingUserFormData, refetch: getUserFormData } = useQuery<UserPersonalInformationType, Error>(
		'query-UserForm-setting',
		async () => {
			return await userService.getUserSettings();
		},
		{
			enabled: false,
			onSuccess: res => {
				setUserFormGetDataResult(fortmatGetDataUserFormResponse(res));
			},
			onError: (err: any) => {
				setUserFormGetDataResult(fortmatGetDataUserFormResponse(err.response?.data || err));
			},
		},
	);

	useEffect(() => {
		if (isLoadingUserFormData) setUserFormGetDataResult('loading...');
	}, [isLoadingUserFormData]);

	function getUserFormSettingsData() {
		try {
			getUserFormData();
		} catch (err) {
			setUserFormGetDataResult(fortmatGetDataUserFormResponse(err));
		}
	}

	//* post user settings
	const [PostUserSettings, setPostUserSettings] = useState<string | null>(null);

	const fortmatPostResponse = (res: any) => {
		return JSON.stringify(res, null, 2);
	};

	const { isLoading: isPostingUserSettings, mutate: postUserSettings } = useMutation<any, Error>(
		async () => {
			//TODO create request
			return await userService.setSettings({
				name: name,
				surname: surname,
				username: username,
				email: email,
				phoneNumber: phoneNumber,
				birthday: birthday,
			});
		},
		{
			onSuccess: res => {
				setPostUserSettings(fortmatPostResponse(res));
			},
			onError: (err: any) => {
				setPostUserSettings(fortmatPostResponse(err.response?.data || err));
			},
		},
	);

	useEffect(() => {
		if (isPostingUserSettings) setPostUserSettings('posting...');
	}, [isPostingUserSettings]);

	function postUserSettingsData() {
		try {
			postUserSettings();
		} catch (err) {
			setPostUserSettings(fortmatPostResponse(err));
		}
	}

	const clearPostUserOutput = () => {
		setPostUserSettings(null);
	};

	//* handlers
	const handleSubmitUserSettings = () => {
		postUserSettingsData();
	};

	useEffect(() => {
		console.log(name, surname, username, email, phoneNumber, birthday);
	});

	return (
		<Form
			labelCol={{
				span: 6,
			}}
			wrapperCol={{
				span: 14,
			}}
			layout='vertical'
			onFinish={handleSubmitUserSettings}>
			<Form.Item label='Name'>
				<Input
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</Form.Item>
			<Form.Item label='Surname'>
				<Input
					value={surname}
					onChange={e => {
						setSurname(e.target.value);
					}}
				/>
			</Form.Item>
			<Form.Item label='UserName'>
				<Input
					value={username}
					onChange={e => {
						setUsername(e.target.value);
					}}
				/>
			</Form.Item>
			<Form.Item label='E-mail'>
				<Input
					value={email}
					onChange={e => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Item>
			<Form.Item label='Phone'>
				<Input
					value={phoneNumber}
					onChange={e => {
						setPhoneNumber(e.target.value);
					}}
				/>
			</Form.Item>
			<Form.Item label='Date of Birth'>
				<DatePicker
					format={dateFormat}
					onChange={(date, dateString) => {
						setBirthday(dateString);
					}}
					value={dayjs(birthday)}
					defaultValue={dayjs('2001-01-01', 'YYYY-MM-DD')}
				/>
			</Form.Item>

			<Form.Item label='Archer level'>
				<TreeSelect
					style={{ width: '100%' }}
					value={rank}
					dropdownStyle={{ maxHeight: 700, overflow: 'auto' }}
					treeData={treeData}
					placeholder='Please select'
					treeDefaultExpandAll
					onChange={(rank: string) => {
						setRank(rank);
					}}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'>
					Save
				</Button>
			</Form.Item>
		</Form>
	);
};

export default UserSettingsForm;
