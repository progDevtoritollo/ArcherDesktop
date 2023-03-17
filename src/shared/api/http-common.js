import axios from 'axios';

// export const SERVER_LOCATION = window.location.origin;    // for prod
// export const SERVER_LOCATION = window.location.origin + "/api";    // for prod
export const SERVER_LOCATION = 'http://localhost:8080'; //for dev

export const API = SERVER_LOCATION + '/api'; //for dev

export const GOOGLE_API = SERVER_LOCATION + '/oauth2/authorize/google';

const apiClient = axios.create({
	// baseURL: 'http://localhost:8080/api',

	baseURL: API,
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json',
		// Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
	},
});

apiClient.interceptors.request.use(
	config => {
		const token = localStorage.getItem('TOKEN');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

export default apiClient;
