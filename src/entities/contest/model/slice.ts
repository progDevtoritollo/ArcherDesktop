import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { contestSliceState, Shot, contestTypeEnum } from '../types';

const initialState: contestSliceState = {
	items: [],
	contestType: contestTypeEnum.round,
};

const contestSlice = createSlice({
	name: 'contest',
	initialState,
	reducers: {
		setContestList(state, { payload }: PayloadAction<Shot[]>) {
			state.items = payload;
		},
		addShot(state, { payload }: PayloadAction<Shot>) {
			state.items = [...state.items, payload];
		},
		delLastShot(state) {
			state.items = state.items.slice(0, -1);
		},
		clearContestList(state) {
			state.items = [];
		},
	},
});

export const { setContestList, clearContestList, addShot, delLastShot } = contestSlice.actions;

export default contestSlice.reducer;
