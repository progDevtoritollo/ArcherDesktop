import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("TOKEN"),
  },
});
