import { Form, Select, Button, Radio, Input } from 'antd';
import { useEffect, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import './index.scss';

import { SetIsCoach } from 'entities/user/model/slice';
import clubService from 'shared/api/club/clubService';
import { selectClubSate } from 'entities/club/model/selectors';

const ClubSettings: FC = () => {
	const [clubName, setСlubName] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [street, setStreet] = useState('');
	const [building, setBuilding] = useState('');

	const [clubArray, setClubArray] = useState([]);
	const [clubId, setClubId] = useState(Number);

	const { name, id } = useSelector(selectClubSate);
	const dispatch = useDispatch();

	const [pageSwitch, setPageSwitch] = useState(true);

	const handleSelectClub = (clubId: number) => {
		setClubId(clubId);
	};
	const handleJoinClubSubmit = () => {
		let data = { clubId };
		console.log('send data Club Settings', data);
		clubService
			.postClubJoin(data)
			.then(res => {
				toast.success('You request to join clubsended ');
			})
			.catch(err => {
				toast.error('Error... something went wrong ');
			});
	};

	const handleCreateSubmit = () => {
		let data = {
			clubName,
			country,
			city,
			street,
			building,
		};
		console.log('send data Club Create', data);
		clubService
			.createClubs(data)
			.then(res => {
				if (res.status === 200) {
					toast.success('Club has created');
					console.log('crate club response ', res);
					dispatch(SetIsCoach(true));
				}
			})
			.catch(err => {
				toast.error('Error... something went wrong ');
				console.error(err);
			});
	};

	useEffect(() => {
		clubService
			.getAllClubs()
			.then(res => {
				console.log(res.data);
				setClubArray(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<div className='club-settings'>
			<Toaster />
			<h1>ClubSettings {clubName}</h1>
			<Radio.Group
				className='club-settings__page-switcher'
				value={pageSwitch}
				onChange={e => {
					setPageSwitch(e.target.value);
				}}>
				<Radio.Button value={true}>Join</Radio.Button>
				<Radio.Button value={false}>Create</Radio.Button>
			</Radio.Group>

			{pageSwitch ? (
				<>
					<Form
						labelCol={{
							span: 4,
						}}
						wrapperCol={{
							span: 14,
						}}
						layout='horizontal'
						onFinish={handleJoinClubSubmit}>
						{/* <Form.Item label="Город ">
              <Select>
                {cityArray.map((item, id) => (
                  <Select.Option key={id} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item> */}
						<br />
						<Form.Item label='Select'>
							<Select onChange={handleSelectClub}>
								{clubArray.map(club => (
									<Select.Option
										key={id}
										value={id}>
										{name}
									</Select.Option>
								))}
							</Select>
						</Form.Item>

						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'>
								Send join request
							</Button>
						</Form.Item>
					</Form>
					<span>Инфомация о клубе</span>
				</>
			) : (
				<>
					<h3>*The creator automatically become a club coach*</h3>
					<Form
						labelCol={{
							span: 4,
						}}
						wrapperCol={{
							span: 14,
						}}
						layout='horizontal'
						onFinish={handleCreateSubmit}>
						<Form.Item label='Club name '>
							<Input
								value={clubName}
								onChange={e => {
									setСlubName(e.target.value);
								}}
							/>
						</Form.Item>
						<Form.Item label='Country '>
							<Input
								value={country}
								onChange={e => {
									setCountry(e.target.value);
								}}
							/>
						</Form.Item>
						<Form.Item label='City '>
							<Input
								value={city}
								onChange={e => {
									setCity(e.target.value);
								}}
							/>
						</Form.Item>
						<Form.Item label='Street '>
							<Input
								value={street}
								onChange={e => {
									setStreet(e.target.value);
								}}
							/>
						</Form.Item>
						<Form.Item label='Building number '>
							<Input
								value={building}
								onChange={e => {
									setBuilding(e.target.value);
								}}
							/>
						</Form.Item>
						<Form.Item>
							<Button
								type='primary'
								htmlType='submit'>
								Create
							</Button>
						</Form.Item>
					</Form>
				</>
			)}
		</div>
	);
};

export default ClubSettings;
