import apiClient from 'shared/api/http-common';

class ClubService {
	API_GET_CLUB_CHECKS = '/clubs/checks/all';
	API_GET_CHECK = '/checks/';
	API_GET_MEMBERS = '/clubs/members';
	API_CREATE_CLUB = '/clubs/create';
	API_GET_CLUBS = '/clubs/all';
	API_CLUB_JOIN = '/clubs/join';
	API_GET_CLUB_NEW_COMERS = '/clubs/get-newcomers';
	API_POST_CLUB_NEW_COMERS_ADD = '/clubs/approve-newcomer';
	API_POST_CLUB_MEMBER_TABLE_STATISTIC1 = '/clubs/members/statistic-1';
	API_POST_CLUB_MEMBER_TABLE_STATISTIC2 = '/clubs/members/statistic-2';

	async getClubChecks() {
		return await apiClient(`${this.API_GET_CLUB_CHECKS}`);
	}

	async getClubCheck(checkId: number) {
		return await apiClient(this.API_GET_CHECK + checkId);
	}
	async createClubs(data: object) {
		return await apiClient(this.API_CREATE_CLUB, data);
	}

	async getClubMembers() {
		return await apiClient(this.API_GET_MEMBERS);
	}
	async getAllClubs() {
		return await apiClient(this.API_GET_CLUBS);
	}

	async postClubJoin(data: object) {
		return await apiClient(`${this.API_CLUB_JOIN}`, data);
	}

	async getNewComers() {
		return await apiClient(`${this.API_GET_CLUB_NEW_COMERS}`);
	}
	async postNewComerAdd(data: object) {
		return await apiClient(this.API_POST_CLUB_NEW_COMERS_ADD, data);
	}

	async getClubMembersStatistic_1() {
		return await apiClient(this.API_POST_CLUB_MEMBER_TABLE_STATISTIC1);
	}

	async getClubMembersStatistic_2() {
		return await apiClient(this.API_POST_CLUB_MEMBER_TABLE_STATISTIC2);
	}
}
const clubService = new ClubService();

export default clubService;
