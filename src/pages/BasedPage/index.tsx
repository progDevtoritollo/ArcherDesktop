import { Route, Routes, Navigate } from 'react-router-dom';

import TestPage from 'pages/test';
import Dashboard from 'pages/Dashboard';
import Menu from 'widgets/Menu';

import './index.scss';
import UserSettings from 'pages/UserSettings';

const BasedPage = () => {
	return (
		<div className='base-page'>
			<div className='base-page__menu'>
				<Menu />
			</div>

			<div className='base-page__page-content'>
				<Routes>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='/test'
						element={<TestPage />}
					/>
					<Route
						path='/user-settings'
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

			<h1>Sidebar</h1>

			<h1>Footer</h1>
		</div>
	);
};

export default BasedPage;
