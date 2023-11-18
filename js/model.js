import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const http = axios.create({
  baseURL: "http://localhost/integrative-programming-web-system-backend/api",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, X-Requested-With",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, PATCH, GET, DELETE",
  },
});

export const state = {
  response: {},
};

export const get = async (route) => {
  try {
    const res = await http.get(route);
    state.response = res;
  } catch (err) {
    state.response = res;
  }
};


export const registerStudent = async (route, formData) => {
  try {
    const res = await http.post(route, formData);
    state.response = res;
  } catch (err) {
    state.response = res;
  }
};
