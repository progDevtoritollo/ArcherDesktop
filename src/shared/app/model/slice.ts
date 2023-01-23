import { createSlice } from '@reduxjs/toolkit';

const initialState = { new: null };

export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		setNew: (state, action) => {
			state.new = action.payload;
		},
	},
});

export const { setNew } = appSlice.actions;

export default appSlice.reducer;
