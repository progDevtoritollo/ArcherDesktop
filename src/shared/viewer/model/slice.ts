import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	isAuth: false,
	isCoach: false,
};

export const appSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setUserId: (state, action) => {
			state.id = action.payload;
		},
		SetIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
		SetIsCoach: (state, action) => {
			state.isCoach = action.payload;
		},
	},
});

export const { setUserId, SetIsAuth, SetIsCoach } = appSlice.actions;

export default appSlice.reducer;
