import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CardShadow from 'shared/CardShadow';
import NotificationCard from 'entities/notification/ui/notification-card';
import { selectNotificationData } from 'entities/notification/model/selectors';

import './index.scss';

const UserNotification: React.FC = () => {
	const { items } = useSelector(selectNotificationData);

	return (
		<div className='user-notification'>
			<h1>UserNotification</h1>
			<br />
			<h1>Notification Card</h1>
			{items.map(({ id, userName, typeNotification, paymentDay, nickname }) => (
				<CardShadow key={id}>
					<NotificationCard
						key={id}
						id={id}
						typeNotification={typeNotification}
						userName={userName}
						paymentDay={paymentDay}
						nickname={nickname}
					/>
				</CardShadow>
			))}
		</div>
	);
};

export default UserNotification;
