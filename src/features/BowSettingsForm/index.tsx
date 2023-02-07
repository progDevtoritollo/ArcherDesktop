import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation, useQuery } from 'react-query';

import userService from 'shared/api/user/userService';
import { BowSettingsType } from 'app/types/types';

type Props = {};

const BowSettingsForm: React.FC = ({}: Props) => {
	const [aimX, setAimX] = useState<string>();
	const [aimY, setAimY] = useState<string>();
	const [BowBase, setBowBase] = useState<string>();

	//* get bow settings

	const [BowGetDataResult, setBowGetDataResult] = useState<string | null>(null);

	const fortmatGetDataBowResponse = (res: any) => {
		return JSON.stringify(res, null, 2);
	};

	const { isLoading: isLoadingBowData, refetch: getBowData } = useQuery<BowSettingsType, Error>(
		'query-bow-setting',
		async () => {
			return await userService.getBowSettings();
		},
		{
			enabled: false,
			retry: 1,
			onSuccess: res => {
				setBowGetDataResult(fortmatGetDataBowResponse(res));
			},
			onError: (err: any) => {
				setBowGetDataResult(fortmatGetDataBowResponse(err.response?.data || err));
			},
		},
	);

	useEffect(() => {
		if (isLoadingBowData) setBowGetDataResult('loading...');
	}, [isLoadingBowData]);

	function getBowSettingsData() {
		try {
			getBowData();
		} catch (err) {
			setBowGetDataResult(fortmatGetDataBowResponse(err));
		}
	}

	//? post
	const [PostBowSettings, setPostBowSettings] = useState<string | null>(null);

	const fortmatPostBowSettings = (res: any) => {
		return JSON.stringify(res, null, 2);
	};

	const { isLoading: isPostingBowSettings, mutate: postTutorial } = useMutation<any, Error>(
		async () => {
			return await userService.setBowSettings({
				aimX: aimX,
				aimY: aimY,
				BowBase: BowBase,
			});
		},
		{
			onSuccess: res => {
				setPostBowSettings(fortmatPostBowSettings(res));
			},
			onError: (err: any) => {
				setPostBowSettings(fortmatPostBowSettings(err.response?.data || err));
			},
		},
	);

	useEffect(() => {
		if (isPostingBowSettings) setPostBowSettings('posting...');
	}, [isPostingBowSettings]);

	function postBowSettings() {
		try {
			postTutorial();
		} catch (err) {
			setPostBowSettings(fortmatPostBowSettings(err));
		}
	}

	const clearPostBowOutput = () => {
		setPostBowSettings(null);
	};

	const handleSubmitBowSettings = () => {
		postBowSettings();
	};

	return (
		<div>
			<h2>Bow parameters</h2>
			<Form
				labelCol={{
					span: 3,
				}}
				wrapperCol={{
					span: 5,
				}}
				layout='vertical'
				onFinish={handleSubmitBowSettings}>
				<Form.Item label='Aim X'>
					<Input
						value={aimX}
						onChange={e => {
							setAimX(e.target.value);
						}}
					/>
				</Form.Item>
				<Form.Item label='Aim Y'>
					<Input
						value={aimY}
						onChange={e => {
							setAimY(e.target.value);
						}}
					/>
				</Form.Item>
				<Form.Item label='Base'>
					<Input
						value={BowBase}
						onChange={e => {
							setBowBase(e.target.value);
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
		</div>
	);
};

export default BowSettingsForm;
