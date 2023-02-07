import type { AxiosPromise } from 'axios';
import apiClient from 'shared/api/http-common';

import type { Notification } from './models';

const BASE_URL = '/notifications';

export const getNotificationsList = (): AxiosPromise<Notification[]> => {
	return apiClient.get(BASE_URL);
};
