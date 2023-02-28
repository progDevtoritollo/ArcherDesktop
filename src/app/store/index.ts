import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import notification from 'entities/notification/model/slice';
import app from 'entities/app/model/slice';
import event from 'entities/event/model/slice';
import shot from 'entities/shots/model/slice';

export const store = configureStore({
	reducer: {
		app,
		notification,
		event,
		shot,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
