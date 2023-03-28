import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	isCoach: false,
};

export const userSlice = createSlice({
	name: 'user',
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

export const { SetIsAuth, SetIsCoach } = userSlice.actions;

export default userSlice.reducer;
