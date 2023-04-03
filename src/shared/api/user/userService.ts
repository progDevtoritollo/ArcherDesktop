import apiClient from 'shared/api/http-common';

class UserService {
	// API_USER_BY_ID= API + '/user/'
	API_USER_IS_AUTH = '/hello';

	API_USER_STATISTIC = '/checks/me/statistics-1';
	API_USER_CHECKS = '/checks/me';
	API_USER_CHECK_SAVE = '/checks/me/save';
	API_USER_INFO = '/user/me';

	//* new api
	API_USER_PROFILE_UPDATE = '/user/me/update';
	API_USER_PROFILE_UPDATE_AVATAR = '/user/me/update/avatar';

	API_USER_PROFILE_INFO = '/user/me';

	API_USER_BOW_UPDATE = '/user/bow/update';
	API_USER_VALUE = '/user/value/update';

	API_USER_BOW_SETTINGS = '/user/bow';

	setSettings(data: object) {
		return apiClient.post(this.API_USER_PROFILE_UPDATE, data);
	}
	postAvatar(data: File) {
		return apiClient.post(this.API_USER_PROFILE_UPDATE_AVATAR, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	}
	postUserSettingsValue(data: object) {
		return apiClient.post(this.API_USER_VALUE, data);
	}
	getUserSettings() {
		return apiClient.get(this.API_USER_PROFILE_INFO);
	}

	setBowSettings(data: object) {
		return apiClient.post(this.API_USER_BOW_UPDATE, data);
	}

	getBowSettings() {
		return apiClient.get(this.API_USER_BOW_SETTINGS);
	}

	//  getUserProfile(userid: number) {
	//   return  requestBuilder.MakeGetRequest(this.API_USER_BY_ID+
	//     userid)
	// }
	getIsAuth() {
		return apiClient(`${this.API_USER_IS_AUTH}`);
	}

	getUserStatistic() {
		return apiClient(`${this.API_USER_STATISTIC}`);
	}

	getUserChecks() {
		return apiClient(this.API_USER_CHECKS);
	}

	postUserCheckCreate(Data: object) {
		return apiClient(this.API_USER_CHECK_SAVE, Data);
	}

	getUserInfo() {
		return apiClient(this.API_USER_INFO);
	}
}
const userService = new UserService();

export default userService;
