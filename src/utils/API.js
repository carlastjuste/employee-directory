import axios from "axios";

const BASEURL ="https://randomuser.me/api/?results=";
const numberOfUser = "100";


export default {
    getUsers: function() {
      return axios.get(BASEURL + numberOfUser);
    }
  };
  