import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
};

export const appSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUser: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setUser } = appSlice.actions;

export default appSlice.reducer;
