import axios from 'axios';

// import requestBuilder from "./../utils/requestBuilder"
import apiClient from "app/http-common";

class UserService {
  // API_USER_BY_ID= API + '/user/'
  API_USER_IS_AUTH = '/hello'

  API_USER_PROFILE_UPDATE = '/user/me/update'
  API_USER_STATISTIC = '/checks/me/statistics-1'
  API_USER_CHECKS = '/checks/me'
  API_USER_CHECK_SAVE = '/checks/me/save'
  API_USER_INFO = '/user/me'

  // async getUserProfile(userid: number) {
  //   return await requestBuilder.MakeGetRequest(this.API_USER_BY_ID+
  //     userid)
  // }
  async getIsAuth() {
    return await apiClient(`${this.API_USER_IS_AUTH}`)
  }

  async postUserProfileUpdate(Data:object) {
    return await apiClient(this.API_USER_PROFILE_UPDATE,Data)
  }

  async getUserStatistic() {
    return await apiClient(`${this.API_USER_STATISTIC}`)
  }

  async getUserChecks() {
    return await apiClient(this.API_USER_CHECKS)
  }

  async postUserCheckCreate(Data:object) {
    return await apiClient(this.API_USER_CHECK_SAVE,Data)
  }

  async getUserInfo(){
    return await apiClient(this.API_USER_INFO)
  }

}
const userService = new UserService() 

export default userService;
