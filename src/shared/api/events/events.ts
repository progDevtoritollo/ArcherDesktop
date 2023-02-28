import type { AxiosPromise } from 'axios';
import apiClient from 'shared/api/http-common';

import type { Event } from './models';

const BASE_URL = '/events';

export const getEventsList = (): AxiosPromise<Event[]> => {
	return apiClient.get(BASE_URL);
};
