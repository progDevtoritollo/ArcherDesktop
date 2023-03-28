import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Auth from 'pages/Auth/Auth';
import BasedPage from 'pages/BasedPage';
import { selectAppSate } from 'entities/app/model/selectors';
import { SetIsAuth } from 'entities/user/model/slice';
import userService from 'shared/api/user/userService';

import './index.scss';

export const Routing = () => {
	// подключить когда не нужна будет проверка
	// const { isAuth } = useSelector(selectAppSate);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	userService
	// 		.getIsAuth()
	// 		.then(res => {
	// 			if (res.status === 200) {
	// 				dispatch(SetIsAuth(true));
	// 			}
	// 		})
	// 		.catch(err => {
	// 			if (err.response.status === 401) {
	// 				dispatch(SetIsAuth(false));
	// 			}
	// 		});
	// });

	const isAuth = true;

	return (
		<div className='wrapper'>
			<Routes>
				<Route
					path='/auth/*'
					element={isAuth ? <Navigate to='/user/notifications' /> : <Auth />}
				/>
				<Route
					path='/*'
					element={isAuth ? <BasedPage /> : <Navigate to='/auth/signin' />}
				/>
				<Route
					path='*'
					element={<h1>404 Not Found</h1>}
				/>
			</Routes>
		</div>
	);
};
