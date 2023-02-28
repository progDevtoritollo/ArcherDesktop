import { createSlice } from '@reduxjs/toolkit';

enum targetTypeEnum {
	fullTarget = 'full target',
	tripleTarget = 'triple',
}

const initialState = {
	isAuth: false,
	isCoach: false,
	targetType: targetTypeEnum.fullTarget,
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
