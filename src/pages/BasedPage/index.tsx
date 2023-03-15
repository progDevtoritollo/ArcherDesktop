import { Route, Routes, Navigate } from 'react-router-dom';

import TestPage from 'pages/test';
import Dashboard from 'pages/Dashboard';
import Menu from 'widgets/Menu';

import './index.scss';
import UserSettings from 'pages/userSettings';
import UserNotification from 'pages/userNotification';
import RoundPage from 'pages/create-round';
import UserActivity from 'pages/user-activity';
import FooterBar from 'widgets/FooterBar/FooterBar';
import UserFriendsPage from 'pages/user-friends';

const BasedPage = () => {
	return (
		<div className='base-page'>
			<div className='base-page__menu'>
				<Menu />
			</div>
			<div className='base-page__content'>
				<Routes>
					<Route
						path='/user/notifications'
						element={<UserNotification />}
					/>
					<Route
						path='/user/activity'
						element={<UserActivity />}
					/>
					<Route
						path='/user/friends'
						element={<UserFriendsPage />}
					/>

					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='/create/round'
						element={<RoundPage />}
					/>
					<Route
						path='/test'
						element={<TestPage />}
					/>

					<Route
						path='/user/settings'
						element={<UserSettings />}
					/>
					<Route
						path='*'
						element={
							<Navigate
								to='/NotFound'
								replace
							/>
						}
					/>
				</Routes>
			</div>

			<FooterBar />
		</div>
	);
};

export default BasedPage;
