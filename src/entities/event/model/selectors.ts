import { RootState } from 'app/store/index';

export const selectEventData = (state: RootState) => state.event;
