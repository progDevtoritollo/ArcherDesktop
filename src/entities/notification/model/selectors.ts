import { RootState } from 'app/store/index';

export const selectNotificationData = (state: RootState) => state.notification;
