import axios from "axios";

// export const api = axios.create({
//   baseURL: "https://kenziehub.herokuapp.com/",
//   timeout: 10000,
// });

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
});
