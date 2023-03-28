import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	name: '',
	trainer: '',
	location: {
		id: null,
		sysStatus: '',
		createDtm: '',
		modifyDtm: '',
		country: '',
		city: '',
		street: '',
		building: '',
	},
};

export const clubSlice = createSlice({
	name: 'club',
	initialState: initialState,
	reducers: {
		setClub: (state, action) => {
			state = action.payload;
		},
		setClubName: (state, action) => {
			state.name = action.payload;
		},
		setClubTrainer: (state, action) => {
			state.trainer = action.payload;
		},
	},
});

export const { setClub } = clubSlice.actions;

export default clubSlice.reducer;
