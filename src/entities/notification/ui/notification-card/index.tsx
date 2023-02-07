import React from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './index.scss';

import { Notification } from 'shared/api/notifications/models';

const NotificationCard = ({ userName, typeNotification, userPhoto, paymentDay, nickname }: Notification) => {
	switch (typeNotification) {
		case 'payment':
			return (
				<div className='card-content'>
					<div className='left'>
						<svg
							className='card-content__icon'
							width='22'
							height='22'
							viewBox='0 0 17 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M8.5 0C3.80375 0 0 3.80375 0 8.5C0 13.1962 3.80375 17 8.5 17C13.1962 17 17 13.1962 17 8.5C17 3.80375 13.1962 0 8.5 0ZM9.5625 3.1875V5.3125H7.4375V3.1875H9.5625ZM6.375 12.75V13.8125H10.625V12.75H9.5625V6.375H6.375V7.4375H7.4375V12.75H6.375Z'
								fill='#3366FF'
							/>
						</svg>
						<div className='card-content__description'>
							<div>Payment reminder</div>
							<div>You need to pay for the classes by {paymentDay}</div>
						</div>
					</div>

					<div className='right'>
						<Button
							className='card-content__button'
							type='primary'>
							Pay
						</Button>
					</div>
				</div>
			);
		case 'friend':
			return (
				<div className='card-content'>
					<div className='left'>
						<Avatar
							className='card-content__avatar'
							src={userPhoto}
							size='large'
							icon={<UserOutlined />}
						/>
						<div className='card-content__name'>
							<div className='card-content__user-name'>{userName}</div>
							<div className='card-content__nickname'>{nickname}</div>
						</div>
					</div>
					<div className='right'>
						<Button
							className='card-content__button'
							type='primary'>
							Go to friend invite
						</Button>
					</div>
				</div>
			);
		case 'invite':
			return (
				<div className='card-content'>
					<div className='left'>
						<Avatar
							className='card-content__avatar'
							src={userPhoto}
							size='large'
							icon={<UserOutlined />}
						/>
						<div className='card-content__name'>
							<div className='card-content__user-name'>{userName}</div>
							<div className='card-content__nickname'>{nickname}</div>
						</div>
					</div>
					<div className='right'>
						<Button
							className='card-content__button'
							type='primary'>
							Go to the duel{' '}
						</Button>
					</div>
				</div>
			);
		case 'competition':
			return (
				<div className='card-content'>
					<div className='left'>
						<Avatar
							className='card-content__avatar'
							src={userPhoto}
							size='large'
							icon={<UserOutlined />}
						/>
						<div className='card-content__name'>
							<div className='card-content__user-name'>{userName}</div>
							<div className='card-content__nickname'>{nickname}</div>
						</div>
					</div>

					<div className='right'>
						<Button
							className='card-content__button'
							type='primary'>
							Go to the competition{' '}
						</Button>
					</div>
				</div>
			);
		default:
			return <div>error</div>;
	}
};

export default NotificationCard;
