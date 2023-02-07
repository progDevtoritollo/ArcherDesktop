import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import notification from 'entities/notification/model/slice';

export const store = configureStore({
	reducer: {
		notification,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
