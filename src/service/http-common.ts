import axios from "axios";

export default axios.create({
  baseURL: "http://13.232.244.133/api",
  headers: {
    "Content-type": "application/json"
  }
});