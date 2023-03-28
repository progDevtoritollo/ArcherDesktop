import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, GoogleSquareFilled } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Block from 'shared/ui/Block';
import authBuilder from 'shared/api/auth/authService';
import { SetIsAuth } from 'entities/user/model/slice';
import { GOOGLE_API } from 'shared/api/http-common';

const LoginForm: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [form] = Form.useForm();
	const [, forceUpdate] = useState({});

	const [getResult, setPostResult] = useState<string | null>(null);

	const formatResponse = (res: any) => {
		return JSON.stringify(res, null, 2);
	};

	const { isLoading: isLoadingLogin, mutate: postLogin } = useMutation<any, Error>(
		'query-login',
		async () => {
			return await authBuilder.login(email, password);
		},
		{
			onSuccess: res => {
				const result = {
					status: res.status + '-' + res.statusText,
					headers: res.headers,
					data: res.data,
				};
				dispatch(SetIsAuth(true));
				setPostResult(formatResponse(result));
				navigate('/');
			},
			onError: (err: any) => {
				setPostResult(formatResponse(err.response?.data || err));
				dispatch(SetIsAuth(false));
			},
		},
	);
	useEffect(() => {
		if (isLoadingLogin) setPostResult('loading...');
	}, [isLoadingLogin]);

	function login() {
		try {
			postLogin();
		} catch (err) {
			setPostResult(formatResponse(err));
		}
	}

	useEffect(() => {
		forceUpdate({});
	}, []);

	const onFinish = () => {
		login();
	};

	const handleGoogleClick = () => {
		window.open(GOOGLE_API, '_blank', 'width=500,height=500');
	};

	return (
		<div>
			<div className='auth__top'>
				<h2>Войти в аккаунт</h2>
				<p>Пожалуйста, войдите в свой аккаунт</p>
			</div>
			<Block>
				<Form
					form={form}
					name='normal_login'
					className='login-form'
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}>
					<Form.Item
						hasFeedback
						name='email'
						// icon="mail"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}>
						<Input
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
							prefix={<MailOutlined className='site-form-item-icon' />}
							placeholder='E-mail'
						/>
					</Form.Item>
					<Form.Item
						name='password'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input your Password!',
							},
						]}>
						<Input
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Password'
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
					</Form.Item>

					<div className='auth__wrapper_button'>
						<Form.Item
							shouldUpdate
							className='button'>
							{() => (
								<Button
									className='button'
									type='primary'
									size='middle'
									htmlType='submit'
									disabled={
										!form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
									}>
									ВОЙТИ В АККАУНТ
								</Button>
							)}
						</Form.Item>
						<div onClick={handleGoogleClick}>
							<GoogleSquareFilled className='Google' />
						</div>
					</div>

					<Form.Item>
						<Link
							className='auth__register-link'
							to='/auth/signup'>
							Зарегистрироваться
						</Link>
					</Form.Item>
				</Form>
			</Block>
		</div>
	);
};

export default LoginForm;
