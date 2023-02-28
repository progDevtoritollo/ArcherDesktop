import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EventSliceState } from '../types';
import { Event } from 'shared/api/events/models';

const initialState: EventSliceState = {
	items: [
		{
			id: 3535,
			userName: 'Игорь Марусич',
			score: 234,
			event: 'round',
			time: '3 min',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 45645,
			userName: 'Игорь Марусич',
			score: 2,
			opponentScore: 5,
			event: 'duel',
			time: '12 min',
			opponentName: 'Loarense Aravisky',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 7675,
			userName: 'Игорь Марусич',
			score: 234,
			event: 'competition',
			time: '1 hour',
			userPhoto: 'URLdfbsfbof',
			competitionPlace: 2,
		},
		{
			id: 3454,
			userName: 'Игорь Марусич',
			score: 5,
			opponentScore: 4,
			event: 'duel',
			time: '2 hours',
			opponentName: 'Loarense Aravisky',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 4949,
			userName: 'Игорь Марусич',
			score: 2,
			opponentScore: 4,
			event: 'duel',
			time: '1 week',
			opponentName: 'Loarense Aravisky',
			userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
		},
		{
			id: 56457,
			userName: 'Игорь Марусич',
			score: 289,
			event: 'competition',
			time: '1 week',
			userPhoto: 'URLdfbsfbof',
			competitionPlace: 1,
		},
	],
};

const eventsSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {
		setEventsList(state, { payload }: PayloadAction<Event[]>) {
			state.items = payload;
		},
		clearEventsList(state) {
			state.items = [];
		},
	},
});

export const { setEventsList, clearEventsList } = eventsSlice.actions;

export default eventsSlice.reducer;
