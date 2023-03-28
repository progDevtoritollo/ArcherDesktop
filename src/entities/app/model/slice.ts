import { createSlice } from '@reduxjs/toolkit';

enum targetTypeEnum {
	fullTarget = 'full target',
	tripleTarget = 'triple',
}

const initialState = {
	targetType: targetTypeEnum.fullTarget,
};

export const appSlice = createSlice({
	name: 'app',
	initialState: initialState,
	reducers: {
		SetTargetType: (state, action) => {
			state.targetType = action.payload;
		},
	},
});

export const { SetTargetType } = appSlice.actions;

export default appSlice.reducer;
