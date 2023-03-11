import React from 'react';
import { TabBar, Popup } from 'antd-mobile';
import { Avatar, Badge } from 'antd';
import { UserOutline } from 'antd-mobile-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	TeamOutlined,
	FireOutlined,
	MenuOutlined,
	SettingOutlined,
	BellOutlined,
	BookOutlined,
	LineChartOutlined,
	DatabaseOutlined,
	UserAddOutlined,
	GlobalOutlined,
	MacCommandOutlined,
	ContainerOutlined,
	FlagOutlined,
	UserOutlined,
	ApartmentOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import './FooterBar.scss';

const FooterBar: React.FC = () => {
	// const { isCoach } = useSelector(({ user }) => user);
	const isCoach = false;
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	const setRouteActive = (value: string) => {
		navigate(value);
	};
	const [visibleAvatar, setVisibleAvatar] = useState(false);
	const [visibleClub, setVisibleClub] = useState(false);
	const [visibleCoach, setVisibleCoach] = useState(false);
	const [visibleMore, setVisibleMore] = useState(false);
	const [visibleCreateActivity, setVisibleCreateActivity] = useState(false);

	return (
		<nav className='footer'>
			<div
				className='footer-item'
				onClick={() => {
					setVisibleAvatar(true);
				}}>
				<Badge count={11}>
					<Avatar
						shape='square'
						icon={<UserOutline />}
					/>
				</Badge>
				<h6>Iam</h6>
			</div>
			<div className='footer-item'>
				<TeamOutlined
					onClick={() => {
						setVisibleClub(true);
					}}
				/>
				<h6>Club</h6>
			</div>
			{isCoach && (
				<div className='footer-item'>
					<TeamOutlined
						onClick={() => {
							setVisibleCoach(true);
						}}
					/>
					<h6>Coach</h6>
				</div>
			)}
			<div className='footer-item'>
				<FireOutlined
					onClick={() => {
						setVisibleCreateActivity(true);
					}}
				/>
				<h6>Create</h6>
			</div>
			<div className='footer-item'>
				<MenuOutlined
					onClick={() => {
						setVisibleMore(true);
					}}
				/>
				<h6>More</h6>
			</div>

			<Popup
				visible={visibleAvatar}
				onMaskClick={() => {
					setVisibleAvatar(false);
				}}
				bodyStyle={{ minHeight: '5vh' }}>
				<TabBar
					activeKey={pathname}
					onChange={(value: string) => setRouteActive(value)}>
					<TabBar.Item
						className='footer-item'
						key={'user/notifications'}
						icon={<BellOutlined />}
						title={'Notification'}
						badge={11}
					/>
					<TabBar.Item
						className='footer-item'
						key={'user/activity'}
						icon={<BookOutlined />}
						title={'Activity'}
					/>
					<TabBar.Item
						className='footer-item'
						key={'user/friends'}
						icon={<UserAddOutlined />}
						title={'Friends'}
					/>
					<TabBar.Item
						className='footer-item'
						key={'user/statistic'}
						icon={<LineChartOutlined />}
						title={'Statistic'}
					/>

					<TabBar.Item
						className='footer-item'
						key={'user/settings'}
						icon={<SettingOutlined />}
						title={'Settings'}
					/>
				</TabBar>
			</Popup>
			<Popup
				visible={visibleClub}
				onMaskClick={() => {
					setVisibleClub(false);
				}}
				bodyStyle={{ minHeight: '5vh' }}>
				<TabBar
					activeKey={pathname}
					onChange={(value: string) => setRouteActive(value)}>
					<TabBar.Item
						className='footer-item'
						key={'club/statistic'}
						icon={<LineChartOutlined />}
						title={'Statistic'}
					/>
					<TabBar.Item
						className='footer-item'
						key={'club/activity'}
						icon={<DatabaseOutlined />}
						title={'Activity'}
					/>
					<TabBar.Item
						className='footer-item'
						key={'club/events'}
						icon={<MacCommandOutlined />}
						title={'Events'}
						badge={1}
					/>

					<TabBar.Item
						className='footer-item'
						key={'club/settings'}
						icon={<SettingOutlined />}
						title={'Settings'}
					/>
				</TabBar>
			</Popup>
			<Popup
				visible={visibleCoach}
				onMaskClick={() => {
					setVisibleCoach(false);
				}}
				bodyStyle={{ minHeight: '5vh' }}>
				<TabBar
					activeKey={pathname}
					onChange={(value: string) => setRouteActive(value)}>
					<TabBar.Item
						className='footer-item'
						key={'/coach/settings'}
						icon={<SettingOutlined />}
						title={'Settings'}
					/>

					<TabBar.Item
						className='footer-item'
						key={'/coach/events'}
						icon={<FireOutlined />}
						title={'Events'}
						badge={1}
					/>
					<TabBar.Item
						className='footer-item'
						key={'/coach/newcomers'}
						icon={<BookOutlined />}
						title={'New archers'}
						badge={0}
					/>
					<TabBar.Item
						className='footer-item'
						key={'/coach/members'}
						icon={<MenuOutlined />}
						title={'Member'}
					/>
				</TabBar>
			</Popup>
			<Popup
				visible={visibleCreateActivity}
				onMaskClick={() => {
					setVisibleCreateActivity(false);
				}}
				bodyStyle={{ minHeight: '5vh' }}>
				<TabBar
					activeKey={pathname}
					onChange={(value: string) => setRouteActive(value)}>
					<TabBar.Item
						className='footer-item'
						key={'create/round'}
						icon={<ContainerOutlined />}
						title={'New Round'}
					/>
					<TabBar.Item
						className='footer-item'
						key={'create/duel'}
						icon={<ApartmentOutlined />}
						title={'Duel'}
					/>
					<TabBar.Item
						className='footer-item'
						key={'create/competition'}
						icon={<FlagOutlined />}
						title={'Competition'}
					/>
				</TabBar>
			</Popup>
			<Popup
				visible={visibleMore}
				onMaskClick={() => {
					setVisibleMore(false);
				}}
				bodyStyle={{ minHeight: '5vh' }}>
				<TabBar
					activeKey={pathname}
					onChange={(value: string) => setRouteActive(value)}>
					<TabBar.Item
						className='footer-item'
						key={'/iam'}
						icon={<UserOutline />}
						title={'Iam'}
						badge={1}
					/>
					<TabBar.Item
						className='footer-item'
						key={'/todo'}
						icon={<TeamOutlined />}
						title={'Club'}
						badge={0}
					/>
					<TabBar.Item
						className='footer-item'
						key={'/Target'}
						icon={<FireOutlined />}
						title={'Target'}
						badge={0}
					/>
					<TabBar.Item
						className='footer-item'
						key={'/More'}
						icon={<MenuOutlined />}
						title={'More'}
						badge={0}
					/>
				</TabBar>
			</Popup>
		</nav>
	);
};

export default FooterBar;
