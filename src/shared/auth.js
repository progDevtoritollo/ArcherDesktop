import apiClient from "app/http-common";

class auth {
  API_URL = "http://localhost:8080/api/auth/";

  login = (email, password) => {
    return apiClient
      .post(this.API_URL + "login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("TOKEN", response.data.accessToken);
        return response;
      });
  };

  register = (name, sureName, email, password) => {
    return apiClient
      .post(this.API_URL + "signup", {
        name: name,
        surname: sureName,
        email: email,
        password: password,
        confirm: password,
      })
      .then((response) => {
        this.login(email, password);
        return response;
      });
  };

  logout = () => {
    // localStorage.removeItem("user");
    return apiClient.post(this.API_URL + "signout").then((response) => {
      return response;
    });
  };
}

const authBuilder = new auth();

export default authBuilder;
