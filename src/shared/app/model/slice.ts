import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	isCoach: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		SetIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
		SetIsCoach: (state, action) => {
			state.isCoach = action.payload;
		},
	},
});

export const { SetIsAuth, SetIsCoach } = appSlice.actions;

export default appSlice.reducer;
