import type { AxiosPromise } from 'axios';
import apiClient from 'shared/api/http-common';

import { Contest, ContestRound } from './models';
const BASE_URL = '/create/contest/';

class contest {
	getContestList = (): AxiosPromise<Contest[]> => {
		return apiClient.get(BASE_URL);
	};

	createContestRound = (data: {}) => {
		return apiClient.post(BASE_URL + 'round', data);
	};

	createContestDuel = (data: Contest) => {
		return apiClient.post(BASE_URL + 'duel', data);
	};
}

const contesBuilder = new contest();

export default contesBuilder;
