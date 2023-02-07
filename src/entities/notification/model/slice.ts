import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationSliceState } from '../types';
import { Notification } from 'shared/api/notifications/models';

const initialState: NotificationSliceState = {
	items: [
		{
			id: 32324,
			typeNotification: 'payment',
			paymentDay: '22/10/23',
		},
		{
			id: 5647,
			userName: 'Mary Winchester',
			typeNotification: 'friend',
			nickname: 'fegrg',
		},
		{
			id: 6765,
			userName: 'Bill Torton',
			nickname: 'fegrg',
			typeNotification: 'invite',
		},
		{
			id: 8785,
			nickname: 'fegrg',
			userName: 'Ellie Willyams',
			typeNotification: 'competition',
		},
	],
};

const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setNotificationsList(state, { payload }: PayloadAction<Notification[]>) {
			state.items = payload;
		},
		// removeItem(state, action: PayloadAction<string>) {
		// 	state.items = state.items.filter(obj => obj.id !== action.payload);
		// },
		clearNotificationsList(state) {
			state.items = [];
		},
	},
});

export const { setNotificationsList, clearNotificationsList } = notificationSlice.actions;

export default notificationSlice.reducer;
