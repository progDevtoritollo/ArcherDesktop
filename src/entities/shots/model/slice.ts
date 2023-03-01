import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { shotsSliceState, Shot } from '../types';

const initialState: shotsSliceState = {
	items: [],
};

const shotsSlice = createSlice({
	name: 'shot',
	initialState,
	reducers: {
		setShotsList(state, { payload }: PayloadAction<Shot[]>) {
			state.items = payload;
		},
		addShot(state, { payload }: PayloadAction<Shot>) {
			state.items = [...state.items, payload];
		},
		delLastShot(state) {
			state.items = state.items.slice(0, -1);
		},
		clearShotsList(state) {
			state.items = [];
		},
	},
});

export const { setShotsList, clearShotsList, addShot, delLastShot } = shotsSlice.actions;

export default shotsSlice.reducer;
